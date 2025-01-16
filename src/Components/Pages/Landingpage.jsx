import React, { useEffect } from 'react'
import Navbar1 from '../Navbar1/Navbar1'
import Navbar2 from '../Navbar2/Navbar2'
import Herosectionmain from '../Herosectionmain/Herosectionmain'
import Herosecond from '../Herosecondpage/Herosecond'
import Herothirdpage from '../Herothirdpage/Herothirdpage'
import Herofifthpage from '../Herofifthpage/Herofifthpage'
import Herosixthpage from '../Herosixtpage/Herosixthpage'
import Heroseventh from '../Heroseventh/Heroseventh'
import Footer from '../Footer/Footer'
import Watsapp from '../../Watsapp/Watsapp'

const Landingpage = () => {
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
    {/* <Navbar1/> */}
    <Navbar2/>
    <Herosectionmain/>
   


    <Herosecond/>
    <Herothirdpage/>
   
    <Herofifthpage/>
    <Herosixthpage/>
    <Heroseventh/>
    <Footer/>
    </>
  )
}

export default Landingpage