import React from 'react';

const Faq = () => {
  return (
    <div style={styles.container}>
      <section style={styles.faq}>
        <h2>Common Questions</h2>
        {/* Add accordion style Q&A here */}
      </section>
      <section style={styles.support}>
        <h2>Support</h2>
        <p>Email: support@digapp.com</p>
        {/* Add help center link here */}
      </section>
    </div>
  );
};

const styles = {
  container: {
    padding: '50px 20px',
  },
  faq: {
    marginBottom: '30px',
  },
  support: {
    marginBottom: '30px',
  },
};

export default Faq;
