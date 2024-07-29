import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <nav style={styles.navbar}>
        <div style={styles.logo}>Digg</div>
        <div style={styles.links}>
          <Link to="/" style={styles.link}>Home</Link>
          <Link to="/about" style={styles.link}>About</Link>
          <Link to="/blog" style={styles.link}>Blog</Link>
          <Link to="/faq" style={styles.link}>FAQ</Link>
        </div>
      </nav>
    );
  };
  
const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#fff',
    borderBottom: '1px solid #ccc',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  links: {
    display: 'flex',
    gap: '15px',
  },
  link: {
    textDecoration: 'none',
    color: '#000',
    fontSize: '1rem',
  },
};

export default Navbar;
