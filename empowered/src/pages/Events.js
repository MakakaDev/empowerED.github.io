import React from 'react';

const Events = () => {
  const eventsPageStyle = {
    padding: '50px 20px',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
  };

  const eventCardStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    marginBottom: '20px',
    backgroundColor: '#fff',
    maxWidth: '600px',
    margin: '20px auto',
    textAlign: 'left',
  };

  const eventTitleStyle = {
    fontSize: '24px',
    marginBottom: '10px',
    color: '#333',
  };

  const eventDetailsStyle = {
    fontSize: '16px',
    marginBottom: '10px',
    color: '#555',
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <div style={eventsPageStyle}>
      <h1>Upcoming Events</h1>

      {/* Event 1 */}
      <div style={eventCardStyle}>
        <h2 style={eventTitleStyle}>Student Forum on Overcoming School Challenges</h2>
        <p style={eventDetailsStyle}>
          <strong>Date:</strong> December 22, 2023 <br />
          <strong>Location:</strong> Kenya Industrial Training Institute (KITI)
        </p>
        <button style={buttonStyle}>Register Now</button>
      </div>

      {/* Event 2 */}
      <div style={eventCardStyle}>
        <h2 style={eventTitleStyle}>Mental Health Awareness Workshop</h2>
        <p style={eventDetailsStyle}>
          <strong>Date:</strong> January 15, 2024 <br />
          <strong>Location:</strong> Nairobi, Kenya
        </p>
        <button style={buttonStyle}>Register Now</button>
      </div>

      {/* Event 3 */}
      <div style={eventCardStyle}>
        <h2 style={eventTitleStyle}>Time Management and Study Skills</h2>
        <p style={eventDetailsStyle}>
          <strong>Date:</strong> February 10, 2024 <br />
          <strong>Location:</strong> Mombasa, Kenya
        </p>
        <button style={buttonStyle}>Register Now</button>
      </div>
    </div>
  );
};

export default Events;
