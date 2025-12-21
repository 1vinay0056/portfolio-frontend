export default function About() {
  return (
    <section className="about">
      <div className="about-container">

        {/* Heading */}
        <h2 className="about-title">About Me</h2>

        {/* Intro Box */}
        <div className="about-intro-box">
          <p>
            I’m <strong>Vinay Kumar</strong>, a Computer Engineering student and
            <strong> Full Stack Developer</strong> passionate about building
            scalable, user-friendly web applications.
          </p>
        </div>

        {/* Structured Description */}
        <div className="about-text-boxes">

  <div className="about-box">
    <h4>🛠️ Core Skills</h4>
    
     <p>
      Along with web development, I have practical exposure to
      <strong> Python</strong>, <strong>AI/ML concepts</strong>, and
      <strong> REST API development</strong>. I continuously focus on
      improving my problem-solving ability and software engineering
      practices.
    </p>
  </div>

  <div className="about-box">
    <h4>🧠 Additional Expertise</h4>
   <p>
      I specialize in the <strong>MERN stack</strong> and have hands-on
      experience developing real-world full-stack applications,
      including <strong>IoT-based systems</strong> and
      <strong> Machine Learning powered projects</strong>.
    </p>
  </div>

</div>


        {/* Cards */}
        <div className="about-highlights">
          <div className="highlight">
            <h3>🎓 Education</h3>
            <p>
              B.Tech in Computer Engineering<br />
              Marwadi University
            </p>
          </div>

          <div className="highlight">
            <h3>💼 Experience</h3>
            <p>
              Full Stack Developer Intern<br />
              BrainyBeam Technologies
            </p>
          </div>

          <div className="highlight">
            <h3>🚀 Interests</h3>
            <p>
              Web Development,<br />
              AI/ML & IoT Systems
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
