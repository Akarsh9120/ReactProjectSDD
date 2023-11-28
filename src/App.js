// // App.js

// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import VideoBackground from './VideoBackground';
// import Nav from './Nav';
// import Home from './Home';
// import About from './About';
// // import Services from './Services';
// import Contact from './Contact';
// import SignIn from './SignIn';
// import SignUp from './SignUp';

// function App() {
//     let component
//     switch(window.location.pathname)
//     {
//         case '/':
//             component =<Home/>
//             break
//         case "/About" :
//             component = <About/>
//             break
//         // case "/Contact":
//         //     component = <Contact/>
//         //     break
//         // case "/Services" :
//         //     component = <Services/>
//         //     break
//         case "/SignIn" :
//             component = <SignIn/>
//             break
//         case "/SignUp" :
//             component = <SignUp/>
//     }
    
//     return(
//         <>
//         <Nav/>
//         {component}
       
//         </>
//     )  
    
// }
// export default App


// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import VideoBackground from './VideoBackground';
import Nav from './Nav';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import SignIn from './SignIn';
import SignUp from './SignUp';
import TenantLand from './TenantLand';
import Maintenance from './Maintenance';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          {/* <Route path="/Services" element={<Services />} /> */}
          <Route path="/Contact" element={<Contact />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/TenantLand" element={<TenantLand />} />
          <Route path="/Maintenance" component={Maintenance} />
        <Route path="/" component={TenantLand} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

