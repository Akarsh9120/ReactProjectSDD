


import React from 'react';
import { useSpring, animated } from 'react-spring';
import signups from './signups.jpeg'; 
import './SignIn.css'; 
import instagram from './instagram.png';
import facebook from './facebook.png';
import twitter from './twitter.png';
import linkdin from './linkdin.png';

const Signup = () => {
  
  const imageUrl = `url(${signups})`;

  
  const backgroundAnimation = useSpring({
    from: { transform: 'scale(1)' },
    to: { transform: 'scale(1.02)' },
    loop: { reverse: true },
    config: { duration: 6000 },
  });

  return (
    <animated.div className="min-h-screen flex items-center justify-center bg-cover bg-center animate-gradient" style={{ backgroundImage: imageUrl, ...backgroundAnimation }}>
      <form className="big-signup-form bg-transparent border-2 border-gray-300 rounded-lg p-8 max-w-md shadow-md bg-white">
        <header>
          <h1 className="text-4xl font-extrabold text-gray-600 mb-6 text-center">Sign Up</h1>
        </header>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="firstName" className="block text-lg font-semibold text-gray-600">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-lg font-semibold text-gray-600">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="roomNumber" className="block text-lg font-semibold text-gray-600">
            Room Number
          </label>
          <input
            type="text"
            id="roomNumber"
            name="roomNumber"
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-semibold text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="contact" className="block text-lg font-semibold text-gray-600">
            Contact Number
          </label>
          <input
            type="text"
            id="contact"
            name="contact"
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="mealPlan" className="block text-lg font-semibold text-gray-600">
            Select Meal Plan
          </label>
          <select
            id="mealPlan"
            name="mealPlan"
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
          >
            <option value="standard">Vegetarian</option>
            <option value="premium">Non Vegetarian</option>
            <option value="deluxe">Vegan</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-lg font-semibold text-gray-600">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover-bg-blue-600 focus:outline-none focus:shadow-outline-blue"
          >
            Sign Up
          </button>
          {/* Vertical footer */}
      <footer className="vertical-footer">
        {/* Social media links */}
        <div className="social-links">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <img src={facebook} alt="Facebook" className="w-8 h-8 mb-4" />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <img src={twitter} alt="Twitter" className="w-8 h-8 mb-4" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <img src={instagram} alt="Instagram" className="w-8 h-8 mb-4" />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <img src={linkdin} alt="LinkedIn" className="w-8 h-8" />
          </a>
        </div>
        <p className="text-xl absolute bottom-0 right-0 mr-4 mb-4 text-sm text-black">
          <strong>Our office hours</strong>
          <p><strong>Mon to Fri:</strong> 9:00AM to 5:00PM</p>
          <p><strong>Sat and Sun:</strong> Holiday</p>
        </p>
      </footer>
        </div>
      </form>
    </animated.div>
  );
};

export default Signup;
