import React from "react";
import Landingpage from "../Pages/Landingpage";
import Aboutus from "../Pages/Aboutus";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Methadology from "../Pages/Methadology";
import Gallery from "../Pages/Gallery";
import Contactus from "../Pages/Contactus";
import Watsapp from "../../Watsapp/Watsapp";

const Routing = () => {
  return (
    <>
      <Router>
        <Routes>
    
          <Route path="/" element={<Landingpage />} />
          <Route path="/about" element={<Aboutus/>} />
          <Route path="/meth" element={<Methadology/>} />
          <Route path="/gall" element={<Gallery/>} />
          <Route path="/contact" element={<Contactus/>} />

        </Routes>
      </Router>
    </>
  );
};

export default Routing;
