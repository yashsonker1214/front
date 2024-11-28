import React, { useEffect, useState } from 'react';

const MessageComponent = () => {
  const [message, setMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newMessage = ``;
      setMessage(newMessage);
      setShowPopup(true);

      // Hide the popup after 5 seconds
      setTimeout(() => {
        setShowPopup(false);
      }, 5000);
    }, 900000); // 30 seconds in milliseconds

    // Cleanup function to clear the interval
    return () => clearInterval(intervalId);
  }, []);

  const popupStyle = {
    position: 'fixed',
    left: '30px', // Distance from the left side
    bottom: '20px', // Distance from the bottom
    backgroundColor: '#febd2f', // Background color
    border: '1px solid #febd2f', // Border color
    padding: '10px', // Padding around the text
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)', // Shadow for a card effect
    zIndex: 1000, // Ensure it appears above other elements
  };

  return (
    <div>
      {showPopup && (
        <div style={popupStyle}>
          <p style={{ color: '#173334' }}>{message}</p>
        </div>
      )}
    </div>
  );
};

export default MessageComponent;
