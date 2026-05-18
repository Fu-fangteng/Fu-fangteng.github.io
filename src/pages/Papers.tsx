import paper1Image from "../assets/imgs/papers/math-survey.png";
import paper2Image from "../assets/imgs/papers/essay-judge.png";
import ScrollReveal from "../components/ScrollReveal";
import { DogReading } from "../components/DogDeco";
import "./Papers.css";

const papers = [
  {
    title:"A Survey of Mathematical Reasoning in the Era of Multimodal Large Language Model: Benchmark, Method & Challenges",
    venue:"ACL 2025 Findings",
    img:paper1Image,
    link:"https://arxiv.org/abs/2412.11936",
    tags:["cs.CL","Mathematical Reasoning","MLLM Survey"],
  },
  {
    title:"EssayJudge: A Multi-Granular Benchmark for Assessing Automated Essay Scoring Capabilities of Multimodal Large Language Models",
    venue:"ACL 2025 Findings",
    img:paper2Image,
    link:"https://arxiv.org/abs/2502.11916",
    tags:["cs.CL","cs.AI","Automated Essay Scoring"],
  },
];

export default function Papers() {
  return (
    <div className="papers">
      <ScrollReveal>
        <div className="papers-header">
          <div>
            <p className="section-label">Research Output</p>
            <h1 className="papers-headline">Published<br/><em>Papers</em></h1>
          </div>
          <div style={{display:'flex', alignItems:'flex-end', gap:'1.5rem'}}>
            <p className="papers-quote">
              "While there isn't that much to show yet — trust me, it won't be long
              before your scroll wheel struggles to reach the bottom."
            </p>
            <DogReading size={88} style={{flexShrink:0}} />
          </div>
        </div>
      </ScrollReveal>

      <div className="papers-body">
        {papers.map((p,i)=>(
          <ScrollReveal key={p.title} delay={i*.12}>
            <div className="paper-card">
              <div className="paper-img-col">
                <img src={p.img} alt={p.title} className="paper-img"/>
                <a href={p.link} target="_blank" rel="noopener noreferrer" className="paper-img-overlay">
                  ↗ View on arXiv
                </a>
              </div>
              <div className="paper-body">
                <span className="paper-venue">{p.venue}</span>
                <h2 className="paper-title">
                  <a href={p.link} target="_blank" rel="noopener noreferrer">{p.title}</a>
                </h2>
                <div className="paper-tags">{p.tags.map(t=><span key={t} className="paper-tag">{t}</span>)}</div>
                <a href={p.link} target="_blank" rel="noopener noreferrer" className="paper-arxiv">
                  Read on arXiv →
                </a>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
