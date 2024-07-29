import React from 'react';

const Contact = () => {
  return (
    <div style={styles.container}>
      <section style={styles.formSection}>
        <h2>Contact Us</h2>
        <form style={styles.form}>
          <input type="text" placeholder="Name" style={styles.input} />
          <input type="email" placeholder="Email" style={styles.input} />
          <textarea placeholder="Message" style={styles.textarea}></textarea>
          <button type="submit" style={styles.button}>Send Message</button>
        </form>
      </section>
      <section style={styles.socialMedia}>
        <h2>Follow Us</h2>
        {/* Add social media icons with links here */}
      </section>
    </div>
  );
};

const styles = {
  container: {
    padding: '50px 20px',
  },
  formSection: {
    marginBottom: '30px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    padding: '10px',
    margin: '10px 0',
    width: '100%',
  },
  textarea: {
    padding: '10px',
    margin: '10px 0',
    width: '100%',
    height: '100px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1rem',
    cursor: 'pointer',
  },
  socialMedia: {
    display: 'flex',
    justifyContent: 'space-around',
  },
};

export default Contact;
