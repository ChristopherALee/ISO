import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import FeedContainer from '../feed/feed_container';

const LandingPage = (props) => {
  if (props.currentUser) {
    return (
      <Redirect to='/feed' />
    );
  } else {
    return (
      <div id='landing-page'>
        <div className='landing-page-image'>
          <div className='landing-page-image-text'>
            <p>Get inspired and share your best photos</p>
            <p>Find your home among the world's best photographers.</p>
            <Link to='/signup' className='landing-page-signup-button'>Join ISO</Link>
          </div>
        </div>

        {/* <div className='landing-page-photos'>
          <p>Take a look at photos that photographers have shared.</p>
          <p>Discover what's trending according to photographers around the world.</p>
        </div> */}
      </div>
    );
  }

};

export default LandingPage;
