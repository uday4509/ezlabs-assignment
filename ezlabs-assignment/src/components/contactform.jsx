import { useState } from "react";
import axios from "axios";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.phone || !form.message) {
      setStatus("❌ Please fill all fields!");
      return;
    }
    if (!validateEmail(form.email)) {
      setStatus("❌ Invalid email address!");
      return;
    }

    try {
      const res = await axios.post("https://vernanbackend.ezlab.in/api/contact-us/", form);
      if (res.status === 200) {
        setStatus("✅ Form Submitted Successfully!");
        setForm({ name: "", email: "", phone: "", message: "" });
      }
    } catch {
      setStatus("⚠️ Something went wrong!");
    }
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Us</h2>

      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Full Name" value={form.name} onChange={handleChange} />
        <input type="email" name="email" placeholder="Email Address" value={form.email} onChange={handleChange} />
        <input type="text" name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} />
        <textarea name="message" placeholder="Message" value={form.message} onChange={handleChange} rows="4"></textarea>
        <button type="submit">Submit</button>
        {status && <p className="status">{status}</p>}
      </form>
    </section>
  );
}

