import React from 'react';

const LandingPage = (props) => {
  return (
    <div id='landing-page'>
      <div className='landing-page-image'>
        <div className='landing-page-image-text'>
          <p>Get Inspired and Share Your Best Photos</p>
          <p>Find your home among the world's best photographers.</p>
          <button className='landing-page-signup-button'>Join ISO</button>
        </div>
      </div>

      <div className='landing-page-photos'>
        <p>Take a look at photos that photographers have shared.</p>
      </div>
    </div>
  );
};

export default LandingPage;
