import React from 'react';
import './VideoBackground.css';
import instagram from './instagram.png';
import facebook from './facebook.png';
import twitter from './twitter.png';
import linkdin from './linkdin.png';

const VideoBackground = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="content text-center">
        
        <h1 className='text-7xl xl font-bold underline mb-4'>RR Room Services</h1>
        <p className="mb-4">Where Luxury Meets Comfort</p>

       
        <div className="social-links mt-4">
          <a href="https://www.facebook.com/your-facebook-page" target="_blank" rel="noopener noreferrer">
            <img src="facebook-icon.png" alt="Facebook" className="w-8 h-8 mr-4" />
          </a>
          <a href="https://twitter.com/your-twitter-account" target="_blank" rel="noopener noreferrer">
            <img src="twitter-icon.png" alt="Twitter" className="w-8 h-8 mr-4" />
          </a>
          <a href="https://www.instagram.com/your-instagram-account" target="_blank" rel="noopener noreferrer">
            <img src="instagram-icon.png" alt="Instagram" className="w-8 h-8" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default VideoBackground;
