import React, { useEffect } from 'react'
import Navbar1 from "../Navbar1/Navbar1";
import Navbar2 from "../Navbar2/Navbar2";
import Footer from "../Footer/Footer";
import Contacthero from '../Contactherosection/Contacthero';
import Contacttwo from '../Contacttwo/Contacttwo';

const Contactus = () => {
  useEffect(() => {
    // Save current scroll position
    const scrollPosition = window.scrollY;

    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    // Restore scroll position on component unmount
    return () => {
      window.scrollTo(0, scrollPosition);
    };
  }, []);
  return (
   <>
    {/* <Navbar1 /> */}
    <Navbar2 />
    <Contacthero/>
    <Contacttwo/>
    <Footer/>
 
   </>
  )
}

export default Contactus
