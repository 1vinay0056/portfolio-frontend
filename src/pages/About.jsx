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
<strong> AI/ML & Data Engineering Enthusiast</strong> passionate about
building data-driven systems, applying machine learning, and extracting meaningful insights from data.
          </p>
        </div>

        {/* Structured Description */}
        <div className="about-text-boxes">

  <div className="about-box">
    <h4>🛠️ Core Skills</h4>
    
   <p>
  I have hands-on experience in <strong>Python</strong>,
  <strong>Machine Learning</strong>,  <strong>Deep Learning</strong>, <strong>Data Analysis</strong>,
  <strong>SQL</strong>, and <strong>Database Management</strong>, with a
  strong focus on building <strong>data-driven solutions</strong>. My core skills include
  data preprocessing, statistical analysis, data visualization, and
  problem-solving, enabling me to work effectively across AI/ML, Data
  Science, Data Engineering, and Data Analytics domains.
</p>
  </div>

  <div className="about-box">
    <h4>🧠 Additional Expertise</h4>
   <p>
    In addition to AI and data-focused work, I have hands-on experience with
    the <strong>MERN stack</strong> and have developed real-world full-stack
    applications. My projects include <strong>IoT-based systems</strong> and
    <strong> Machine Learning powered solutions</strong>, allowing me to combine
    data-driven intelligence with scalable application development.
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
              Python Developer <br/>
              Octanet Services pvt ltd<br/>
              Full Stack Developer Intern<br />
              BrainyBeam Technologies
           
            </p>
          </div>

          <div className="highlight">
            <h3>🚀 Interests</h3>
            <p>
              Data Scientist,Data engineer<br />
              AI/Ml engineer<br />
              Data Analysis
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
