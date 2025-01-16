import React from "react";
import Heroslider from "../Heroslider/Heroslider";
import "./Herosectionmain.css";
import Watsapp from "../../Watsapp/Watsapp";
import { Link } from "react-router-dom";

const Herosectionmain = () => {
  return (
    <>
      <div className="heromain w-full h-[100vh] flex items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-[54px] text-center font-[500] text-[white] leading-[70px] mb-4 animate__animated animate__fadeIn animate__delay-1s md-small:text-[42px] md-small:leading-[50px] sm-max:text-[30px] sm-max:font-[700] sm-max:leading-[42px] sm-max:px-[20px]">
            <span className="text-[white]">R</span>evolutionizing The Future of
            Car <br className=" md-small:hidden sm-max:hidden" />
            Wash <span className="text-[white]">S</span>ervices
          </h2>
          <p className="text-center px-[300px]  text-[16px] font-[300] text-[white] max-w-[90%] md-max:px-[100px] md-small:px-[100px] sm-max:px-[20px] sm-max:text-[14px] sm-max:max-w-[100%]">
            Where your car shines and the planet smiles—future-ready car wash
            solutions.
          </p>
          <div>
            <Link to="/about">
              <button className="h-[50px] w-[180px]  bg-[#e7492c] hover:border-[#e7492c  ] text-[white]  mt-[30px] sm-max:w-[140px] sm-max:text-[14px]">
                Explore More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Herosectionmain;
