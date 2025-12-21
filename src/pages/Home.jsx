import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="home">
      <div className="home-left">
        <h1>
          Hi, I’m <span>Vinay Kumar</span>
        </h1>

        <h2>Full Stack Developer (MERN) & AI/ML 
enthusiast</h2>

        <p>
          I am a Computer Engineering student and Full Stack Developer with
          hands-on experience in building scalable web applications.
          I specialize in MERN stack development and have worked on
          real-world projects including IoT-based systems and
          Machine Learning powered applications.
        </p>

        <div className="home-actions">
          <Link to="/projects" className="btn primary">
            View Projects
          </Link>
          <Link to="/contact" className="btn secondary">
            Contact Me
          </Link>
          <a
            href="/Vinay_Resume.pdf"
            download
            className="btn secondary"
          >
           Resume
          </a>
        </div>
      </div>

      <div className="home-right">
        <div className="profile-circle">
          <span>👨‍💻</span>
        </div>
        <p className="tagline">
          MERN • Python • AI/ML • IoT
        </p>
      </div>
    </section>
  );
}
