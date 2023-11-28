import React, { useState } from 'react';
import './Popup.css'; 
const ContactPopup = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  return (
    <div>
      
      <p className="contact-link" onClick={openPopup}>Contact Us</p>

      {isPopupOpen && (
        <div className="popup-overlay">
          <div className="popup">
            <h2>Contact Details</h2>
            <p>Name: Rama Rao</p>
            <p>Email: rr.rooms@gmail.com</p>
            <p>Phone: +1 (555) 123-4567</p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactPopup;
