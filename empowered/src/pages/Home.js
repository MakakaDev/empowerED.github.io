import React, { useState } from 'react';
import Header from '../components/Header';  // Import Header component once
import Footer from '../components/Footer';  // Import Footer component once

// Sample data for merchandise
const merchandise = [
  { id: 1, name: 'T-Shirt', price: '$20', image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Hoodie', price: '$35', image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Cap', price: '$15', image: 'https://via.placeholder.com/150' },
];

// Sample data for pictorials
const pictorials = [
  '/assets/pictorials/image1.jpg',
  '/assets/pictorials/image2.jpg',
  '/assets/pictorials/image3.jpg',
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % pictorials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + pictorials.length) % pictorials.length);
  };

  return (
    <div>
      <Header />  {/* Render the header once here */}

      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroOverlay}></div>
        <h1 style={styles.heroTitle}>Empowering Students to Overcome Challenges Together</h1>
        <p style={styles.heroSubtitle}>
          Join a community that supports, guides, and helps students navigate through academic and personal challenges.
        </p>
        <div>
          <button
            style={styles.heroButton}
            onMouseEnter={(e) => (e.target.style.backgroundColor = '#007bff')}
            onMouseLeave={(e) => (e.target.style.backgroundColor = 'white')}
          >
            Join the Forum
          </button>
          <button
            style={styles.heroButton}
            onMouseEnter={(e) => (e.target.style.backgroundColor = '#007bff')}
            onMouseLeave={(e) => (e.target.style.backgroundColor = 'white')}
          >
            Explore Events
          </button>
        </div>
      </section>

      {/* Key Features Section */}
      <section style={styles.featuresSection}>
        <h2 style={styles.sectionTitle}>Key Features</h2>
        <div style={styles.featureCards}>
          <div style={styles.featureCard}>
            <h3>Peer Support</h3>
            <p>Connect with other students and share your experiences in a supportive environment.</p>
          </div>
          <div style={styles.featureCard}>
            <h3>Problem Solving</h3>
            <p>Collaborate to find solutions to academic and personal challenges.</p>
          </div>
          <div style={styles.featureCard}>
            <h3>Resource Sharing</h3>
            <p>Access valuable study materials and resources to enhance your learning.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section style={styles.testimonialsSection}>
        <h2 style={styles.sectionTitle}>What Our Users Say</h2>
        <div style={styles.testimonialCards}>
          <div style={styles.testimonialCard}>
            <p>"EmpowerED has helped me find like-minded individuals to share and solve my academic challenges."</p>
            <p><strong>- John Doe</strong></p>
          </div>
          <div style={styles.testimonialCard}>
            <p>"The community here is supportive and filled with resources that really helped me during tough times."</p>
            <p><strong>- Jane Smith</strong></p>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section style={styles.eventsSection}>
        <h2 style={styles.sectionTitle}>Upcoming Events</h2>
        <div style={styles.eventCards}>
          <div style={styles.eventCard}>
            <h3>Study Group</h3>
            <p>Join our study group every Friday to collaborate and study together!</p>
            <p><strong>Date:</strong> Friday, 3 PM</p>
          </div>
          <div style={styles.eventCard}>
            <h3>Career Fair</h3>
            <p>Meet with potential employers and mentors at the upcoming career fair.</p>
            <p><strong>Date:</strong> Saturday, 10 AM</p>
          </div>
        </div>
      </section>

      {/* Merchandise Section */}
      <section style={styles.merchandiseSection} id="merchandise">
        <h2 style={styles.sectionTitle}>Our Merchandise</h2>
        <div style={styles.merchandiseContainer}>
          {merchandise.map((item) => (
            <div key={item.id} style={styles.merchandiseCard}>
              <img src={item.image} alt={item.name} style={styles.merchandiseImage} />
              <h3>{item.name}</h3>
              <p>{item.price}</p>
              <button style={styles.buyButton}>Buy Now</button>
            </div>
          ))}
        </div>
      </section>

      {/* Pictorial Slider Section */}
      <section style={styles.pictorialSection} id="pictorials">
        <h2 style={styles.sectionTitle}>Pictorials</h2>
        <div style={styles.sliderContainer}>
          <img src={pictorials[currentSlide]} alt="Pictorial" style={styles.sliderImage} />
          <button onClick={prevSlide} style={styles.sliderButtonLeft}>
            &#10094;
          </button>
          <button onClick={nextSlide} style={styles.sliderButtonRight}>
            &#10095;
          </button>
        </div>
      </section>

      {/* Resources Section */}
      <section style={styles.resourcesSection}>
        <h2 style={styles.sectionTitle}>Helpful Resources</h2>
        <ul style={styles.resourceList}>
          <li><a href="#">Study Guides</a></li>
          <li><a href="#">Mental Health Resources</a></li>
          <li><a href="#">Time Management Tips</a></li>
        </ul>
      </section>

      {/* Call to Action Section */}
      <section style={styles.ctaSection}>
        <h2 style={styles.ctaTitle}>Join Us Today!</h2>
        <button style={styles.ctaButton}>Get Started</button>
      </section>

      <Footer />  {/* Render the footer once here */}
    </div>
  );
};

