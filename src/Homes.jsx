


import React from 'react';
import ImageSlider from './ImageSlider'; 
import './Infobox.css'; 
import './VideoBackground.css';
import instagram from './instagram.png';
import facebook from './facebook.png';
import twitter from './twitter.png';
import linkdin from './linkdin.png';

const InfoBox = ({ title, content }) => (
    <div className="info-box">
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <p className="text-lg">{content}</p>
    </div>
  );
  
  const VideoBackground = () => {
    return (
      <div className="video-background">
        <ImageSlider />
  
        <div className="content">
          <div className="flex flex-col items-center">
            
            {/* <h1 className="text-8xl xl font-bold underline mb-2">RR Room Services</h1>
            <p className="text-5xl mb-6">Where Luxury Meets Comfort</p> */}
            {/* <h1 className="text-8xl xl font-bold underline mb-2 text-gradient">RR Room Services</h1>
            <p className="text-5xl mb-6 text-gradient">Where Luxury Meets Comfort</p> */}
  
           
            <div className="info-box-container flex mt-8">
             
              <InfoBox
                title="Rental Agreement"
                content="Full names and contact information of both the landlord and the tenant.
                The full address and a detailed description of the rental property.    
                The lease term shall begin on [Start Date] and end on [End Date]. Renewal options are subject to mutual agreement."
                
              />
  
             
              <InfoBox
                title="Monthly Rent Amount"
                content="$1,000 per month"
              />
  
              
              <InfoBox
                title="Rules and Regulations"
                content="Maintain Pin Drop Silence"
              />
              <InfoBox
                title="Daily Timings"
                content="Breakfast 8:00AM to 10AM
                Lunch: 12:30PM to 3:00PM
                Dinner 7:00PM to 9:00PM."
              />
            </div>
          </div>
        </div>
      
        
        
    </div>
  );
};

export default VideoBackground;
 