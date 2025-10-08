import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faBorderAll,
  faInfoCircle,
  faEnvelope,
  faQuestionCircle,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const items = [
    { icon: faHouse, text: "Home" },
    { icon: faBorderAll, text: "Our Category" },
    { icon: faInfoCircle, text: "About Us" },
    { icon: faEnvelope, text: "Contact Us" },
    { icon: faQuestionCircle, text: "FAQs" },
  ];

  const icons = [
    { icon: "/shopping bag.png", icon2: "" },
    { icon: "/love.png", icon2: "" },
    { icon: "/user.png", icon2: "" }, 
  ];

  return (
    <div className="w-full fixed top-0 left-0 bg-white text-black px-4 md:px-20 py-2 flex shadow-md z-50">
      <div className="w-full lg:w-7/12 flex justify-between items-center">
        <img src="/Layer_1.png" alt="Logo" className="h-10" />
        <button
          className="lg:hidden text-black focus:outline-none "
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
        <div className="hidden lg:flex justify-end w-full">
          {items.map((item, index) => (
            <div key={index} className="flex items-center mx-3">
              <FontAwesomeIcon icon={item.icon} className="text-gray-500 mr-2" />
              <p className="text-gray-500 hover:text-gray-700 transition">{item.text}</p>
            </div>
          ))}
        </div>
        {isOpen && (
          <div className="lg:hidden absolute top-12 left-0 w-full bg-white shadow-md">
            {items.map((item, index) => (
              <div key={index} className="flex items-center px-4 py-2">
                <FontAwesomeIcon icon={item.icon} className="text-gray-500 mr-2" />
                <p className="text-gray-500">{item.text}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="hidden lg:flex lg:w-5/12 justify-end items-center">
      <div className=" flex w-2/4 justify-end">
        <ul className="flex justify-between w-full p-2">
          <li>
            <img src={icons[0].icon} alt="Shopping Bag" className="w-6 h-6 mr-2" />
          </li>
          <li>
            <img src={icons[1].icon} alt="Love" className="w-6 h-6 mr-2" />
          </li>
          <li>
            <img src={icons[2].icon} alt="User" className="w-6 h-6 mr-2" />
          </li>
          <li className="flex items-center">
            <p className="mr-2 text-sm">EN</p>
            <FontAwesomeIcon icon={faChevronDown} className="text-gray-500" />
          </li>
          <li className="flex items-center">
            <img src={icons[2].icon} alt="User Profile" className="w-6 h-6 mr-2" />
            <FontAwesomeIcon icon={faChevronDown} className="text-gray-500" />
          </li>
        </ul></div>
      </div>
    </div>
  );
}