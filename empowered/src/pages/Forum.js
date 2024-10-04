import React from 'react';

const Forum = () => {
  const forumPageStyle = {
    padding: '50px 20px',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
  };

  const forumCategoryStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    marginBottom: '20px',
    backgroundColor: '#fff',
    maxWidth: '600px',
    margin: '20px auto',
    textAlign: 'left',
  };

  const categoryTitleStyle = {
    fontSize: '22px',
    color: '#333',
  };

  const categoryDescriptionStyle = {
    fontSize: '16px',
    color: '#555',
  };

  const buttonStyle = {
    marginTop: '10px',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <div style={forumPageStyle}>
      <h1>Student Forum</h1>
      <p>Join the conversation! Explore topics and share your experiences.</p>

      {/* Forum Category 1 */}
      <div style={forumCategoryStyle}>
        <h2 style={categoryTitleStyle}>Academic Stress</h2>
        <p style={categoryDescriptionStyle}>
          Discuss strategies for managing academic workload, exam pressure, and tough subjects.
        </p>
        <button style={buttonStyle}>View Discussions</button>
      </div>

      {/* Forum Category 2 */}
      <div style={forumCategoryStyle}>
        <h2 style={categoryTitleStyle}>Peer Relationships</h2>
        <p style={categoryDescriptionStyle}>
          Talk about building healthy friendships, resolving conflicts, and dealing with peer pressure.
        </p>
        <button style={buttonStyle}>View Discussions</button>
      </div>

      {/* Forum Category 3 */}
      <div style={forumCategoryStyle}>
        <h2 style={categoryTitleStyle}>Mental Health</h2>
        <p style={categoryDescriptionStyle}>
          Share experiences and tips for managing stress, anxiety, and maintaining mental well-being.
        </p>
        <button style={buttonStyle}>View Discussions</button>
      </div>

      {/* Forum Category 4 */}
      <div style={forumCategoryStyle}>
        <h2 style={categoryTitleStyle}>Future Career and Educational Goals</h2>
        <p style={categoryDescriptionStyle}>
          Explore career options, discuss educational paths, and seek guidance for future aspirations.
        </p>
        <button style={buttonStyle}>View Discussions</button>
      </div>
    </div>
  );
};

export default Forum;
