


import React from 'react';
import ImageSlider from './ImageSlider'; 
import './VideoBackground.css'; 
import instagram from './instagram.png';
import facebook from './facebook.png';
import twitter from './twitter.png';
import linkdin from './linkdin.png';

const VideoBackground = () => {
  return (
    <div className="video-background">
      <ImageSlider /> 
      
      <div className="content">
       
        <div className="flex flex-col items-center">
          {/* <h1 className="text-8xl xl font-bold underline mb-2">RR Room Services</h1>
          <p className="text-5xl mb-6">Where Luxury Meets Comfort</p> */}
          <h1 className="text-8xl xl font-bold underline mb-2 text-gradient">RR Room Services</h1>
<p className="text-5xl mb-6 text-gradient">Where Luxury Meets Comfort</p>

        </div>
      </div>

      <footer className="vertical-footer">
        
        <div className="social-links">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <img src={facebook} alt="Facebook" className="w-8 h-8 mb-4" />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <img src={twitter} alt="Twitter" className="w-8 h-8 mb-4" />
          </a>
          <a href="https://www.instagram.com/rr_services_/?hl=en" target="_blank" rel="noopener noreferrer">
            <img src={instagram} alt="Instagram" className="w-8 h-8 mb-4" />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <img src={linkdin} alt="LinkedIn" className="w-8 h-8" />
          </a>
        </div>
        <p className="absolute bottom-0 right-0 mr-4 mb-4 text-sm text-black">
          <strong>Our office hours</strong>
          <p><strong>Mon to Fri:</strong> 9:00AM to 5:00PM</p>
          <p><strong>Sat and Sun:</strong> Holiday</p>
        </p>
      </footer>
    </div>
  );
};

export default VideoBackground;


 