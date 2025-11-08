import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission (simulated success for local)
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Frontend validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.message
    ) {
      setStatus("⚠️ Please fill all fields.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      setStatus("⚠️ Please enter a valid email address.");
      return;
    }

    try {
      // Simulate sending (instead of real API call to avoid CORS issues)
      setStatus("⏳ Sending...");
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Simulated success
      setStatus("✅ Form Submitted Successfully!");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      setStatus("❌ Failed to send message. Please try again.");
    }
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <h1>EZ Labs</h1>
        <ul className="nav-links">
          <li>
            <a href="#hero">Home</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero">
        <h2>Welcome to EZ Labs</h2>
        <p>Your partner in innovative tech solutions.</p>
        <a href="#contact" className="cta-btn">
          Get in Touch
        </a>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit">Submit</button>
        </form>

        {/* Status message */}
        {status && <p className="status">{status}</p>}
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 EZ Labs. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;


