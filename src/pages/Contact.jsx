import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted (static demo)!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="contact-page">
      <h2>Contact Us</h2>
      <p>
        Have questions or want to know more about our products? Send us a message
        and we will get back to you shortly.
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Your name"
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Your email"
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Your message"
        />

        <button type="submit" className="btn">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
