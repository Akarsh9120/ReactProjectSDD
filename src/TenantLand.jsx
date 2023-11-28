


import React, { useState } from 'react';
import Maintenance from './Maintenance';
import Contacts from './Contacts';
import Roomdetails from './Roomdetails';
import Homes from './Homes';
import './Tenantland.css'
// import twitter from '/.twitter.png';


const TenantLand = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('Home');

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        // backgroundImage: `url(${twitter})`, // Set background image
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
      className={`${navOpen ? 'nav-open' : ''}`}
    >
      <header
        style={{
          color: 'white',
          fontSize: '2.25rem',
          fontWeight: 'bold',
          padding: '2rem',
          background: 'linear-gradient(to right, #4CAF50, #2196F3)',
          textAlign: 'center',
        }}
      >
        <h1>RR HOUSING SERVICES</h1>
      </header>

      <button
        style={{
          position: 'fixed',
          top: '10px',
          left: '10px',
          cursor: 'pointer',
          padding: '10px',
          backgroundColor: '#333',
          color: '#fff',
          border: 'none',
          outline: 'none',
          zIndex: '1',
        }}
        onClick={toggleNav}
      >
        ☰
      </button>

      <nav
        id="myNav"
        style={{
          color: 'white',
          fontSize: '0.875rem',
          width: '200px',
          height: '100%',
          background: 'linear-gradient(to right, #4CAF50, #2196F3)',
          position: 'fixed',
          top: '0',
          left: `${navOpen ? '0' : '-200px'}`,
          overflowY: 'auto',
          paddingTop: '20px',
          transition: 'left 0.3s',
        }}
      >
         <p onClick={() => navigateTo('home')}>Home</p>
        <p onClick={() => navigateTo('maintenance')}>Maintenance</p>
        <p onClick={() => navigateTo('account-details')}>Account</p>
        <p onClick={() => navigateTo('Contacts')}>Contact Us</p>
        <p onClick={() => navigateTo('Roomdetails')}>Room Details</p>
      </nav>

      <main style={{ marginLeft: `${navOpen ? '200px' : '0'}` }}>
        {currentPage === 'home' && <p><Homes/></p>}
        {currentPage === 'maintenance' && <Maintenance />}
        {currentPage === 'Contacts' && <Contacts />}
        {currentPage === 'Roomdetails' && <Roomdetails />}
       
        {/* Add conditions for other pages */}
      </main>
    </div>
  );
};

export default TenantLand;
