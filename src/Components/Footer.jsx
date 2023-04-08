import React from "react";
import { Outlet } from "react-router-dom";
import dh from "../assets/DH.png";
import facebook from "../assets/facebook-logo-svgrepo-com.svg";
import instagram from "../assets/instagram-logo-bold-svgrepo-com.svg";
import tiktok from "../assets/tiktok-svgrepo-com.svg";
import whatsapp from "../assets/whatsapp-logo-variant-svgrepo-com.svg";

const Footer = () => {
  return (
    <>
      <Outlet />
      <footer className="w-full justify-between">
        <p
          className="bg-gray-200 dark:bg-red-500 w-full flex
        justify-center h-11 font-semibold dark:text-white"
        >
          Powered by
        </p>
        <div
          className="flex items-center justify-around
        py-2"
        >
          <img src={dh} alt="DH-logo" className="w-1/5" />
          <div className="flex gap-4">
            <a href="#" target="_blank">
              <img
                src={facebook}
                alt="icon facebook"
                className=" w-6 h-6
                rounded-sm"
              />
            </a>
            <a href="#" target="_blank">
              <img
                src={instagram}
                alt="icon instragram"
                className="w-6 h-6 rounded-sm"
              />
            </a>
            <a href="#" target="_blank">
              <img
                src={whatsapp}
                alt="icon whatsapp"
                className="w-6 h-6 rounded-sm"
              />
            </a>
            <a href="#" target="_blank">
              <img
                src={tiktok}
                alt="icon tiktok"
                className="w-6 h-6 rounded-sm"
              />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
