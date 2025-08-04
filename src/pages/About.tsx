import myImage from "../assets/imgs/my_img.jpg";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <div className="avatar-section">
        <img src={myImage} alt="My avatar." className="avatar-image" />
        <div className="avatar-text">
          <p className="name">@FangtengFU</p>
          <p className="address">HKUSTGZ, Guangdong, CHINA</p>
          <p className="content">
            Hi, I am Fangteng FU, or you can call me Magnus.(・∀・)Welcome to my
            webpage!
          </p>
          <p className="content">Now I am a Sophomore studying in HKUST-GZ.</p>
          <p className="content">
            This webpage will introduce some of my projects, my current works
            and my plan in the future to you.
          </p>
          <p className="content">
            Currently, I have joined the summer research program and conducted
            serious of experiment on cartoon animation generation field.
          </p>
          <p className="content">
            Now I am interested in the more technical AI fields including LLMs,
            ML and Data analysis.
          </p>
          <p className="content">
            If you are related researcher and looking for undergraduate student
            to join your research, it will be my great honor to hear from you.
          </p>
        </div>
      </div>

      <section className="work-experience">
        <h2 className="work-experience-title">Work Experience</h2>
        <div className="experience-list">
          <p className="experience-item">
            <strong>2024.9 - Present</strong> Program Assistant, HKUSTGZ Library
          </p>
          <p className="experience-item">
            <strong>2024.6 - Present</strong> Student Representative Member of
            the Committee on Undergraduate Studies HKUSTGZ
          </p>
          <p className="experience-item">
            <strong>2024.6 - 2024.9</strong> Summer Researcher, CIS Lab, CMA
            Lab, AI Thrust, Information Hub, HKUSTGZ
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
