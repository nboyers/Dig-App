import React from 'react';

const CallToAction = () => {
  return (
    <section style={styles.cta}>
      <button style={styles.button}>Join Waitlist</button>
    </section>
  );
};

const styles = {
  cta: {
    textAlign: 'center',
    padding: '20px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1rem',
    cursor: 'pointer',
  },
};

export default CallToAction;
