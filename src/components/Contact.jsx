// components/Contact.jsx
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_n6wln0e',
      'template_n2wwd4k',
      form.current,
      '3NktsQJgBhtxPcYAN'
    )
    .then(() => {
      alert('Message sent successfully!');
    }, (error) => {
      console.error('Error:', error);
    });

    e.target.reset();
  };

  return (
    <section id="contact" className="container p-10">
        <div className="box">
      <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4 max-w-md">
        <input type="text" name="user_name" placeholder="Your Name" required className="p-2 border rounded" />
        <input type="email" name="user_email" placeholder="Your Email" required className="p-2 border rounded" />
        <textarea name="message" rows="5" placeholder="Your Message" required className="p-2 border rounded" />
        <button type="submit" className="bg-blue-500 text-white py-2 rounded">Send</button>
      </form>
      </div>
    </section>
  );
};

export default Contact;