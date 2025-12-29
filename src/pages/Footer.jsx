import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">

      {/* Name */}
      <h2 className="footer-name">Vinay Kumar</h2>

      {/* Navigation Links */}
      <ul className="footer-links">
        <li><a href="/about">About</a></li>
        <li><a href="/skills">Skills</a></li>
        <li><a href="/experience">Experience</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/education">Education</a></li>
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
