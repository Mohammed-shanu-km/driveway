import React from "react";
import screen from "../../assets/sc.png";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import image from "../../assets/image1.jpg";
import { useRef } from "react";
import { useInView } from "framer-motion";

const Herosecond = () => {
  return (
    <div className="w-full px-[100px] py-[80px] flex gap-[100px] md-max:py-[50px] md-max:px-[30px] md-max:gap-[50px] md-small:px-[20px] md-small:py-[40px] md-small:flex-col  sm-max:px-[20px] sm-max:py-[50px] sm-max:flex-col-reverse sm-max:gap-[50px] ">
      <div className="w-[50%] md-small:w-[100%] sm-max:w-[100%]">
        <div className="flex flex-col gap-[25px] sm-max:gap-[10px]">
          <h1 className="text-[20px] text-[#e7492c] leading-[40px] sm-max:text-[18px]">
            DRIVEWAY
            <br className="" />
            <span className="text-[40px] font-[600] text-[#0a2343] sm-max:text-[28px]">
              Who We Are
            </span>{" "}
          </h1>

          <p className="text-[16px] text-[gray] leading-[30px] sm-max:text-[15px]">
            Driveway car wash is a Green company specialized in the latest
            technology of waterless car washing services in the Middle East &
            India. This concept is developed for car owners while using idle
            parking time at shopping malls, government organizations, villas &
            apartments, parking areas, during their daily activities. Waterless
            car wash is a revolutionary new idea for 21st-century vehicle
            owners. Driveway Carwash brings affordable luxury car wash service
            to you.
          </p>
          <div className="h-[1px] w-full bg-[#8080807d]"></div>
          <div className="flex gap-[20px] sm-max:gap-[30px] sm-max:items-center ">
            <div>
              <img className="object-cover  " src={screen} alt="" />
            </div>
            <div>
              <h2 className="text-[30px] text-[#e7492c] leading-[35px] font-[500] sm-max:text-[22px] sm-max:w-[100%]">
                The Revolutionary Mobile Car Wash Concept
              </h2>
            </div>
          </div>
          <div className="w-full flex gap-[20px] items-center sm-max:flex-col sm-max:items-start sm-max:gap-[30px]">
            <div>
              <button className="px-6 py-3  bg-[#e7492c] text-white  animate__animated animate__fadeIn animate__delay-2s flex items-center gap-[5px] sm-max:px-4 sm-max:py-2 sm-max:text-[15px]">
                Read More{" "}
                <IoArrowForwardCircleOutline className="text-[20px] text-[white]" />
              </button>
            </div>
            <div className="flex gap-[10px] ">
              <div className="h-[70px] w-[70px] bg-[#80808070] rounded-[50px] flex items-center justify-center">
                <FiPhoneCall className="text-[30px] text-[#e7492c]" />
              </div>
              <div className="flex flex-col ">
                <h2 className="text-[18px] text-[gray] leading-[30px] sm-max:text-[16px]">
                  Call Us anytime
                </h2>
                <h1 className="text-[22px] text-[#0a2343] sm-max:text-[18px]">+91 9072226006</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[50%] md-small:w-[100%] sm-max:w-[100%]">
        <img
          className="h-[80vh] object-cover md-max:h-[45vh] md-small:h-[40vh] md-small:w-[100%] sm-max:h-[40vh]"
          src={image}
          alt=""
        />
      </div>
    </div>
  );
};

export default Herosecond;
