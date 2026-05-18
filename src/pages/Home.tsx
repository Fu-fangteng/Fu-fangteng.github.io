import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import avatar from "../assets/imgs/me_good.jpg";
import ParticleCanvas from "../components/ParticleCanvas";
import ScrollReveal from "../components/ScrollReveal";
import MagneticWrap from "../components/MagneticWrap";
import { DogSitting, DogSleepingWithZzz } from "../components/DogDeco";
import "./Home.css";

const fadeUp = { hidden:{opacity:0,y:24}, visible:(d=0)=>({opacity:1,y:0,transition:{duration:.7,delay:d,ease:[.22,1,.36,1]}}) };

export default function Home() {
  const [ready, setReady] = useState(false);
  useEffect(()=>{ const t=setTimeout(()=>setReady(true),60); return ()=>clearTimeout(t); },[]);

  return (
    <div className="home">
      {/* ══ HERO ══ */}
      <section className="hero">
        <ParticleCanvas dark={false} />

        {/* LEFT */}
        <div className="hero-left">
          <motion.div custom={0} variants={fadeUp} initial="hidden" animate={ready?"visible":"hidden"}>
            <div className="hero-tag">AI Researcher & Developer</div>
          </motion.div>

          <motion.h1 className="hero-name" custom={.1} variants={fadeUp} initial="hidden" animate={ready?"visible":"hidden"}>
            Fangteng<br/>FU<span className="period">.</span>
            <span className="cn">符芳腾</span>
          </motion.h1>

          <motion.p className="hero-desc" custom={.2} variants={fadeUp} initial="hidden" animate={ready?"visible":"hidden"}>
            Sophomore at HKUST(GZ) · NLP Research Group ·
            Two papers at ACL 2025 Findings · Building things that matter.
          </motion.p>

          <motion.div className="hero-meta" custom={.28} variants={fadeUp} initial="hidden" animate={ready?"visible":"hidden"}>
            <span className="chip">NLP Lab</span>
            <span className="chip">ACL 2025</span>
            <span className="chip">GPA 3.468</span>
            <span className="chip-gold chip">IELTS 7.5</span>
          </motion.div>

          <motion.div className="hero-ctas" custom={.36} variants={fadeUp} initial="hidden" animate={ready?"visible":"hidden"}>
            <MagneticWrap strength={0.4}>
              <a href="mailto:ffu000@connect.hkust-gz.edu.cn" className="btn-primary">✉ Say Hello</a>
            </MagneticWrap>
            <MagneticWrap strength={0.3}>
              <a href="#bio" className="btn-outline">↓ Explore</a>
            </MagneticWrap>
            <DogSitting size={54} style={{ marginLeft:'8px', alignSelf:'flex-end' }} />
          </motion.div>
        </div>

        {/* RIGHT */}
        <motion.div className="hero-right" custom={.15} variants={fadeUp} initial="hidden" animate={ready?"visible":"hidden"}>
          <div className="hero-photo-wrap">
            <div className="hero-photo-ring">
              <img src={avatar} alt="Fangteng FU" className="hero-photo" />
            </div>
            <span className="float-chip">🎓 HKUST(GZ)</span>
            <span className="float-chip">🔬 NLP Research</span>
            <span className="float-chip">🏆 ACL 2025</span>
            <span className="float-chip">🥏 Frisbee Captain</span>
          </div>
        </motion.div>

        <div className="scroll-cue">scroll</div>
      </section>

      {/* ══ STATS STRIP ══ */}
      <ScrollReveal>
        <div className="stats-strip">
          {[
            { num:"2+", label:"Years at HKUST" },
            null,
            { num:"3.468", label:"Cumulative GPA" },
            null,
            { num:"7.5", label:"IELTS Score" },
            null,
            { num:"2", label:"ACL 2025 Papers" },
          ].map((s,i)=>
            s===null
              ? <div key={i} className="stat-divider"/>
              : (
                <div key={i} className="stat-item">
                  <div className="stat-num">{s.num.replace(/(\d)/g,'$1')}<span>.</span></div>
                  <div className="stat-label">{s.label}</div>
                </div>
              )
          )}
        </div>
      </ScrollReveal>

      {/* ══ BENTO BIO ══ */}
      <section id="bio" className="bio-section">
        <ScrollReveal>
          <div className="bio-header">
            <p className="section-label">About Me</p>
            <h2 className="bio-title">A snapshot of<br/><em>who I am</em></h2>
          </div>
        </ScrollReveal>

        <div className="bento-grid">
          {/* Intro — wide */}
          <ScrollReveal className="bc bc-intro" delay={0}>
            <div className="bc-deco">M</div>
            <p className="bc-intro-name">Hi, I'm Magnus 👋</p>
            <p className="bc-intro-text">
              I'm fascinated by how large language models reason — and where they fail.
              From cartoon dataset pipelines to multimodal essay scoring benchmarks,
              I love turning research ideas into something real.
              Outside the lab, I captain the frisbee team and founded the street dance club.
            </p>
          </ScrollReveal>

          {/* GPA */}
          <ScrollReveal className="bc bc-gpa" delay={.08}>
            <div className="bc-deco">A</div>
            <div className="bc-label">Cumulative GPA</div>
            <div className="bc-big">3.47</div>
            <div className="bc-sub">out of 4.3 · HKUST(GZ)</div>
          </ScrollReveal>

          {/* Papers */}
          <ScrollReveal className="bc bc-papers" delay={.12}>
            <div className="bc-label">Published</div>
            <div className="bc-big">2×</div>
            <div className="bc-sub">ACL 2025 Findings<br/>Math Reasoning · Essay Scoring</div>
          </ScrollReveal>

          {/* IELTS */}
          <ScrollReveal className="bc bc-ielts" delay={.16}>
            <div className="bc-deco">E</div>
            <div className="bc-label">IELTS Overall</div>
            <div className="bc-big">7.5</div>
            <div className="bc-sub">Reading 9 · Listening 8.5</div>
          </ScrollReveal>

          {/* Education */}
          <ScrollReveal className="bc bc-edu" delay={.2}>
            <div className="bc-label">Education</div>
            <div className="bc-big" style={{fontSize:'1.4rem'}}>HKUST(GZ)</div>
            <div className="bc-sub">B.Eng. Artificial Intelligence · Sep 2023 – Present<br/>
              Linear Algebra A+ · Deep Learning A</div>
          </ScrollReveal>

          {/* Fun */}
          <ScrollReveal className="bc bc-fun" delay={.24}>
            <div style={{display:'flex', alignItems:'flex-end', justifyContent:'space-between'}}>
              <div>
                <div className="bc-label">Beyond Research</div>
                <div className="bc-big">Frisbee<br/>Street Dance</div>
                <div className="bc-sub">Captain · Club Founder · Explorer</div>
              </div>
              <DogSleepingWithZzz size={52} />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
