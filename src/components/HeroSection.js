import React from 'react';
import { FaMusic, FaStar, FaUser } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <section style={styles.hero}>
      <div style={styles.overlay}>
        <div style={styles.textContainer}>
          <h1 style={styles.header}>Discover Underground Artists with Digg</h1>
          <h2 style={styles.subheader}>Join the waitlist and be the first to explore unknown talents.</h2>
          <p style={styles.tagline}>Find them before they are famous.</p>
          <form style={styles.form}>
            <input type="email" placeholder="Enter your email" style={styles.input} />
            <button type="submit" style={styles.button}>Join Waitlist</button>
          </form>
        </div>
        <div style={styles.features}>
          <h2>Features</h2>
          <div style={styles.featureList}>
            <div style={styles.featureItem}>
              <FaMusic style={styles.icon} />
              <h3>Discover new artists</h3>
              <p>Discover new artists based on your taste.</p>
            </div>
            <div style={styles.featureItem}>
              <FaStar style={styles.icon} />
              <h3>Exclusive content</h3>
              <p>Exclusive content and interviews.</p>
            </div>
            <div style={styles.featureItem}>
              <FaUser style={styles.icon} />
              <h3>Personalized recommendations</h3>
              <p>Personalized recommendations.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  hero: {
    backgroundImage: 'url(/background.jpeg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#fff',
    padding: '50px 20px',
    textAlign: 'center',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    position: 'relative',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Semi-transparent background for better readability
    padding: '20px',
    borderRadius: '10px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    maxWidth: '800px',
  },
  textContainer: {
    marginBottom: '20px',
  },
  header: {
    fontSize: '2.5rem',
    margin: '0 0 10px',
  },
  subheader: {
    fontSize: '1.5rem',
    margin: '0 0 10px',
  },
  tagline: {
    fontSize: '1.2rem',
    margin: '0 0 20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  input: {
    padding: '10px',
    margin: '10px 0',
    width: '300px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1rem',
    cursor: 'pointer',
  },
  features: {
    textAlign: 'center',
    padding: '20px',
    borderRadius: '10px',
  },
  featureList: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  featureItem: {
    flex: '1',
    margin: '10px',
    maxWidth: '200px',
    textAlign: 'center',
  },
  icon: {
    fontSize: '2rem',
    margin: '10px 0',
  },
};

export default HeroSection;
