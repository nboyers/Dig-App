import React from 'react';

const Modal = ({ message, isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <p>{message}</p>
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
  },
  modal: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1rem',
    cursor: 'pointer',
    marginTop: '10px',
  },
};

export default Modal;
