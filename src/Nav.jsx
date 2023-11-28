import React from 'react';
import Contact from './Contact';

export default function Nav() {
  return (
    <nav className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-500 to-yellow-400">
      <a href="/" className="text-white font-bold text-lg">Home</a>

      <ul className="flex space-x-10"> 
        <li>
          <a href="/About" className="text-black">About</a>
        </li>
        <li>
        <Contact />
        </li>
        {/* <li>
          <a href='/Services' className="text-white">Services</a>
        </li> */}
        <li>
          <a href="http://localhost/sddpro/src/login.html" className="text-black">Sign In</a>
        </li>
        <li>
          <a href="/SignUp" className="text-black">Sign Up</a>
        </li>
      </ul>
    </nav>
  );
}
