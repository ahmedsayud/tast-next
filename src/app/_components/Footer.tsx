"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faTelegram,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer
      className={``}
      style={{ backgroundImage: "url('/kids-photography 1.png')" }}
    >
      <div className=" bg-black/60  text-white flex flex-col lg:flex-row justify-between items-center py-10 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat">
        
        <div className="w-full lg:w-3/12  gap-6 mb-8 text-white">
          <img src="/Layer_1.png" alt="Logo" className="h-12" />
          <p className="te">
            Ipsam in eos qui consequatur ab cum maxime.Soluta dolor quae Ipsam
            in eos qui consequatur ab .Soluta dolor quae Ipsam in eos
            quconsequatur ab cum maxime.Soluta dolor quae{" "}
          </p>
        </div>
        <div className="w-full lg:w-3/12  gap-6 mb-8  flex  justify-between">
          <div>
            <h1 className="text-lg font-bold mb-4">Let Us Help</h1>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  My Account{" "}
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  FAQs{" "}
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Categories{" "}
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  All Products{" "}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h1 className="text-lg font-bold mb-4">Policies</h1>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Refund Policy{" "}
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About Us{" "}
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Cancellation Policy{" "}
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms and Conditions{" "}
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-3/12  gap-6 mb-8 ">
         
          <h2 className="text-2xl font-bold mb-4">Send Email</h2>
          <form className="w-full flex flex-col items-center">
            <div className="flex w-full bg-white rounded-2xl overflow-hidden relative">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 px-6 py-4 text-lg text-gray-500 outline-none bg-white w-full"
              />
              <button
                type="submit"
                className="absolute right-2 top-2 text-lg font-semibold bg-[#BE968E] text-white rounded-lg px-6 py-2 "
              >
                Send
              </button>
            </div>
            <div className="flex justify-center space-x-4 mt-10">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#BE968E] transition"
              >
                <FontAwesomeIcon
                  icon={faFacebookF}
                  size="lg"
                  className="text-white"
                />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#BE968E] transition"
              >
                <FontAwesomeIcon
                  icon={faTwitter}
                  size="lg"
                  className="text-white"
                />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#BE968E] transition"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  size="lg"
                  className="text-white"
                />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#BE968E] transition"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  size="lg"
                  className="text-white"
                />
              </a>
              <a
                href="https://whatsapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#BE968E] transition"
              >
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  size="lg"
                  className="text-white"
                />
              </a>
              <a
                href="https://telegram.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#BE968E] transition"
              >
                <FontAwesomeIcon
                  icon={faTelegram}
                  size="lg"
                  className="text-white"
                />
              </a>
            </div>
          </form>
        </div>
      
      </div>
    </footer>
  );
}
