import React from 'react';
import { FaMusic, FaStar, FaUser } from 'react-icons/fa';
import './Features.css';

const Features = () => {
  return (
    <section className="features">
      <h2>Features</h2>
      <div className="featureList">
        <div className="featureItem">
          <FaMusic className="icon" />
          <h3>Discover new artists</h3>
          <p>Discover new artists based on your taste.</p>
        </div>
        <div className="featureItem">
          <FaStar className="icon" />
          <h3>Exclusive content</h3>
          <p>Exclusive content and interviews.</p>
        </div>
        <div className="featureItem">
          <FaUser className="icon" />
          <h3>Personalized recommendations</h3>
          <p>Personalized recommendations.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
