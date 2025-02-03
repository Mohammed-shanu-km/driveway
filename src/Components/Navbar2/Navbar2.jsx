import React, { useState, useEffect } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/new.svg";
import logo1 from "../../assets/bsoft.svg";

import { FaPhoneAlt } from "react-icons/fa";

export default function Navbar2() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Methodology", path: "/meth" },
    { name: "Gallery", path: "/gall" },
    { name: "Contact Us", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      isBlurred={false}
      onMenuOpenChange={setIsMenuOpen}
      className={`fixed top-0 left-0 w-full z-50 transition-all h-[80px] duration-300 border-[1px] border-[#ffffff16] ${
        isScrolled ? "bg-[white] shadow-lg" : "bg-transparent"
      }`}
    >
      {/* Brand and Toggle Button */}
      <NavbarContent className="sm-max:flex-row-reverse md-small:flex-row-reverse">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          className={` className="sm:hidden hidden md-small:block md-small:text-[#e7492c] sm-max:block text-white"  sm-max:text-[#e7492c] ${
            isScrolled ? "text-black" : "text-red"
          }`}
        />
        <NavbarBrand className="flex items-center gap-[5px]">
          <img className="h-[40px] w-[40px] sm-max:h-[30px] sm-max:w-[30px]" src={logo1} alt="" />
          <img className="h-[120px] w-[120px] sm-max:h-[80px] sm-max:w-[80px]" src={logo} alt="" />
        </NavbarBrand>
      </NavbarContent>

      {/* Desktop Navigation */}
      <NavbarContent
        className="sm:flex gap-10 sm-max:hidden md-small:hidden"
        justify="center"
      >
        {menuItems.map((item) => (
          <NavbarItem key={item.name}>
            <Link
              to={item.path}
              className={`text-[15px] hover:text-[#ff5603] ${
                isScrolled ? "text-black" : "text-white"
              } ${location.pathname === item.path ? "font-bold" : ""}`}
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent className="flex !justify-end md-max:hidden md-small:hidden sm-max:hidden ">
        <div className="flex !justify-end ">
          <div className="flex gap-[15px] items-center">
            <div>
              <FaPhoneAlt className="text-[30px] text-[#ff5603]" />
            </div>
            <div className="flex flex-col gap-[5px]">
              <h1
                className={`text-[14px] ${
                  isScrolled ? "text-black" : "text-[#ffffffbb]"
                }`}
              >
                Have any questions?
              </h1>
              <h1
                className={`text-[14px] ${
                  isScrolled ? "text-black" : "text-[#ffffffbb]"
                }`}
              >
                +91 907 222 6006
              </h1>
            </div>
          </div>
        </div>
      </NavbarContent>

      {/* Mobile Navigation Menu */}
      <NavbarMenu className="flex justify-center items-center gap-10 bg-white">
        {menuItems.map((item) => (
          <NavbarMenuItem key={item.name}>
            <Link
              to={item.path}
              className="w-full text-center text-black"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
