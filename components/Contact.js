import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact Form Submitted", form);
    alert("Thank you for your message. We will get back to you soon.");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Contact Us</h1>
      <label>Name:</label>
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        required
      />
      <label>Email:</label>
      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        required
      />
      <label>Message:</label>
      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        required
      ></textarea>
      <button type="submit">Send Message</button>
    </form>
  );
};

export default Contact;
