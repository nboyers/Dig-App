import React from 'react';
import { FaMusic, FaStar, FaUser } from 'react-icons/fa';

const Features = () => {
  return (
    <section style={styles.features}>
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
    </section>
  );
};

const styles = {
  features: {
    padding: '50px 20px',
    textAlign: 'center',
    backgroundColor: '#f8f8f8',
  },
  featureList: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  featureItem: {
    flex: '1',
    margin: '0 10px',
    maxWidth: '300px',
  },
  icon: {
    fontSize: '2rem',
    margin: '10px 0',
  },
};

export default Features;
