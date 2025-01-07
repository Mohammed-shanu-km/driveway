import React from "react";
import image from "../../assets/salim.jpg";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import wash from "../../assets/no.jpg";
import { MdOutlineLocalCarWash } from "react-icons/md";
const Herofifthpage = () => {
  return (
    <div className=" flex gap-[60px]  bg-[#edf2f6]  h-[110vh] md-max:h-[60vh] md-max:gap-[50px] md-small:h-[115vh] md-small:gap-[40px] md-small:flex-col sm-max:flex-col sm-max:gap-[40px] sm-max:h-[auto]">
      <div className="w-[50%]  pt-[80px] md-small:w-[100%] md-small:pt-[30px] sm-max:w-[100%] sm-max:pt-[40px]">
        <div className="relative">
          <img className="h-[100vh] object-cover md-max:h-[55vh] md-small:h-[40vh] md-small:w-[100%] sm-max:h-[50vh] sm-max:object-cover " src={image} alt="" />
        </div>
      </div>
      <div className="w-[50%] pr-[100px] pt-[80px] md-small:w-[100%] md-small:pr-[20px] md-small:pl-[20px] md-small:pt-[10px] sm-max:w-[100%] sm-max:pt-[0px] sm-max:p-[20px] ">
        <div className="flex flex-col gap-[20px] sm-max:gap-[0px]">
          <h1 className="text-[20px] text-[#e7492c] leading-[40px] sm-max:text-[18px]">
            Our Service Benefits
            <br />
            <span className="text-[40px] font-[600] text-[#0a2343] sm-max:text-[28px] sm-max:leading-[28px] sm-max:text-center">
              How Do We Wash The Car
            </span>{" "}
          </h1>
          <p className="text-[16px] text-[gray] leading-[30px] sm-max:text-[15px]">
            It is bio-degradable cleaning formula to minimize the quantity of
            water,energy and will keep the premises neat, tidy and eco-
            friendly. We use very high quality shampoo to be mixed with water
            inorder to applying directly to washing without even drop of water
            on the floor, unlike the traditional washing. It is a process of
            washing with minimum water.
          </p>
          <div className="flex flex-col gap-[15px] mt-[20px] ">
            <div className="w-full h-[50px] shadow-md p-[20px] bg-[white]  flex items-center gap-[10px] ">
              <IoCheckmarkDoneCircle className="text-[23px] text-[#e7492c]" />
              <h1 className="text-[16px] font-[500] text-[#123332] sm-max:text-[16px]">
              Made in German Technology
              </h1>
            </div>
            <div className="w-full h-[50px] shadow-md p-[20px] bg-[white]  flex items-center gap-[10px] ">
              <IoCheckmarkDoneCircle className="text-[23px] text-[#e7492c]" />
              <h1 className="text-[16px] font-[500] text-[#123332] sm-max:text-[16px]">
              Light Weigh
              </h1>
            </div>
            <div className="w-full h-[50px] shadow-md p-[20px] bg-[white]  flex items-center gap-[10px] ">
              <IoCheckmarkDoneCircle className="text-[23px] text-[#e7492c]" />
              <h1 className="text-[16px] font-[500] text-[#123332] sm-max:text-[16px]">
              Futuristic Designing
              </h1>
            </div>
            <div className="w-full h-[50px] shadow-md p-[20px] bg-[white]  flex items-center gap-[10px] ">
              <IoCheckmarkDoneCircle className="text-[23px] text-[#e7492c]" />
              <h1 className="text-[16px] font-[500] text-[#123332] sm-max:text-[16px]">
              Non-marking wheels
              </h1>
            </div>
            <div className="w-full h-[50px] shadow-md p-[20px] bg-[white]  flex items-center gap-[10px] ">
              <IoCheckmarkDoneCircle className="text-[23px] text-[#e7492c]" />
              <h1 className="text-[16px] font-[500] text-[#123332] sm-max:text-[16px]">
              Environment friendly
              </h1>
            </div>
            <div className="w-full h-[50px] shadow-md p-[20px] bg-[white]  flex items-center gap-[10px] ">
              <IoCheckmarkDoneCircle className="text-[23px] text-[#e7492c]" />
              <h1 className="text-[16px] font-[500] text-[#123332] sm-max:text-[16px]">
              Zero percent water spillage 
              </h1>
            </div>
            {/* <div className="h-[125px] bg-[#045c50] w-full p-[20px] flex items-center gap-[30px] ">
              <h1 className="text-[22px] font-[500] text-[white]">
                Many happy customers in our years of washing
              </h1>
              <MdOutlineLocalCarWash className="text-[50px] text-[white]" />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herofifthpage;
