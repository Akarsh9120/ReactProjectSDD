import React from 'react';
import Slider from 'react-slick';
import './ImageSlider.css'; 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import instagram from './instagram.png';
import facebook from './facebook.png';
import twitter from './twitter.png';
import linkdin from './linkdin.png';
import camerasImage from './peakpx.jpg';
import room1 from './peakpx (1).jpg';
import room2 from './peakpx (2).jpg';
import room3 from './peakpx (3).jpg';
import room4 from './peakpx (4).jpg';
import room5 from './peakpx (5).jpg';



const ImageSlider = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="slider-container">
      <Slider {...sliderSettings}>
        <div>
          <img src={camerasImage} alt="Slider Image 1" />
        </div>
        <div>
          <img src={room1} alt="Slider Image 2" />
        </div>
        <div>
          <img src={room2} alt="Slider Image 3" />
        </div>
        <div>
          <img src={room3} alt="Slider Image 4" />
        </div>
        <div>
          <img src={room4} alt="Slider Image 4" />
        </div>

        <div>
          <img src={room5} alt="Slider Image 5" />
        </div>
       
        
      </Slider>
    </div>
  );
};

export default ImageSlider;