// Styles object for Home.js
const styles = {
  hero: {
    background: 'url("https://source.unsplash.com/1600x900/?students,learning") no-repeat center center/cover',
    color: 'white',
    textAlign: 'center',
    padding: '150px 20px',
    position: 'relative',
  },
  heroOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  heroTitle: {
    fontSize: '48px',
    fontWeight: 'bold',
    zIndex: 2,
  },
  heroSubtitle: {
    fontSize: '18px',
    margin: '20px 0',
  },
  heroButton: {
    padding: '15px 30px',
    fontSize: '18px',
    borderRadius: '30px',
    margin: '10px',
    backgroundColor: 'white',
    color: '#007bff',
    border: '2px solid #007bff',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, color 0.3s ease',
  },
  featuresSection: {
    padding: '50px 20px',
    textAlign: 'center',
  },
  featureCards: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  featureCard: {
    padding: '20px',
    width: '250px',
    margin: '10px',
    backgroundColor: '#f0f8ff',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  },
  testimonialsSection: {
    padding: '50px 20px',
    backgroundColor: '#f9f9f9',
    textAlign: 'center',
  },
  testimonialCards: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  testimonialCard: {
    width: '300px',
    padding: '20px',
    backgroundColor: '#f0f8ff',
    borderRadius: '10px',
    margin: '10px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  },
  eventsSection: {
    padding: '50px 20px',
    textAlign: 'center',
  },
  eventCards: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  eventCard: {
    padding: '20px',
    width: '300px',
    margin: '10px',
    backgroundColor: '#f0f8ff',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  },
  merchandiseSection: {
    padding: '50px 20px',
    backgroundColor: '#f9f9f9',
    textAlign: 'center',
  },
  merchandiseContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  merchandiseCard: {
    backgroundColor: 'white',
    border: '1px solid #ddd',
    borderRadius: '10px',
    padding: '20px',
    margin: '10px',
    width: '220px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  merchandiseImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '10px',
  },
  buyButton: {
    marginTop: '15px',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  pictorialSection: {
    padding: '50px 20px',
    textAlign: 'center',
  },
  sliderContainer: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
  },
  sliderImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '10px',
  },
  sliderButtonLeft: {
    position: 'absolute',
    left: '10px',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    border: 'none',
    padding: '10px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  sliderButtonRight: {
    position: 'absolute',
    right: '10px',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    border: 'none',
    padding: '10px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  resourcesSection: {
    padding: '50px 20px',
    textAlign: 'center',
  },
  resourceList: {
    listStyle: 'none',
    padding: 0,
  },
  ctaSection: {
    padding: '50px 20px',
    textAlign: 'center',
    backgroundColor: '#007bff',
    color: 'white',
  },
  ctaTitle: {
    fontSize: '36px',
  },
  ctaButton: {
    padding: '15px 30px',
    backgroundColor: '#ff6b6b',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '18px',
  },
};

export default Home;

