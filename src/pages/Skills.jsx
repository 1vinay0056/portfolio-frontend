export default function Skills() {
  return (
    <section className="skills-page">
      <div className="skills-container">

        <h2 className="skills-title">Skills</h2>
        <p className="skills-subtitle">
          Technical skills and tools I have worked with across AI/ML,
          Data Engineering, Analytics, and Full Stack development.
        </p>

        <div className="skills-grid">

          <div className="skill-card">
            <h3>💻 Programming Languages</h3>
            <div className="skill-tags">
              <span>Python</span>
              <span>Java</span>
              <span>C</span>
              <span>JavaScript</span>
            </div>
          </div>

          <div className="skill-card">
            <h3>🤖 AI / Machine Learning</h3>
            <div className="skill-tags">
              <span>Machine Learning</span>
              <span>Data Preprocessing</span>
              <span>Model Training</span>
              <span>Feature Engineering</span>
            </div>
          </div>

          <div className="skill-card">
            <h3>📊 Data Science & Analytics</h3>
            <div className="skill-tags">
              <span>Data Analysis</span>
              <span>Statistical Thinking</span>
              <span>Data Visualization</span>
              <span>Pandas</span>
              <span>NumPy</span>
            </div>
          </div>

          <div className="skill-card">
            <h3>⚙️ Backend & APIs</h3>
            <div className="skill-tags">
              <span>FastAPI</span>
              <span>Node.js</span>
              <span>REST APIs</span>
            </div>
          </div>

          <div className="skill-card">
            <h3>🗄️ Databases</h3>
            <div className="skill-tags">
              <span>SQL</span>
              <span>MongoDB</span>
              <span>Database Design</span>
            </div>
          </div>

          <div className="skill-card">
            <h3>🎨 Frontend (Additional)</h3>
            <div className="skill-tags">
              <span>React.js</span>
              <span>HTML5</span>
              <span>CSS3</span>
            </div>
          </div>

          <div className="skill-card">
            <h3>📚 Computer Science Fundamentals</h3>
            <div className="skill-tags">
              <span>DSA</span>
              <span>DBMS</span>
              <span>Operating Systems</span>
              <span>OOP</span>
            </div>
          </div>

          <div className="skill-card">
            <h3>🛠️ Tools & Platforms</h3>
            <div className="skill-tags">
              <span>Git</span>
              <span>VS Code</span>
              <span>Postman</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}