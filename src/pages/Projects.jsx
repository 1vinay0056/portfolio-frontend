export default function Projects() {
  return (
    <section className="projects">
      <h2 className="experience-title">Projects</h2>


      {/* Project 1 */}
      <div className="project-card">
        <h3>Event Booking System</h3>
        <p className="tech">
          React • Node.js • Express.js • MongoDB
        </p>
        <p>
          A full-stack MERN application that allows users to browse events,
          book tickets, and manage schedules. The system includes secure
          authentication, role-based access, and real-time booking features.
        </p>
      </div>

      {/* Project 2 */}
      <div className="project-card">
        <h3>IoT Based Entry–Exit Monitoring System</h3>
        <p className="tech">
          React • Node.js • MongoDB • Arduino • RFID • ESP8266
        </p>
        <p>
          An IoT-enabled monitoring system that tracks entry and exit records
          using RFID cards. Hardware data is sent to a MERN stack web application
          where records are stored in MongoDB and displayed in real time through
          a user-friendly dashboard.
        </p>
      </div>

      {/* Project 3 */}
      <div className="project-card">
        <h3>Fake News Detection System</h3>
        <p className="tech">
          React • Python • FastAPI • Machine Learning • MongoDB
        </p>
        <p>
          A full-stack intelligent system that detects fake news using trained
          Machine Learning models. The frontend is built with React, while the
          backend is developed using Python and FastAPI. The ML model is trained
          on news datasets to classify content as real or fake.
        </p>
      </div>
    </section>
  );
}
