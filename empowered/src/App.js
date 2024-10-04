import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'; // Import the Home page
import About from './pages/About'; // Import additional pages
import Navbar from './components/Navbar'; // Import Navbar
import Footer from './components/Footer'; // Import Footer

const App = () => {
  return (
    <Router>
      <div>
        {/* Navbar will appear on all pages */}
        <Navbar />

        {/* Routes for the different pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* Add more routes for other pages as needed */}
        </Routes>

        {/* Footer will appear on all pages */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
