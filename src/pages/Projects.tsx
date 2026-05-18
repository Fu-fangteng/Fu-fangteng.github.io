import { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import project1Image from "../assets/imgs/projects/project_lapse.png";
import project2Image from "../assets/imgs/projects/project_map.png";
import project3Image from "../assets/imgs/projects/project_HQMMCA.png";
import project4Image from "../assets/imgs/projects/project_rc1.png";
import project5Image from "../assets/imgs/projects/project_agent.png";
import ScrollReveal from "../components/ScrollReveal";
import "./Projects.css";

const projects = [
  { title:"Time-lapse Photography", cat:"Computer Vision", desc:"Extracts frames from video and reconstructs them into a single still image, rendering a time-scale effect.", tags:["Python","CV","Image Processing"], img:project1Image, link:"#", live:false },
  { title:"Pythagorean Influence Map", cat:"Interactive Design", desc:"An interactive visualisation describing Pythagoras' historical and philosophical influence across civilisations.", tags:["JavaScript","D3.js","History"], img:project2Image, link:"#", live:false },
  { title:"HQMM-CA Cartoon Dataset", cat:"AI Research", desc:"Engineered a high-quality multimodal cartoon dataset via automated skeleton extraction and alignment pipelines.", tags:["PyTorch","Dataset","ML"], img:project3Image, link:"#", live:false },
  { title:"RC1 Official Website", cat:"Frontend", desc:"Spearheaded front-end development and UI/UX design for Residential College 1's official website at HKUST(GZ).", tags:["React","CSS","UI/UX"], img:project4Image, link:"https://rc1.hkust-gz.edu.cn/index.html", live:true },
  { title:"Job Market Multi-Agent", cat:"Multi-Agent AI", desc:"Multi-intelligence collaborative system for job-market analysis. Constructs a dual-link assessment framework and analyses market trends autonomously.", tags:["LLM","Multi-Agent","Python"], img:project5Image, link:"https://fu-fangteng.github.io/job_market_agent/", live:true },
];

function TiltCard({ children, className }: { children:React.ReactNode; className?:string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0), y = useMotionValue(0);
  const rx = useTransform(y,[-.5,.5],[5,-5]);
  const ry = useTransform(x,[-.5,.5],[-5,5]);
  const onMove=(e:React.MouseEvent<HTMLDivElement>)=>{
    const r=ref.current!.getBoundingClientRect();
    x.set((e.clientX-r.left)/r.width-.5);
    y.set((e.clientY-r.top)/r.height-.5);
  };
  return (
    <motion.div ref={ref} className={className}
      style={{rotateX:rx,rotateY:ry,transformStyle:"preserve-3d"}}
      onMouseMove={onMove} onMouseLeave={()=>{x.set(0);y.set(0);}}
      transition={{type:"spring",stiffness:280,damping:28}}
    >{children}</motion.div>
  );
}

export default function Projects() {
  return (
    <div className="projects">
      <ScrollReveal>
        <div className="projects-header">
          <div>
            <p className="section-label">Work</p>
            <h1 className="projects-headline">Selected<br/><em>Projects</em></h1>
          </div>
          <div className="projects-count">0{projects.length}</div>
        </div>
      </ScrollReveal>

      <div className="projects-body">
        <div className="pj-grid">
          {projects.map((p,i)=>(
            <ScrollReveal key={p.title} delay={i*.07}>
              <TiltCard className="pj-card">
                <div className="pj-img-wrap">
                  {p.img
                    ? <img src={p.img} alt={p.title} className="pj-img"/>
                    : <div className="pj-placeholder"><span className="pj-placeholder-letter">{p.title[0]}</span></div>
                  }
                  <span className="pj-category">{p.cat}</span>
                  {p.live && <div className="pj-live-dot"/>}
                </div>
                <div className="pj-body">
                  <h3 className="pj-title">{p.title}</h3>
                  <p className="pj-desc">{p.desc}</p>
                  <div className="pj-tags">{p.tags.map(t=><span key={t} className="pj-tag">{t}</span>)}</div>
                  <a href={p.link} target="_blank" rel="noopener noreferrer" className="pj-link">
                    View project →
                  </a>
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
