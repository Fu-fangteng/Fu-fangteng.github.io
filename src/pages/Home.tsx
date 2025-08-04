import homeBackground from "../assets/imgs/Homepage-bk.jpg";
import avatar from "../assets/imgs/avatar.jpg";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <section className="hero-section">
        <img
          src={homeBackground}
          alt="Background of Homepage"
          className="hero-image"
        />
        <div className="hero-info">
          <p className="name">Fangteng FU(符芳腾)</p>
          <p className="description">Sophomore with AI interest, HKUST(GZ)</p>
          <p className="description">
            Email:{" "}
            <a href="mailto:ffu000@connect.hksut-gz.edu.cn">FFT at hkustgz</a>
          </p>
        </div>
      </section>

      <section className="biography-section">
        <div className="biography">
          <h1>Fangteng FU</h1>

          <div className="bio-image">
            <img src={avatar} alt="Fangteng FU's avatar" />
          </div>

          <div className="bio-content">
            <p>
              Hello! I'm Fangteng FU(or you can call me Magnus). I am now a
              Sophomore at HKUSTGZ who is intended to major in AI. I was once a
              summer researcher at CIS Lab ,CMA Lab, HKUSTGZ and currently a
              Program Assistant at HKUSTGZ Library. Since I am not such a
              scholar now, this page is mainly used to demonstrate my projects,
              my current works and my future thoughts. (Also for selling myself
              to the professors :）)
            </p>

            <h2>Early Life & Education</h2>
            <p>
              I was born and raised in Shenzhen, however, I would recognize
              myself as Haian people. I graduated from Shenzhen Experimental
              School (SZSY). I have always had a great love of science, and I am
              happy to go on a quest to understand how a matter works. I was
              fascinated by the rigor and precision of mathematical logic and
              formulas and theorems to make things work. I also love the arts,
              from poetry to street dance.
            </p>

            <h2>!!!For Professors!!!</h2>
            <p>
              I aim to publish my own works in my junior year, consequently, I
              decided to gain as much experience in labs as possible when I am a
              sophomore. I am always willing to learn and to progress.
              Currently, I am equipped with the basic coding skills including
              python, c++, js, html and css. I have also finish courses like
              Honor Calculus and Applied Statistics and I also self-learn about
              the Data Structure and Algorithm. The summer research program also
              equipped me with the basic understanding of research.
            </p>
            <p>
              Now, I am really interesting in AI and Data Science Field. If you
              are looking for enthusiasm UG student, I will be a good choice. It
              will be my great honor to hear from you.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
