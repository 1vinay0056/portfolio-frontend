import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setStatus(
          "✅ Message sent successfully! A confirmation email has been sent to you."
        );
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("❌ Failed to send message. Please try again.");
      }
    } catch (error) {
      setStatus("❌ Server error. Please try later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-page">
      <div className="contact-container">
        <h2 className="contact-title">Contact Me</h2>
        <p className="contact-subtitle">
          Feel free to reach out for opportunities, collaborations, or queries.
        </p>

        <div className="contact-wrapper">
          {/* Left Info */}
          <div className="contact-info">
            <div className="info-card">
              <h3>📧 Email</h3>
              <a
                href="mailto:vinaykumarmth78@gmail.com"
                className="contact-link"
              >
                vinaykumarmth78@gmail.com
              </a>
            </div>

            <div className="info-card">
              <h3>💻 GitHub</h3>
              <a
                href="https://github.com/1vinay0056"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                github.com/1vinay0056
              </a>
            </div>

            <div className="info-card">
              <h3>🔗 LinkedIn</h3>
              <a
                href="https://www.linkedin.com/in/vinay-kumar-68a3492a5"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                linkedin.com/in/vinay-kumar
              </a>
            </div>
          </div>

          {/* Right Form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>

            {/* ✅ Auto-reply confirmation text */}
            {status && <p className="form-status">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
