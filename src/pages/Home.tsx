import { useEffect, useState } from "react";
import homeBackground from "../assets/imgs/Homepage-bk.jpg";
import avatar from "../assets/imgs/my_img.jpg";
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
            <h1 className="name">
              Fangteng FU <br />
              (符芳腾)
            </h1>
            <p className="title">AI Researcher & Developer</p>
            <p className="description">Sophomore major in AI, HKUST(GZ)</p>
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
                Sophomore at HKUSTGZ who is major in AI. I am someone who is
                fancinated by AI and its applications and willing to contribute
                to the field.(hopefully interesting as well). I am also a person
                who is willing to learn and to progress. Every opportunity to
                get better will be cherished. At the same time, I am a person
                who loves to explore the world, loves frisbee and loves to make
                friends. So the fact that you've read this far already brings me
                great pleasure.
              </p>
            </div>

            <div className="bio-card">
              <h2>🌍 Early Life & Education</h2>
              <p>
                I was born and raised in Shenzhen, however, I would recognize
                myself as Hai'nan people. I graduated from Shenzhen Experimental
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
                All the chats and ideas from you have brought me a lot of
                benefits. During my freshman and sophomore years of
                undergraduate studies, I was eager to meet different professors
                and enthusciaticaly conduct simple research with them, thus
                gaining experience in the field of computer media related to
                animation generation and knowledge in the field of mathematical
                reasoning. I have always done my best in all my projects and
                assignments, and even though I may not be able to do the best
                job at the first time, I am always willing to meet with my
                professors and ask for advice, and then further improve the
                task.
              </p>
              <p>
                Now, I am majoring AI and dive a little bit into this domain,
                specifically, my current resarch is focusing on LLM
                Reasoning(Math). If you are looking for enthusiasm UG student, I
                will be a good choice. It will be my great honor to hear from
                you!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
