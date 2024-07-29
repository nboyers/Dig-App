import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.legalLinks}>
        <a href="/privacy" style={styles.link}>Privacy Policy</a>
        <a href="/terms" style={styles.link}>Terms of Service</a>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    background: 'rgba(0, 0, 0, 0.6)', // Semi-transparent black background
    color: '#fff',
    padding: '10px 20px',
    textAlign: 'center',
    position: 'fixed',
    left: '0',
    bottom: '0',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  quickLinks: {
    marginBottom: '5px',
    display: 'flex',
    gap: '15px',
  },
  legalLinks: {
    display: 'flex',
    gap: '15px',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
  },
};

export default Footer;
