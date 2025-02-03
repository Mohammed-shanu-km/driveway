import React from "react";
import image from "../../assets/kuttan.jpg";

const Herosixthpage = () => {
  return (
    <div className="pl-[100px] pt-[130px] pb-[30px] bg-[#edf2f6] flex gap-[140px] relative md-max:gap-[50px] md-max:pl-[30px] md-small:pl-[20px] md-small:pt-[0px] md-small:gap-[40px] md-small:flex-col md-small:pr-[20px] sm-max:pt-[40px] sm-max:pl-[20px] sm-max:pr-[20px] sm-max:flex-col-reverse sm-max:gap-[50px] ">
      <div className="w-[50%] md-small:w-[100%] sm-max:w-[100%]">
        <div className="flex flex-col gap-[20px]">
          <h1 className="text-[20px] text-[#ff5603] leading-[40px] sm-max:text-[18px]">
            Find Who We Are
            <br />
            <span className="text-[40px] font-[600] text-[#0a2343] mt-[40px] sm-max:text-[28px] sm-max:leading-[30px]">
              We Only Provide Quality <br />
              Care Services
            </span>{" "}
          </h1>
          <p className="text-[16px] text-[gray] leading-[30px] sm-max:text-[15px]">
            The Driveway washing cart contains biodegradable products that are
            not harmful to the environment. It saves water by using a minimal
            1.5 liters of liquid instead of the 200 liters used in conventional
            car washing systems. The specially formulated wash product is
            sprayed onto the vehicle, lifting and encapsulating dirt on its
            surface. The encapsulated dirt is then gently wiped with a chamois
            leather, ensuring no scratches on the vehicle, followed by buffing
            with a microfiber cloth to achieve a beautiful shine.
          </p>
        </div>
      </div>
      <div className="w-[50%] md-small:w-[100%] sm-max:w-[100%] sm-max:pr-[0px]">
        <img
          className="h-[60vh] object-cover md-small:h-[40vh] md-small:w-[100%] md-max:h-[40vh]  sm-max:h-[50vh]"
          src={image}
          alt=""
        />
      </div>
      <div className="h-[200px] w-[200px] bg-[white] shadow-lg absolute top-[35%] bottom-[50%]  left-1/2 right-1/2 md-small:hidden sm-max:h-[100px] sm-max:w-[100px] sm-max:top-[50%] sm-max:hidden">
        <div className="p-[18px]">
          <div className=" h-[160px] border-[1px] border-dotted border-[#80808091] flex justify-center flex-col ">
            <h1 className="text-center text-[52px] text-[#ff5603]">1+</h1>
            <p className="text-center text-[20px]">
              Years of <br />
              Experience
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosixthpage;
