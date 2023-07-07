// src/pages/Contact.js
import React, { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form inputs
    const errors = {};
    if (name.trim() === '') {
      errors.name = 'Name is required';
    }
    if (email.trim() === '') {
      errors.email = 'Email is required';
    } else if (!isValidEmail(email)) {
      errors.email = 'Invalid email format';
    }
    if (message.trim() === '') {
      errors.message = 'Message is required';
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    // Handle form submission here (e.g., send the data to a server or display a success message)
    alert('Form submitted:', { name, email, message });

    // Reset form inputs and errors
    setName('');
    setEmail('');
    setMessage('');
    setErrors({});
  };

  const isValidEmail = (email) => {
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div style={{display:"flex",justifyContent:"center"}}>
      <div style={{textAlign:"start"}}>
      <h1 style={{ textAlign: 'center' }}>Contact</h1>
      <form onSubmit={handleSubmit} style={{display:"block",textAlign:"center"}} >
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          {errors.message && <span className="error">{errors.message}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
      </div>
    </div>
  );
}

export default Contact;

