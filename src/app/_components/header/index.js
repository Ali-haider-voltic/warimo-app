'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-black text-white fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between py-6 px-4">
        {/* Logo */}
        <div className="text-xl font-bold text-orange-500">
          <Image src="/image-logo.png" width={164} height={32} alt="no-logo" />
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Menu */}
        <nav
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } md:flex  absolute md:relative top-16 md:top-auto left-0 w-full md:w-auto bg-black md:bg-transparent z-50 md:z-auto px-6 py-2 md:px-0`}
        >
          {/* Navigation Links */}
          <a
            href="#"
            className="block md:inline-block relative text-white group text-large-font transition duration-300 high-z-index py-2 px-4 md:py-0"
          >
            Home
            <span className="absolute hover-effect inset-0 -z-10 bg-[#FC5A3F] skew-x-[-12deg] scale-0 skew-x-12 origin-left group-hover:scale-100 transition duration-300"></span>
          </a>
          <a
            href="#"
            className="block md:inline-block relative text-white group text-large-font transition duration-300 high-z-index py-2 px-4 md:py-0"
          >
            About Us
            <span className="absolute hover-effect inset-0 -z-10 bg-[#FC5A3F] skew-x-[-12deg] scale-0 skew-x-12 origin-left group-hover:scale-100 transition duration-300"></span>
          </a>
          <a
            href="#"
            className="block md:inline-block relative text-white group text-large-font transition duration-300 high-z-index py-2 px-4 md:py-0"
          >
            Pricing
            <span className="absolute hover-effect inset-0 -z-10 bg-[#FC5A3F] skew-x-[-12deg] scale-0 skew-x-12 origin-left group-hover:scale-100 transition duration-300"></span>
          </a>
          <a
            href="#"
            className="block md:inline-block relative text-white group text-large-font transition duration-300 high-z-index py-2 px-4 md:py-0"
          >
            Product Tour
            <span className="absolute hover-effect inset-0 -z-10 bg-[#FC5A3F] skew-x-[-12deg] scale-0 skew-x-12 origin-left group-hover:scale-100 transition duration-300"></span>
          </a>

          {/* Sign In and Sign Up Buttons for Mobile */}
          <div className="block md:hidden mt-4 space-y-4">
            <a
              href="#"
              className="block text-center text-base-font px-4 py-2 rounded-full hover:bg-orange-600 transition duration-300"
            >
              Sign In
            </a>
            <a
              href="#"
              className="block bg-[#FC5A3F] text-center text-base-font px-4 py-2 rounded-full hover:bg-orange-600 transition duration-300"
            >
              Sign Up
            </a>
          </div>
        </nav>

        {/* Action Buttons for Desktop */}
        <div className="hidden md:flex space-x-4 items-center">
          <a
            href="#"
            className="relative text-white group text-large-font transition duration-300 high-z-index px-2"
          >
            Sign In
          </a>
          <a
            href="#"
            className="bg-[#FC5A3F] text-base-font px-4 py-2 rounded-full hover:bg-orange-600 transition duration-300"
          >
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Index;

