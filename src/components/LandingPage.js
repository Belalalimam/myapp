// src/components/LandingPage.js

import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1>Your GreenThumb Plants</h1>
      <p>Welcome to our plant paradise! Discover unique houseplants that will brighten up your space.</p>
      <Link to="/ProductListing">
        <button className="get-started-button">Get Started</button>
      </Link>
    </div>
  );
};

export default LandingPage;
