import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">

      {/* Name */}
      <h2 className="footer-name">Vinay Kumar</h2>

      {/* Navigation Links */}
      <ul className="footer-links">
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/experience">Experience</Link></li>
        <li><Link to="/education">Education</Link></li>
      </ul>

      {/* Social Icons */}
      <div className="footer-social">
        <a href="https://x.com/VinayYa00559523"><FaTwitter /></a>
        <a href="https://www.linkedin.com/in/vinay-kumar-68a3492a5" target="_blank"><FaLinkedin /></a>
        <a href="https://www.instagram.com/raoo___saab/?igsh=ejllNDRlZjhrN3lw#"><FaInstagram /></a>
        <a href="https://github.com/1vinay0056" target="_blank"><FaGithub /></a>
      </div>

      {/* Copyright */}
      <p className="footer-copy">
        © {new Date().getFullYear()} Vinay Kumar. All rights reserved.
      </p>

    </footer>
  );
}
