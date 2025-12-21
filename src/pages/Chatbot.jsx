import { useState } from "react";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi 👋 I’m Vinay’s assistant. How can I help you?" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = { from: "user", text: input };
    let botReply = "Thanks for your message! You can contact Vinay via the Contact page 😊";

    const text = input.toLowerCase();

    if (text.includes("skills")) {
      botReply = "Vinay works with MERN stack, Python, AI/ML, and IoT.";
    } else if (text.includes("project")) {
      botReply = "Vinay has built projects like Event Booking System, Fake News Detection, and IoT Entry–Exit Monitoring.";
    } else if (text.includes("contact")) {
      botReply = "You can contact Vinay via email, GitHub, or LinkedIn on the Contact page.";
    } else if (text.includes("resume")) {
      botReply = "You can download Vinay’s resume from the Home page 📄";
    }

    setMessages([...messages, userMsg, { from: "bot", text: botReply }]);
    setInput("");
  };

  return (
    <>
      {/* Floating Button */}
      <div className="chatbot-toggle" onClick={() => setOpen(!open)}>
        💬
      </div>

      {/* Chat Window */}
      {open && (
        <div className="chatbot-box">
          <div className="chatbot-header">
            Vinay’s Chatbot
            <span onClick={() => setOpen(false)}>✖</span>
          </div>

          <div className="chatbot-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`chat-msg ${msg.from}`}>
                {msg.text}
              </div>
            ))}
          </div>

          <div className="chatbot-input">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </>
  );
}
