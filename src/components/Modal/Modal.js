import React from 'react';

const Modal = ({ message, isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <p style={styles.message}>{message}</p>
        <button onClick={onClose} style={styles.button}>Close</button>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000, // Ensure it's above other elements
  },
  modal: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    maxWidth: '90%', // Ensure it fits on smaller screens
    margin: '0 20px', // Add some margin for small screens
  },
  message: {
    color: '#333', // Ensure the text color contrasts with the background
    marginBottom: '20px', // Add some space between message and button
  },
  button: {
    padding: '10px 20px',
    fontSize: '1rem',
    cursor: 'pointer',
    marginTop: '10px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#ff6600', // Match the button color with the form
    color: '#fff',
  },
};

export default Modal;
