

import React from 'react';
import { createRoot } from 'react-dom';
import { useSpring, animated } from 'react-spring';
import peakpxImage from './peakpx.jpg';
import facebook from './facebook.png';
import twitter from './twitter.png';
import instagram from './instagram.png';
import linkdin from './linkdin.png';
import { useNavigate } from 'react-router-dom';
import TenantLand from './TenantLand.jsx';


const LoginPage = () => {
  const imageUrl = `url(${peakpxImage})`;
  const navigate = useNavigate();
  const backgroundAnimation = useSpring({
    from: { transform: 'scale(1)' },
    to: { transform: 'scale(1.02)' },
    loop: { reverse: true },
    config: { duration: 6000 },
  });

  const handleSignIn = () => {
    
    const root = createRoot(document.getElementById('root'));
    root.render(<TenantLand />);
  };

  return (
    <div>
      <animated.div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: imageUrl, ...backgroundAnimation, minHeight: '85vh' }}>
        <form method= 'post' action='loginaccess.php' className="bg-white border-2 border-gray-300 rounded-lg p-8 max-w-md big-signin-form">
          <header>
            <h1 className="text-4xl font-extrabold text-black mb-6 text-center">Login</h1>
          </header>
          <div className="mb-4">
            <label htmlFor="input1" className="block text-lg font-semibold text-black">
              ID
            </label>
            <input
              type="text"
              id="input1"
              name="id"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="input2" className="block text-lg font-semibold text-black">
              Password
            </label>
            <input
              type="password"
              id="input2"
              name="password"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div>
            <button
              type="button"
              className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:shadow-outline-indigo"
              onClick={handleSignIn}
            >
              Sign In
            </button>
          </div>
        </form>
      </animated.div>

      <footer className="vertical-footer">
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
        <p className="absolute bottom-0 right-0 mr-4 mb-4 text-sm text-black">
          <strong>Our office hours</strong>
          <p>
            <strong>Mon to Fri:</strong> 9:00AM to 5:00PM
          </p>
          <p>
            <strong>Sat and Sun:</strong> Holiday
          </p>
        </p>
      </footer>
    </div>
  );
};

export default LoginPage;


