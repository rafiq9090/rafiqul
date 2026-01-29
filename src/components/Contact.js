import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    // Replace these with your actual EmailJS Service ID, Template ID, and Public Key
    // You can get them by signing up at https://www.emailjs.com/
    const SERVICE_ID = 'service_2eforf4';
    const TEMPLATE_ID = 'template_9m7q1jn';
    const PUBLIC_KEY = 'mwccH_HODhJU3Ihu4';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
        setStatus('Message sent successfully!');
        e.target.reset();
      }, (error) => {
        console.log(error.text);
        setStatus('Failed to send message. Please try again.');
      });
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <form ref={form} onSubmit={sendEmail} data-aos="fade-up">
        {/* Name attribute is required for EmailJS */}
        <input type="text" name="user_name" placeholder="Your Name" required />
        <input type="email" name="user_email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit">Send</button>
        {status && <p className="status-message">{status}</p>}
      </form>
      <div className="contact-info">
        <p>Email: <a href="https://mail.google.com/mail/u/0/#inbox?compose=new" target="_blank" rel="noopener noreferrer">islamrafiq9090@gmail.com</a></p>
        <p>Skype: <a href="skype:live:.cid.f1a45728d9c8b202">live:.cid.f1a45728d9c8b202</a></p>
        <p>Telegram: <a href="https://t.me/islamrafiq" target="_blank" rel="noopener noreferrer">@islamrafiq</a></p>
      </div>
    </section>
  );
}

export default Contact;
