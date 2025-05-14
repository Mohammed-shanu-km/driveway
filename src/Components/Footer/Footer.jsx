import React from "react";
import "./Footer.css";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";
import logo from "../../assets/old.svg";
import logo1 from "../../assets/whitelogo.svg";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer mt-[80px] ">
      <div className="flex flex-col gap-[20px] items-center justify-center sm-max:items-center">
        <div className="flex gap-[5px] items-center">
          <img className="h-[50px] w-[50px]" src={logo1} alt="" />
          <img className="h-[150px] w-[150px]" src={logo} alt="" />
        </div>
        <p className="text-[16px] text-[white] leading-[30px] text-center sm-max:text-center sm-max:text-[16px]">
          Driveway CarWash is a Green company specialized in the latest
          technology of waterless car washing services in the All India. This concept is designed for car owners to utilize idle parking
          time at shopping malls, government organizations, villas and
          apartments, and parking areas during their daily activities. Waterless
          carwash is a revolutionary new idea for 21st-century vehicle owners.
          Driveway Car Wash brings affordable luxury car wash services directly
          to you
        </p>
        <div className="flex items-center gap-[20px] mt-[10px] sm-max:flex-col sm-max:items-center sm-max:justify-center">
          <p className="text-[white] gap-[7px] flex items-center sm-max:gap-[10px] sm-max:text-[15px]">
            <span>
              <FaLocationDot />
            </span>
            Perintalmanna
          </p>

          <p className="text-[white] gap-[5px] flex items-center sm-max:gap-[10px] sm-max:text-[15px]">
            <span>
              <MdOutlineEmail />
            </span>
            drivewayorg@gmail.com
          </p>
          <p className="text-[white] flex  items-center sm-max:gap-[10px] sm-max:text-[15px]">
            <span>
              <MdOutlinePhone />
            </span>
            +91907 222 6006
          </p>
          <a
            href="https://www.instagram.com/driveway.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[white] flex gap-[5px] items-center sm-max:gap-[10px] sm-max:text-[15px] hover:underline"
          >
            <span>
              <FaInstagram />
            </span>
            driveway.in
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
