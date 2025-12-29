import { Routes, Route } from "react-router-dom";

import Navbar from "./pages/Navbar.jsx";
import Footer from "./pages/Footer.jsx";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Skills from "./pages/Skills.jsx";
import Experience from "./pages/Experience.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";
import Chatbot from "./pages/Chatbot.jsx";
import Education from "./pages/Education.jsx";


// 👉 Home page = all sections (scroll works)
function HomePage() {
  return (
    <>
      <div id="home"><Home /></div>
      <div id="about"><About /></div>
      <div id="skills"><Skills /></div>
      <div id="experience"><Experience /></div>
      <div id="education"><Education /></div>
      <div id="projects"><Projects /></div>
      <div id="contact"><Contact /></div>
    </>
  );
}

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>

        {/* 👇 Scrollable homepage */}
        <Route path="/" element={<HomePage />} />

        {/* 👇 Dedicated pages (optional & still work) */}
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/education" element={<Education />} />

      </Routes>

      <Chatbot />
      <Footer />
    </>
  );
}
