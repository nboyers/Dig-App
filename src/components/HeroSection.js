import React, { useState } from 'react';
import { FaMusic, FaStar, FaUser } from 'react-icons/fa';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import Modal from './Modal/Modal';
import './HeroSection.css';

const HeroSection = () => {
  const [email, setEmail] = useState('');
  const [modalMessage, setModalMessage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateEmail(email)) {
      setModalMessage('Please enter a valid email address.');
      setIsModalOpen(true);
      return;
    }
    try {
      console.log('Adding document to Firestore with email:', email);
      await addDoc(collection(db, 'subscribers'), {
        email: email,
        timestamp: serverTimestamp()
      });
      console.log('Document successfully written!');
      setModalMessage('Thank you for subscribing!');
      setEmail('');
    } catch (error) {
      console.error('Error adding document: ', error);
      setModalMessage('Failed to subscribe. Please try again.');
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="hero">
      <div className="overlay">
        <div className="text-container">
          <h1 className="header">Discover Underground Artists with Digg</h1>
          <h2 className="subheader">Join the waitlist and be the first to explore unknown talents.</h2>
          <p className="tagline">Find them before they are famous.</p>
          <form className="form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input"
              required
            />
            <button type="submit" className="button">Join Waitlist</button>
          </form>
        </div>
        <div className="features">
          <h2>Features</h2>
          <div className="feature-list">
            <div className="feature-item">
              <FaMusic className="icon" />
              <h3>Discover new artists</h3>
              <p>Discover new artists based on your taste.</p>
            </div>
            <div className="feature-item">
              <FaStar className="icon" />
              <h3>Exclusive content</h3>
              <p>Exclusive content and interviews.</p>
            </div>
            <div className="feature-item">
              <FaUser className="icon" />
              <h3>Personalized recommendations</h3>
              <p>Personalized recommendations.</p>
            </div>
          </div>
        </div>
      </div>
      <Modal message={modalMessage} isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
};

export default HeroSection;
