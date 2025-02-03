import React from "react";
import wash from "../../assets/card1.jpg";
import wash2 from "../../assets/card2.jpg";
import wash3 from "../../assets/card3.jpg";
import { FiPhoneCall } from "react-icons/fi";
import { MdLocalCarWash } from "react-icons/md";
import { TbCarSuv } from "react-icons/tb";
import { FaCarSide } from "react-icons/fa";
// import wash2 from '../../assets/slider.jpg'

const Herothirdpage = () => {
  return (
    <div className="herothird  w-full px-[100px]  py-[50px] md-max:px-[30px] md-small:px-[20px] bg-[#edf2f6] sm-max:px-[20px] ">
      <div className="flex items-center justify-center flex-col gap-[15px]">
        <h1 className="text-[20px] text-[#ff5603] leading-[40px] text-center sm-max:text-[18px]">
          DRIVEWAY
          <br />
          <span className="text-[40px] font-[600] text-[#0a2343] sm-max:text-[28px] sm-max:leading-[30px]">
            Save Water And Save Earth
          </span>{" "}
        </h1>
      </div>
      <div className="grid grid-cols-3 gap-[20px] mt-[100px] md-small:grid-cols-2 md-small:gap-[20px] sm-max:grid-cols-1 sm-max:mt-[70px] sm-max:gap-[60px]">
        <div className="h-[auto] bg-[white] p-[20px] flex flex-col gap-[20px] shadow-md">
          <div>
            <div className="relative group">
              <img
                className="mt-[-50px] transition-transform duration-500 ease-in-out group-hover:scale-110"
                src={wash}
                alt=""
              />
            </div>
            <div className="flex items-center justify-center">
              <div className="h-[100px] w-[100px] bg-[white] rounded-[50px] flex items-center justify-center absolute">
                <MdLocalCarWash className="text-[40px] text-[#ff5603]" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[10px] mt-[30px]">
            <h1 className="text-center text-[24px] font-[600] sm-max:text-[22px]">Our Mission</h1>
            <p className="text-[16px] text-[gray] leading-[30px] text-center sm-max:text-[15px]">
              To be the leading provider of innovative, sustainable, and
              tech-driven car wash solutions, creating a cleaner world while
              setting the standard for convenience, quality, and customer
              satisfaction in vehicle care
            </p>
          </div>
        </div>
        <div className="h-[auto] bg-[white] p-[20px] flex flex-col gap-[20px] shadow-md">
          <div>
            <div className="relative group">
              <img
                className="mt-[-50px] transition-transform duration-500 ease-in-out group-hover:scale-110"
                src={wash2}
                alt=""
              />
            </div>
            <div className="flex items-center justify-center">
              <div className="h-[100px] w-[100px] bg-[white] rounded-[50px] flex items-center justify-center absolute">
                <TbCarSuv className="text-[40px] text-[#ff5603]" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[10px] mt-[30px]">
            <h1 className="text-center text-[24px] font-[600] sm-max:text-[22px]">Our Vision</h1>
            <p className="text-[16px] text-[gray] leading-[30px] text-center sm-max:text-[15px]">
              To be the leading provider of innovative, sustainable, and
              tech-driven car wash solutions, creating a cleaner world while
              setting the standard for convenience, quality, and customer
              satisfaction in vehicle care.
            </p>
          </div>
        </div>
        <div className="h-[auto] bg-[white] p-[20px] flex flex-col gap-[20px] shadow-md md-small:mt-[30px]">
          <div>
            <div className="relative group">
              <img
                className="mt-[-50px] transition-transform duration-500 ease-in-out group-hover:scale-110"
                src={wash3}
                alt=""
              />
            </div>
            <div className="flex items-center justify-center">
              <div className="h-[100px] w-[100px] bg-[white] rounded-[50px] flex items-center justify-center absolute">
                <FaCarSide className="text-[40px] text-[#ff5603]" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[10px] mt-[30px]">
            <h1 className="text-center text-[24px] font-[600] sm-max:text-[22px]">Values</h1>
            <p className="text-[16px] text-[gray] leading-[30px] text-center sm-max:text-[15px]">
            Safety, excellence, care, commitment, professionalism, ,
            creativity, co-operation and knowledge
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herothirdpage;
