"use client";

import Link from "next/link";
import React, { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [navClick, setNavClick] = useState(false);
  const [overlay, setOverlay] = useState(false);

  const handleNavClick = () => {
    setNavClick((prevNavClick) => !prevNavClick);
    setOverlay((prevOverlay) => !prevOverlay);
  };

  const handleNavClose = () => {
    setNavClick(false);
    setOverlay(false);
  };

  return (
    <div>
      <div className={`overlay ${overlay ? "show-overlay" : ""}`}></div>

      <div className="py-7 px-8 flex justify-between items-center max-w-[1350px] mx-auto">
        <div>
          <h1 className="text-[1.7rem] font-bold text-primary-400">
            <Link href="/">Organizer</Link>
          </h1>
        </div>

        <div className="hidden lg:block">
          <ul className="flex gap-10 text-lg">
            <li className="hover:text-primary-400">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-primary-400">
              <Link href="/plan">plan</Link>
            </li>
            <li className="hover:text-primary-400">
              <Link href="/about">About</Link>
            </li>
            <li className="hover:text-primary-400">
              <Link href="/blog">Blog</Link>
            </li>
            <li className="hover:text-primary-400">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center justify-between relative xs:ml-[0.5rem] lg:hidden">
          <button
            className="grid mx-[0.7rem] cursor-pointer xs:mx-[0.5rem] lg:mr-[1rem] lg:ml-0"
            onClick={navClick ? handleNavClose : handleNavClick}
          >
            {navClick ? (
              <IoClose className="text-[1.7rem] z-[200]" />
            ) : (
              <IoIosMenu className="text-[1.7rem]" />
            )}
          </button>
        </div>
      </div>

      {navClick && (
        <div>
          <ul className="fixed right-0 top-0 pt-[5rem] pl-[1rem] gap-[1rem] flex flex-col w-[40%] z-[190] h-[100vh] bg-neutral-100">
            <li className="hover:text-primary-400">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-primary-400">
              <Link href="/plan">Plan</Link>
            </li>
            <li className="hover:text-primary-400">
              <Link href="#about">About</Link>
            </li>
            <li className="hover:text-primary-400">
              <Link href="#blog">Blog</Link>
            </li>
            <li className="hover:text-primary-400">
              <Link href="#contact">Contact</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
