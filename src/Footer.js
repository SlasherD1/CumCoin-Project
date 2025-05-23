import React from "react";
import { useState } from "react";
import { FaTelegram, FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import logoPump from "./assets/images/pump_black.png";
import logoDex from "./assets/images/logo_dex.png";

const Footer = () => {
  return (
    <footer className="w-full py-[50px] flex items-center justify-center rajdhani text-white">
      <div className="flex flex-col gap-2 items-center justify-center">
        <div className="flex gap-2 items-center">
          <a
            href="https://x.com/cumcoinn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="min-w-[50px] min-h-[40px] text-lg flex items-center justify-center">
              <FaXTwitter size={30} />
            </div>
          </a>
          <div className="min-w-[40px] min-h-[40px] flex items-center justify-center overflow-hidden">
            <img src={logoPump} alt="DEX" width={35} height={24} />
          </div>
          <a
            href="https://t.me/Cumcoinn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="min-w-[40px] min-h-[40px] rounded-full text-lg flex items-center justify-center">
              <FaTelegramPlane size={30} />
            </div>
          </a>
          <div className="min-w-[40px] min-h-[40px] rounded-full flex items-center justify-center overflow-hidden">
            <img src={logoDex} alt="YouTube" width={35} height={24} />
          </div>
        </div>
        <span className="font-boldoa text-3xl reguler">
          ©Cumcoin All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
