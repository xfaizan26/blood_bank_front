
import React from 'react';

function LogoutModal({ show, handleClose, handleLogout }) {
  if (!show) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h2 style={styles.title}>Confirm Logout</h2>
        <p style={styles.body}>Are you sure you want to log out?</p>
        <div style={styles.footer}>
          <button style={styles.button} onClick={handleClose}>
            Cancel
          </button>
          <button style={{ ...styles.button, backgroundColor: 'red', color: 'white' }} onClick={handleLogout}>
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}

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
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    width: '300px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  title: {
    fontSize:'16px',
    color: '#666',
    marginBottom:'20px',
    fontFamily: 'Verdana',
  },
  body: {
    marginBottom: '20px',
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  button: {
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
  },


};

export default LogoutModal;
