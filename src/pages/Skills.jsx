export default function Skills() {
  return (
    <section className="skills-page">
      <div className="skills-container">

        <h2 className="skills-title">Skills</h2>
        <p className="skills-subtitle">
          Technologies and tools I have worked with across Full Stack, AI/ML,
          and IoT-based projects.
        </p>

        <div className="skills-grid">

          <div className="skill-card">
            <h3>💻 Programming Languages</h3>
            <div className="skill-tags">
              <span>C</span>
              <span>Java</span>
              <span>JavaScript</span>
              <span>Python</span>
            </div>
          </div>

          <div className="skill-card">
            <h3>🎨 Frontend</h3>
            <div className="skill-tags">
              <span>HTML5</span>
              <span>CSS3</span>
              <span>Bootstrap</span>
              <span>React.js</span>
            </div>
          </div>

          <div className="skill-card">
            <h3>⚙️ Backend</h3>
            <div className="skill-tags">
              <span>Node.js</span>
              <span>Express.js</span>
              <span>FastAPI</span>
            </div>
          </div>

          <div className="skill-card">
            <h3>🗄️ Databases</h3>
            <div className="skill-tags">
              <span>MongoDB</span>
              <span>SQL</span>
            </div>
          </div>

          <div className="skill-card">
            <h3>🤖 AI / ML</h3>
            <div className="skill-tags">
              <span>Machine Learning</span>
              <span>Artificial Intelligence</span>
            </div>
          </div>

          <div className="skill-card">
            <h3>📚 Core Subjects</h3>
            <div className="skill-tags">
              <span>DSA</span>
              <span>DBMS</span>
              <span>Operating System</span>
              <span>OOP</span>
            </div>
          </div>

          <div className="skill-card">
            <h3>🛠️ Tools & Platforms</h3>
            <div className="skill-tags">
              <span>Git</span>
              <span>GitHub</span>
              <span>VS Code</span>
              <span>Postman</span>
              <span>npm</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
