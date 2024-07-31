import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="container">
      <section className="formSection">
        <h2>Contact Us</h2>
        <form className="form">
          <input type="text" placeholder="Name" className="input" />
          <input type="email" placeholder="Email" className="input" />
          <textarea placeholder="Message" className="textarea"></textarea>
          <button type="submit" className="button">Send Message</button>
        </form>
      </section>
      <section className="socialMedia">
        <h2>Follow Us</h2>
        {/* Add social media icons with links here */}
      </section>
    </div>
  );
};

export default Contact;
