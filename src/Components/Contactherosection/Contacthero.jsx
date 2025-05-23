import React from 'react'
import { Link } from 'react-router-dom'
import './Conatcthero.css'

const Contacthero = () => {
  return (
    <div className="contact-hero relative sm-max:h-[40vh] ">
    <div className="px-[100px] pt-[100px] md-small:px-[20px]  sm-max:px-[20px] ">
      <div className="flex flex-col  mt-[80px]">
        <h1 className="text-[45px] text-[white] font-[600] md-small:text-[32px] sm-max:text-[32px] sm-max:mt-[-50px]">
          Contact Us
        </h1>
      </div>
      <div className="h-[50px] w-[200px] bg-[white] absolute bottom-0 right-12 flex items-center justify-center">
        <Link to={"/"}>
          <h2 className="text-[16px] text-[black] sm-max:text-[15px]">
            Home <span className="text-[#ff5603]">/ Contact Us</span>
          </h2>
        </Link>
      </div>
    </div>
  </div>
  )
}

export default Contacthero