import React from "react";
import Navbar1 from "../Navbar1/Navbar1";
import Navbar2 from "../Navbar2/Navbar2";
import Footer from "../Footer/Footer";
import Aboutherosection from "../Abouthersection/Aboutherosection";
import Aboutsecond from "../Aboutsecond/Aboutsecond";
import Aboutthird from "../Aboutthirdsection/Aboutthird";
import Heroseventh from "../Heroseventh/Heroseventh";
import Watsapp from "../../Watsapp/Watsapp";

const Aboutus = () => {
  return (
    <>
      {/* <Watsapp/> */}
      {/* <Navbar1 /> */}
      <Navbar2 />
      <Aboutherosection />
      <Aboutsecond />
      <Aboutthird/>
      <Heroseventh/>
    
      <Footer />
    </>
  );
};

export default Aboutus;
