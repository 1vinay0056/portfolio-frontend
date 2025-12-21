import { Link, NavLink } from "react-router-dom";

export default function Navbar({ dark, setDark }) {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        Portfolio<span></span>
      </div>

      <ul className="nav-links">
        <li>
          <NavLink to="/" className="nav-item">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="nav-item">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/skills" className="nav-item">
            Skills
          </NavLink>
        </li>
        <li>
          <NavLink to="/experience" className="nav-item">
            Experience
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" className="nav-item">
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="nav-item contact-btn">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
