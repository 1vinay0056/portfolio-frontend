import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="home">
      <div className="home-left">
        <h1>
          Hi, I’m <span>Vinay Kumar</span>
        </h1>

        <h2>AI/ML & Data Engineering Enthusiast</h2>

        <p>
          I am a Computer Engineering student with hands-on experience in
          <strong> Python, Machine Learning, and Data Analysis</strong>,
          focused on building intelligent and data-driven solutions.
          In addition, I have experience with the <strong>MERN stack</strong>,
          allowing me to develop scalable applications that integrate
          AI-powered features and real-world data systems.
        </p>

        <div className="home-actions">
          <Link to="/projects" className="btn secondary">
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
        <img
          src="/vinay.jpeg"
          alt="Vinay Kumar"
          className="hero-photo"
        />
      </div>
    </section>
  );
}