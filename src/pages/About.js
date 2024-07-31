import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="container">
      <section className="section">
        <h2>Our Mission</h2>
        <p>"Empowering music lovers to discover hidden talents."</p>
        <p>"To create a platform where unknown artists can shine."</p>
      </section>
      <section className="section">
        <h2>The Team</h2>
        {/* Add team member photos and bios here */}
      </section>
      <section className="section">
        <h2>Contact Information</h2>
        <p>Email: contact@digapp.com</p>
        <div className="socialMedia">
          {/* Add social media icons with links here */}
        </div>
      </section>
    </div>
  );
};

export default About;
