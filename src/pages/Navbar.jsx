import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  return (
    <header className="navbar">

      <h2 className="logo">Vinay/Kumar</h2>

      {/* HAMBURGER BUTTON */}
      <button className="menu-btn" onClick={toggleMenu}>
        ☰
      </button>

      {/* MENU LINKS */}
      <ul className={`nav-links ${open ? "show" : ""}`}>
        <li><NavLink to="/" onClick={closeMenu}>Home</NavLink></li>
        <li><NavLink to="/about" onClick={closeMenu}>About</NavLink></li>
        <li><NavLink to="/skills" onClick={closeMenu}>Skills</NavLink></li>
        <li><NavLink to="/experience" onClick={closeMenu}>Experience</NavLink></li>
        <li><NavLink to="/projects" onClick={closeMenu}>Projects</NavLink></li>
        <li><NavLink to="/education" onClick={closeMenu}>Education</NavLink></li>
        <li><NavLink to="/contact" onClick={closeMenu}>Contact</NavLink></li>
        
      </ul>

    </header>
  );
}
