export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left */}
        <div className="footer-left">
          <h3>Vinay Kumar</h3>
          <p>
            Full Stack Developer (MERN) <br />
            Building scalable web & intelligent systems
          </p>
        </div>

        {/* Center */}
        <div className="footer-center">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/skills">Skills</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Right */}
        <div className="footer-right">
          <h4>Connect</h4>
          <a href="mailto:vinaykumarmth78@gmail.com">Email</a>
          <a
            href="https://github.com/1vinay0056"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/vinay-kumar-68a3492a5"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Vinay Kumar. All rights reserved.
      </div>
    </footer>
  );
}
