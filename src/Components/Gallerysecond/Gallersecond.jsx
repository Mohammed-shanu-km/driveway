import React from "react";
import gal1 from '../../assets/1.jpg'
import gal2 from '../../assets/2 (3).jpg'
import gal3 from '../../assets/3.jpg'
import gal4 from '../../assets/car.jpg'
import gal5 from '../../assets/1.jpg'

const Gallersecond = () => {
  return (
    <div className="px-[100px] pt-[80px] md-max:px-[30px] md-max:pt-[50px] md-small:px-[20px] md-small:pt-[40px] sm-max:px-[20px] sm-max:pt-[50px]">
      <div className="grid grid-cols-4 gap-[50px] md-small:grid-cols-3 sm-max:grid-cols-2 sm-max:gap-[20px]">
        <div className="h-[320px] w-full ">
          <img className="h-full w-full object-cover" src={gal1} alt="" />
        </div>
        <div className="h-[320px] w-full ">
          <img className="h-full w-full object-cover" src={gal2} alt="" />
        </div>
        <div className="h-[320px] w-full ">
          <img className="h-full w-full object-cover" src={gal3} alt="" />
        </div>
        <div className="h-[320px] w-full ">
          <img className="h-full w-full object-cover" src={gal4} alt="" />
        </div>
        <div className="h-[320px] w-full ">
          <img className="h-full w-full object-cover" src={gal1} alt="" />
        </div>
        <div className="h-[320px] w-full ">
          <img className="h-full w-full object-cover" src={gal2} alt="" />
        </div>
        <div className="h-[320px] w-full ">
          <img className="h-full w-full object-cover" src={gal2} alt="" />
        </div>
        <div className="h-[320px] w-full ">
          <img className="h-full w-full object-cover" src={gal4} alt="" />
        </div>
       
       
       
      
       
      </div>
    </div>
  );
};

export default Gallersecond;
