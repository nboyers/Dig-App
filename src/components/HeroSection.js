import React, { useState, useCallback } from 'react';
import { FaMusic, FaStar, FaUser } from 'react-icons/fa';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import Modal from './Modal/Modal';
import './HeroSection.css';
import debounce from 'lodash.debounce';
import { validateEmail, sanitizeInput } from './utils/utils';

const HeroSection = () => {
  const [email, setEmail] = useState('');
  const [modalMessage, setModalMessage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [honeypot, setHoneypot] = useState(''); // Honeypot field

  const debouncedSetEmail = useCallback(
    debounce((value) => setEmail(value), 300),
    []
  );

  const handleChange = (event) => {
    const sanitizedEmail = sanitizeInput(event.target.value);
    debouncedSetEmail(sanitizedEmail);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (honeypot !== '') {
      // If the honeypot field is filled, it's likely a bot
      return;
    }
    if (!validateEmail(email)) {
      setModalMessage('Please enter a valid email address.');
      setIsModalOpen(true);
      return;
    }

    try {
      // Add new email to the database
      await addDoc(collection(db, 'subscribers'), {
        email: email,
        timestamp: serverTimestamp(),
      });
      setModalMessage('Thank you for subscribing!');
      setEmail('');
    } catch (error) {
      setModalMessage('Failed to subscribe. Please try again.');
      console.log('Error adding document:', error);
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
            <div className="input-container">
              <input
                type="email"
                placeholder="Enter your email"
                onChange={handleChange}
                className="input"
                required
              />
              <input
                type="text"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                style={{ display: 'none' }}
                tabIndex="-1"
                autoComplete="off"
              />
              <button type="submit" className="button">Join Waitlist</button>
            </div>
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
