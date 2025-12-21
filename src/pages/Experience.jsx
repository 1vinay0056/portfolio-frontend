export default function Experience() {
  return (
    <section className="experience">
      <div className="experience-container">
        <h2 className="experience-title">Experience</h2>

        <div className="timeline">

          {/* Item 1 */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>Full Stack Developer</h3>
              <span>BrainyBeam Technologies Pvt. Ltd.</span>
              <p className="date">May 2025 – Present</p>
              <p>
                Developing full-stack web applications using React, Node.js,
                Express.js, and MongoDB. Working on responsive UI, REST APIs,
                and scalable backend systems.
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>Python Development Intern</h3>
              <span>Octanet Services Pvt. Ltd.</span>
              <p className="date">June 2024 – July 2024</p>
              <p>
                Built Python-based applications and gained experience in
                debugging, scripting, and real-world problem solving.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
