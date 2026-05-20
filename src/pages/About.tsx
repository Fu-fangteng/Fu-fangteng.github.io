import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import myImage from "../assets/imgs/me_good.jpg";
import ScrollReveal from "../components/ScrollReveal";
import { DogPeeking, DogSitting } from "../components/DogDeco";
import "./About.css";

const skills = [
  { name:"Python",                   pct:88 },
  { name:"Linear Algebra",           pct:86 },
  { name:"LaTeX / Git",              pct:85 },
  { name:"Natural Language Processing", pct:83 },
  { name:"Deep Learning",            pct:82 },
  { name:"PyTorch / HuggingFace",    pct:78 },
  { name:"Machine Learning",         pct:75 },
  { name:"C / C++",                  pct:62 },
  { name:"JavaScript / React",       pct:61 },
  { name:"HTML / CSS",               pct:60 },
];

function SkillRow({ s, i }: { s:typeof skills[0]; i:number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once:true, margin:"-40px" });
  return (
    <div ref={ref} className="skill-row">
      <span className="skill-name">{s.name}</span>
      <div className="skill-track">
        <motion.div className="skill-fill"
          initial={{width:0}}
          animate={inView?{width:`${s.pct}%`}:{}}
          transition={{duration:.9, delay:i*.06, ease:[.22,1,.36,1]}}
        />
      </div>
      <span className="skill-pct">{s.pct}%</span>
    </div>
  );
}

const research = [
  { year:"2024", active:true,  role:"UG Researcher — NLP Group", org:"Information Hub, HKUST(GZ)", period:"Oct 2024 – Present", desc:"Research on LLM mathematical reasoning and multimodal essay scoring. Two papers at ACL 2025 Findings.", badge:"Active" },
  { year:"2024", active:false, role:"Program Assistant", org:"HKUST(GZ) Library", period:"Sep – Dec 2024", desc:"Developed digital humanities programs for the library.", badge:"" },
  { year:"2024", active:false, role:"Summer Researcher — CIS Lab", org:"AI Thrust, HKUST(GZ)", period:"Jun – Sep 2024", desc:"Engineered high-quality multimodal cartoon dataset via automated skeleton extraction and alignment pipelines.", badge:"" },
];

const leadership = [
  { year:"2024", active:true,  role:"Student Representative", org:"Committee on Undergraduate Studies, HKUST(GZ) Senate", period:"Jun 2024 – Jun 2025", desc:"Represented student interests in academic affairs; involved in curriculum adjustments for AI and DSA majors.", badge:"" },
  { year:"2024", active:true,  role:"Captain", org:"HKUST(GZ) Frisbee Club — Zookeepers", period:"2024 – Present", desc:"Leading team training, competitions, and club operations.", badge:"" },
  { year:"2023", active:false, role:"Founder & President", org:"HKUST(GZ) Street Dancing Club · DtD", period:"2023 – 2024", desc:"Founded and presided over the street dance club in its inaugural year.", badge:"gold" },
  { year:"2023", active:false, role:"Team Leader, Frontend Developer", org:"Residential College 1, HKUST(GZ)", period:"2023 – 2024", desc:"Led front-end development and UI/UX design for RC1's official website.", badge:"" },
];

export default function About() {
  return (
    <div className="about">
      {/* ── Page Header ── */}
      <ScrollReveal>
        <div className="about-page-header">
          <div>
            <p className="section-label">Profile</p>
            <h1 className="about-headline">
              Magnus<br/><em>FU.</em>
            </h1>
            <p className="about-sub" style={{marginTop:"1.5rem"}}>
              AI researcher, developer and explorer based at HKUST(GZ).
              Passionate about LLM reasoning, multimodal AI, and making things
              that genuinely matter.
            </p>
          </div>
          <div className="about-photo-col">
            <img src={myImage} alt="Fangteng FU" className="about-photo"/>
          </div>
        </div>
      </ScrollReveal>

      {/* ── Quick Intro Blocks ── */}
      <div className="intro-row">
        {[
          { icon:"🎓", title:"Education", text:"HKUST(GZ) · B.Eng. AI · GPA 3.468/4.3" },
          { icon:"🔬", title:"Research",  text:"NLP Lab · LLM Reasoning · Multimodal AI" },
          { icon:"🌐", title:"Language",  text:"IELTS 7.5 · Reading 9 · Listening 8.5" },
          { icon:"🏅", title:"Campus",    text:"Frisbee Captain · Senate Rep · Dance Founder" },
        ].map((b,i)=>(
          <ScrollReveal key={b.title} delay={i*.07} className="intro-block">
            <div className="intro-block-icon">{b.icon}</div>
            <div className="intro-block-title">{b.title}</div>
            <div className="intro-block-text">{b.text}</div>
          </ScrollReveal>
        ))}
      </div>

      {/* ── Skills ── */}
      <section className="skills-section">
        <ScrollReveal>
          <div style={{display:'flex', alignItems:'flex-end', gap:'1rem', marginBottom:'2.5rem'}}>
            <h2 className="skills-heading" style={{margin:0}}>Skills &amp; <span>Expertise</span></h2>
            <DogPeeking size={42} style={{flexShrink:0, marginBottom:'-2px'}} />
          </div>
        </ScrollReveal>
        <div className="skills-list">
          {skills.map((s,i)=><SkillRow key={s.name} s={s} i={i}/>)}
        </div>
        <ScrollReveal delay={.3}>
          <p className="skills-extra">Also: Vue, Scikit-learn, NumPy, Pandas, Hugging Face (Transformers · PEFT), Markdown</p>
        </ScrollReveal>
      </section>

      {/* ── Research Timeline ── */}
      <section className="tl-section">
        <ScrollReveal>
          <h2 className="tl-heading">Research Experience</h2>
        </ScrollReveal>
        <div className="tl">
          {research.map((r,i)=>(
            <ScrollReveal key={r.role} delay={i*.1} className={`tl-item ${r.active?"active-tl":""}`}>
              <div className={`tl-year ${r.active?"active":""}`}>{r.year}</div>
              <div className="tl-card">
                <div className="tl-role">{r.role}</div>
                <div className="tl-org">{r.org}</div>
                <div className="tl-period">{r.period}</div>
                <div className="tl-desc">{r.desc}</div>
                {r.badge==="Active" && <span className="tl-badge">Active</span>}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── Leadership Timeline ── */}
      <section className="tl-section">
        <ScrollReveal>
          <div style={{display:'flex', alignItems:'flex-end', gap:'1rem'}}>
            <h2 className="tl-heading" style={{flex:1}}>Leadership</h2>
            <DogSitting size={52} style={{flexShrink:0, marginBottom:'-4px'}} />
          </div>
        </ScrollReveal>
        <div className="tl">
          {leadership.map((r,i)=>(
            <ScrollReveal key={r.role} delay={i*.08} className={`tl-item ${r.active?"active-tl":""}`}>
              <div className={`tl-year ${r.active?"active":""}`}>{r.year}</div>
              <div className="tl-card">
                <div className="tl-role">{r.role}</div>
                <div className="tl-org">{r.org}</div>
                <div className="tl-period">{r.period}</div>
                <div className="tl-desc">{r.desc}</div>
                {r.badge==="gold" && <span className="tl-badge gold">Founder</span>}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
}
