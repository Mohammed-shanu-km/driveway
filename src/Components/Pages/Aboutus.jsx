import React, { useEffect } from "react";
import Navbar1 from "../Navbar1/Navbar1";
import Navbar2 from "../Navbar2/Navbar2";
import Footer from "../Footer/Footer";
import Aboutherosection from "../Abouthersection/Aboutherosection";
import Aboutsecond from "../Aboutsecond/Aboutsecond";
import Aboutthird from "../Aboutthirdsection/Aboutthird";
import Heroseventh from "../Heroseventh/Heroseventh";
import Watsapp from "../../Watsapp/Watsapp";

const Aboutus = () => {
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
      {/* <Watsapp/> */}
      {/* <Navbar1 /> */}
      <Navbar2 />
      <Aboutherosection />
      <Aboutsecond />
      <Aboutthird/>
      <div className="pt-[100px]">
      <Heroseventh/>

      </div>
 
    
      <Footer />
    </>
  );
};

export default Aboutus;
