import { useEffect, useState } from "react";
import homeBackground from "../assets/imgs/Homepage-bk.jpg";
import avatar from "../assets/imgs/avatar.jpg";
import "./Home.css";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="home">
      <section className="hero-section">
        <div className="hero-background">
          <img
            src={homeBackground}
            alt="Background of Homepage"
            className="hero-image"
          />
          <div className="hero-overlay"></div>
        </div>
        <div className={`hero-info ${isVisible ? "fade-in" : ""}`}>
          <div className="hero-text">
            <h1 className="name">Fangteng FU (符芳腾)</h1>
            <p className="title">AI Researcher & Developer</p>
            <p className="description">Sophomore with AI interest, HKUST(GZ)</p>
            <div className="hero-links">
              <a
                href="mailto:ffu000@connect.hksut-gz.edu.cn"
                className="email-link"
              >
                <span className="icon">📧</span>
                FFT at hkustgz
              </a>
              <a href="#biography" className="scroll-link">
                <span className="icon">↓</span>
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="biography" className="biography-section">
        <div className={`biography ${isVisible ? "slide-up" : ""}`}>
          <div className="bio-header">
            <h1>About Me</h1>
            <div className="bio-image-container">
              <img
                src={avatar}
                alt="Fangteng FU's avatar"
                className="bio-image"
              />
              <div className="image-overlay">
                <div className="overlay-content">
                  <span>👋 Hi, I'm Magnus!</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bio-content">
            <div className="bio-card">
              <h2>👋 Introduction</h2>
              <p>
                Hello! I'm Fangteng FU (or you can call me Magnus). I am now a
                Sophomore at HKUSTGZ who is intended to major in AI. I was once
                a summer researcher at CIS Lab, CMA Lab, HKUSTGZ and currently a
                Program Assistant at HKUSTGZ Library. Since I am not such a
                scholar now, this page is mainly used to demonstrate my
                projects, my current works and my future thoughts.
              </p>
            </div>

            <div className="bio-card">
              <h2>🌍 Early Life & Education</h2>
              <p>
                I was born and raised in Shenzhen, however, I would recognize
                myself as Haian people. I graduated from Shenzhen Experimental
                School (SZSY). I have always had a great love of science, and I
                am happy to go on a quest to understand how a matter works. I
                was fascinated by the rigor and precision of mathematical logic
                and formulas and theorems to make things work. I also love the
                arts, from poetry to street dance.
              </p>
            </div>

            <div className="bio-card highlight">
              <h2>👨‍💻 For Professors</h2>
              <p>
                I aim to publish my own works in my junior year, consequently, I
                decided to gain as much experience in labs as possible when I am
                a sophomore. I am always willing to learn and to progress.
                Currently, I am equipped with the basic coding skills including
                python, c++, js, html and css. I have also finish courses like
                Honor Calculus and Applied Statistics and I also self-learn
                about the Data Structure and Algorithm.
              </p>
              <p>
                Now, I am really interesting in AI and Data Science Field. If
                you are looking for enthusiasm UG student, I will be a good
                choice. It will be my great honor to hear from you.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
