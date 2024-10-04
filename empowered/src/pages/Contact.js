import React, { useState } from 'react';

const Contact = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent by: ${formData.name}`);
    // Here, you would typically handle sending the form data to your backend
  };

  const contactPageStyle = {
    padding: '50px 20px',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
  };

  const formStyle = {
    maxWidth: '600px',
    margin: '20px auto',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
    border: '1px solid #ccc',
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const infoStyle = {
    marginTop: '40px',
    color: '#555',
  };

  return (
    <div style={contactPageStyle}>
      <h1>Contact Us</h1>
      <p>If you have any questions, feel free to reach out to us using the form below.</p>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={inputStyle}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          style={inputStyle}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          style={inputStyle}
          required
        />
        <button type="submit" style={buttonStyle}>Send Message</button>
      </form>

      {/* Contact Information */}
      <div style={infoStyle}>
        <p><strong>Email:</strong> contact@empowered.com</p>
        <p><strong>Phone:</strong> +254 712 345 678</p>
        <p><strong>Social:</strong></p>
        <a href="https://instagram.com/empowered" target="_blank" rel="noopener noreferrer">Instagram</a> |{' '}
        <a href="https://linkedin.com/empowered" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </div>
  );
};

export default Contact;
