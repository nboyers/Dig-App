import React from 'react';

const SignUp = () => {
  return (
    <div style={styles.container}>
      <section style={styles.formSection}>
        <h2>Join Waitlist</h2>
        <form style={styles.form}>
          <input type="text" placeholder="Name" style={styles.input} />
          <input type="email" placeholder="Email" style={styles.input} />
          <input type="text" placeholder="Interests (optional)" style={styles.input} />
          <button type="submit" style={styles.button}>Join Waitlist</button>
        </form>
      </section>
      <section style={styles.privacyPolicy}>
        <h2>Privacy Policy</h2>
        <p>Information about data handling and privacy.</p>
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
  button: {
    padding: '10px 20px',
    fontSize: '1rem',
    cursor: 'pointer',
  },
  privacyPolicy: {
    marginBottom: '30px',
  },
};

export default SignUp;
