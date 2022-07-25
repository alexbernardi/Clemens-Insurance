import React, { useState } from "react";
import './Reset.css';
import './App.css';
import Footer from './components/Footer'
import NavbarMobile from './components/NavbarMobile';
import NavbarDesktop from './components/NavbarDesktop';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import Home from './components/pages/Home';


function App() {
  const [click, setClick] = useState(false);
  const isMobile = useMediaQuery({ query: `(max-width: 1140px)` });
  const [isActive, setActive] = useState(false);
  const toggleClass = () => {
    setActive(!isActive);
  };

  const handleClicks = () => {
    setClick(!click);
    toggleClass();
  };
  

  return (
    <Router>
      {isMobile ? <NavbarMobile click={click} isActive={isActive} handleClicks={handleClicks} /> : <NavbarDesktop />}
      <Routes>
        <Route path='/' exact element={<Home click={click} />} />
        <Route path='/about' element={<Home click={click} />} />
        <Route path='/meet-our-staff' element={<Home click={click} />} />
        <Route path='/in-the-community' element={<Home click={click} />} />
        <Route path='/testimonials' element={<Home click={click} />} />
        <Route path='/transportation-retail' element={<Home click={click} />} />
        <Route path='/brokerage' element={<Home click={click} />} />
        <Route path='/benefits' element={<Home click={click} />} />
        <Route path='/insurance' element={<Home click={click} />} />
        <Route path='/things-to-consider' element={<Home click={click} />} />
        <Route path='/report-a-claim' element={<Home click={click} />} />
        <Route path='/company-claim-numbers' element={<Home click={click} />} />
        <Route path='/helpful-links' element={<Home click={click} />} />
        <Route path='/insurance-companies' element={<Home click={click} />} />
        <Route path='/locations' element={<Home click={click} />} />
        <Route path='/get-a-quote' element={<Home click={click} />} />
        <Route path='/access-csr24' element={<Home click={click} />} />
        <Route path='/request-insurance-certificate' element={<Home click={click} />} />
        <Route path='/make-a-payment' element={<Home click={click} />} />
        <Route path='/contact-us' element={<Home click={click} />} />
      </Routes>
      <Footer click={click} />
    </Router>
  );
}

export default App;
