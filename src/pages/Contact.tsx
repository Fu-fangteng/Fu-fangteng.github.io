import ScrollReveal from "../components/ScrollReveal";
import { DogWaving } from "../components/DogDeco";
import "./Contact.css";

const info = [
  { icon:"✉️", label:"Email", value:<a href="mailto:ffu000@connect.hkust-gz.edu.cn">ffu000@connect.hkust-gz.edu.cn</a> },
  { icon:"📱", label:"WeChat / Tel", value:"+86 158 2043 3559" },
  { icon:"🏫", label:"Address", value:"HKUST(GZ) · No.1 Du Xue Road, Nansha, Guangzhou, China" },
  { icon:"🌐", label:"Personal Site", value:<a href="https://fu-fangteng.github.io/" target="_blank" rel="noopener noreferrer">fu-fangteng.github.io</a> },
];

export default function Contact() {
  return (
    <div className="contact">
      {/* Left — dark panel */}
      <ScrollReveal direction="left">
        <div className="contact-left">
          <div>
            <p className="contact-eyebrow">Let's Connect</p>
            <h1 className="contact-headline">
              Let's<br/><em>Talk.</em>
            </h1>
            <p className="contact-tagline">
              Whether you're a professor, researcher, or fellow student —
              I'm always happy to connect, collaborate, or just chat.
            </p>
          </div>
          <div style={{display:'flex', alignItems:'flex-end', justifyContent:'space-between'}}>
            <div className="contact-socials">
              <a href="https://fu-fangteng.github.io/" target="_blank" rel="noopener noreferrer" className="contact-social-link">↗ Personal Website</a>
              <a href="https://arxiv.org/search/?searchtype=author&query=Fangteng+FU" target="_blank" rel="noopener noreferrer" className="contact-social-link">↗ arXiv Papers</a>
            </div>
            <DogWaving size={80} />
          </div>
        </div>
      </ScrollReveal>

      {/* Right — info */}
      <div className="contact-right">
        {info.map((it,i)=>(
          <ScrollReveal key={it.label} delay={i*.1} direction="right">
            <div className="contact-info-block">
              <div className="cib-icon">{it.icon}</div>
              <div>
                <div className="cib-label">{it.label}</div>
                <div className="cib-value">{it.value}</div>
              </div>
            </div>
          </ScrollReveal>
        ))}
        <ScrollReveal delay={.45}>
          <div className="contact-note">
            🌱 Open to research collaborations, internship opportunities, and interesting conversations.
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
