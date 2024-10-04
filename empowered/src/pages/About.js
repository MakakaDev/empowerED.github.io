import React from 'react';

const About = () => {
  const aboutStyle = {
    padding: '50px 20px',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
    color: '#333',
  };

  const missionStyle = {
    padding: '20px 0',
  };

  const teamSectionStyle = {
    marginTop: '40px',
  };

  const teamMemberStyle = {
    display: 'inline-block',
    width: '200px',
    margin: '20px',
    textAlign: 'center',
  };

  const imgStyle = {
    borderRadius: '50%',
    width: '120px',
    height: '120px',
    objectFit: 'cover',
  };

  return (
    <div style={aboutStyle}>
      <h1>About EmpowerED</h1>

      {/* Mission Section */}
      <section style={missionStyle}>
        <h2>Our Mission</h2>
        <p>
          EmpowerED is dedicated to providing a safe and supportive space for students to share their experiences, learn from peers, and overcome challenges together. Our mission is to empower every student with the tools, strategies, and support they need to excel in both academic and personal pursuits.
        </p>
      </section>

      {/* Team Section */}
      <section style={teamSectionStyle}>
        <h2>Meet the Team</h2>
        <div style={teamMemberStyle}>
          <img src="https://via.placeholder.com/120" alt="Team Member 1" style={imgStyle} />
          <h3>Jane Doe</h3>
          <p>Founder & CEO</p>
        </div>
        <div style={teamMemberStyle}>
          <img src="https://via.placeholder.com/120" alt="Team Member 2" style={imgStyle} />
          <h3>John Smith</h3>
          <p>Community Lead</p>
        </div>
        <div style={teamMemberStyle}>
          <img src="https://via.placeholder.com/120" alt="Team Member 3" style={imgStyle} />
          <h3>Sarah Lee</h3>
          <p>Content Manager</p>
        </div>
      </section>
    </div>
  );
};

export default About;
