import React from 'react';
import './Faq.css';

const Faq = () => {
  return (
    <div className="container">
      <section className="faq">
        <h2>Common Questions</h2>
        {/* Add accordion style Q&A here */}
      </section>
      <section className="support">
        <h2>Support</h2>
        <p>Email: support@digapp.com</p>
        {/* Add help center link here */}
      </section>
    </div>
  );
};

export default Faq;
