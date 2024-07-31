import React from 'react';
import './SignUp.css';

const SignUp = () => {
  return (
    <div className="container">
      <section className="formSection">
        <h2>Join Waitlist</h2>
        <form className="form">
          <input type="text" placeholder="Name" className="input" />
          <input type="email" placeholder="Email" className="input" />
          <input type="text" placeholder="Interests (optional)" className="input" />
          <button type="submit" className="button">Join Waitlist</button>
        </form>
      </section>
      <section className="privacyPolicy">
        <h2>Privacy Policy</h2>
        <p>Information about data handling and privacy.</p>
      </section>
    </div>
  );
};

export default SignUp;
