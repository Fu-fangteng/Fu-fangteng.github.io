import { useEffect, useState } from "react";
import myImage from "../assets/imgs/my_img.jpg";
import "./About.css";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    { name: "Python", level: 85, icon: "🐍" },
    { name: "C++", level: 75, icon: "⚡" },
    { name: "JavaScript", level: 80, icon: "🟨" },
    { name: "HTML/CSS", level: 90, icon: "🎨" },
    { name: "Machine Learning", level: 70, icon: "🤖" },
    { name: "Data Analysis", level: 75, icon: "📊" },
  ];

  return (
    <div className="about">
      {/* Hero Section */}
      <div className={`hero-section ${isVisible ? "fade-in" : ""}`}>
        <div className="hero-content">
          <div className="avatar-container">
            <img src={myImage} alt="Fangteng FU" className="avatar-image" />
            <div className="avatar-glow"></div>
            <div className="avatar-overlay">
              <span>👋 Hi, I'm Magnus!</span>
            </div>
          </div>
          <div className="hero-text">
            <h1 className="hero-name">@FangtengFU</h1>
            <p className="hero-location">🏫 HKUSTGZ, Guangdong, CHINA</p>
            <div className="hero-badges">
              <span className="badge">AI Researcher</span>
              <span className="badge">Student</span>
              <span className="badge">Developer</span>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction Cards */}
      <section className={`intro-section ${isVisible ? "slide-up" : ""}`}>
        <div className="intro-grid">
          <div className="intro-card">
            <div className="card-icon">👋</div>
            <h3>Welcome</h3>
            <p>
              Hi, I am Fangteng FU, or you can call me Magnus.(・∀・) Welcome to
              my webpage!
            </p>
          </div>

          <div className="intro-card">
            <div className="card-icon">🎓</div>
            <h3>Education</h3>
            <p>
              Now I am a Sophomore studying in HKUST-GZ, majoring in AI and Data
              Science.
            </p>
          </div>

          <div className="intro-card">
            <div className="card-icon">🔬</div>
            <h3>Research</h3>
            <p>
              Currently conducting research in cartoon animation generation and
              dataset building at CIS Lab.
            </p>
          </div>

          <div className="intro-card">
            <div className="card-icon">🤖</div>
            <h3>Interests</h3>
            <p>
              Passionate about AI fields including LLMs, Machine Learning, and
              Data Analysis.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className={`skills-section ${isVisible ? "slide-up" : ""}`}>
        <h2 className="section-title">
          <span className="title-icon">⚡</span>
          Skills & Expertise
        </h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="skill-item"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="skill-header">
                <div className="skill-info">
                  <span className="skill-icon">{skill.icon}</span>
                  <span className="skill-name">{skill.name}</span>
                </div>
                <span className="skill-level">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Work Experience */}
      <section className={`work-experience ${isVisible ? "slide-up" : ""}`}>
        <h2 className="section-title">
          <span className="title-icon">💼</span>
          Work Experience
        </h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <div className="timeline-header">
                <h3>Program Assistant</h3>
                <span className="timeline-badge">Current</span>
              </div>
              <p className="timeline-period">🏫 2024.9 - Present</p>
              <p className="timeline-location">🏫 HKUSTGZ Library</p>
              <p className="timeline-description">
                Supporting library operations and student services, managing
                digital resources and academic programs.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <div className="timeline-header">
                <h3>Student Representative</h3>
                <span className="timeline-badge">Active</span>
              </div>
              <p className="timeline-period">🏫 2024.6 - Present</p>
              <p className="timeline-location">
                🏫 Committee on Undergraduate Studies HKUSTGZ
              </p>
              <p className="timeline-description">
                Representing student interests in academic matters and
                curriculum development.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <div className="timeline-header">
                <h3>Summer Researcher</h3>
                <span className="timeline-badge">Completed</span>
              </div>
              <p className="timeline-period">🏫 2024.6 - 2024.9</p>
              <p className="timeline-location">
                🔬 CIS Lab, CMA Lab, AI Thrust, Information Hub, HKUSTGZ
              </p>
              <p className="timeline-description">
                Conducted research in cartoon animation generation and dataset
                building, contributing to experimental design and testing
                phases.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
