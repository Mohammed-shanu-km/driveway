import React from "react";
import aboutimage from "../../assets/shan.jpg";
import aboutimage2 from "../../assets/mubu.jpg";

const Aboutsecond = () => {
  return (
    <div className="px-[100px] py-[80px] md-max:px-[30px] md-max:py-[50px] md-small:px-[20px] md-small:py-[40px] sm-max:px-[20px] sm-max:py-[50px]">
      <div className="flex items-center gap-[80px] w-full md-small:gap-[40px] sm-max:flex-col sm-max:gap-[40px]">
        <div className="w-[50%] sm-max:w-[100%] ">
          <img
            className="h-[300px] w-full object-cover"
            src={aboutimage}
            alt=""
          />
        </div>
        <div className="w-[50%] sm-max:w-[100%]">
          <img
            className="h-[300px] w-full object-cover"
            src={aboutimage2}
            alt=""
          />
        </div>
      </div>
      <div className="mt-[50px] sm-max:mt-[30px]">
        <div className="flex items-center justify-between md-small:flex-col md-small:items-start  sm-max:flex-col sm-max:items-start">
          <div>
            <h1 className="text-[20px] text-[#e7492c] leading-[40px] sm-max:text-[18px]">
              DRIVEWAY
              <br />
              <span className="text-[40px] font-[600] text-[#0a2343] sm-max:text-[28px]">
                Who We Are
              </span>{" "}
            </h1>
          </div>
          <div>
            <h2 className="text-[24px] font-[600] text-[#e7492c] sm-max:text-[20px]">
              The Revolutionary Mobile Car Wash Concept
            </h2>
          </div>
        </div>
        <div className="mt-[20px]">
          <p className="text-[16px] text-[gray] leading-[30px] sm-max:text-[16px]">
            Driveway Car Wash is a green company specializing in the latest
            waterless car washing technology, serving the Middle East and India.
            This innovative concept caters to car owners by utilizing idle
            parking time at shopping malls, government organizations, villas,
            apartments, and other parking areas during their daily routines.
            Waterless car washing is a revolutionary idea designed for
            21st-century vehicle owners. Driveway Car Wash brings affordable,
            eco-friendly, and luxurious car cleaning services directly to you,
            redefining traditional car wash experiences with sustainable
            solutions.
          </p>
        </div>
        <div className="mt-[20px]">
          <p className="text-[16px] text-[gray] leading-[30px]">
            Driveway Car Wash is a green company specializing in the latest
            waterless car washing technology, serving the Middle East and India.
            This innovative concept is designed for car owners who use idle
            parking time at shopping malls, government organizations, villas,
            apartments, and other parking areas during their daily activities.
            Waterless car washing is a revolutionary idea for 21st-century
            vehicle owners. Driveway Car Wash brings affordable, luxury car wash
            services directly to you, redefining traditional car washing
            experiences with sustainable solutions.
          </p>
        </div>
        <div className="mt-[20px]">
          <p className="text-[16px] text-[gray] leading-[30px]">
            Driveway Car Wash is a green company specializing in the latest
            technology of waterless car washing services in the Middle East and
            India. This concept is developed for car owners who use idle parking
            time at shopping malls, government organizations, villas,
            apartments, and parking areas during their daily activities.
            Waterless car wash is a revolutionary new idea for 21st-century
            vehicle owners. Driveway Car Wash brings affordable luxury car wash
            services directly to you, redefining traditional car wash
            experiences with sustainable solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutsecond;
