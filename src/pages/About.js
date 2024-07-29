import React from 'react';

const About = () => {
  return (
    <div style={styles.container}>
      <section style={styles.section}>
        <h2>Our Mission</h2>
        <p>"Empowering music lovers to discover hidden talents."</p>
        <p>"To create a platform where unknown artists can shine."</p>
      </section>
      <section style={styles.section}>
        <h2>The Team</h2>
        {/* Add team member photos and bios here */}
      </section>
      <section style={styles.section}>
        <h2>Contact Information</h2>
        <p>Email: contact@digapp.com</p>
        <div style={styles.socialMedia}>
          {/* Add social media icons with links here */}
        </div>
      </section>
    </div>
  );
};

const styles = {
  container: {
    padding: '50px 20px',
  },
  section: {
    marginBottom: '30px',
  },
  socialMedia: {
    display: 'flex',
    justifyContent: 'space-around',
  },
};

export default About;
