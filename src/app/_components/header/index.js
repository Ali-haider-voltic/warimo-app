'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'About Us', href: '#' },
  { name: 'Pricing', href: '#' },
  { name: 'Product Tour', href: '#' },
];

const actionLinks = [
  { name: 'Sign In', href: '#' },
  { name: 'Sign Up', href: '#', primary: true },
];

const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{
        opacity: isOpen ? 1 : 0,
        y: isOpen ? 0 : -20,
      }}
      transition={{ duration: 0.3 }}
      className="absolute top-16 left-0 w-full bg-black z-50 px-6 py-2"
    >
      {navLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className="block text-white group text-large-font py-2 px-4 md:py-0"
        >
          {link.name}
          <span className="absolute inset-0 -z-10 bg-[#FC5A3F] skew-x-[-12deg] scale-0 origin-left group-hover:scale-100 transition duration-300" />
        </a>
      ))}
      <div className="mt-4 space-y-4">
        {actionLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className={`block text-center px-4 py-2 rounded-full transition duration-300 ${
              link.primary
                ? 'bg-[#FC5A3F] hover:bg-orange-600'
                : 'text-base-font hover:bg-orange-600'
            }`}
          >
            {link.name}
          </a>
        ))}
      </div>
    </motion.div>
  );
};

const DesktopNav = () => (
  <div className="hidden md:flex space-x-4 items-center">
    {navLinks.map((link) => (
      <a
        key={link.name}
        href={link.href}
        className="text-white group text-large-font px-2"
      >
        {link.name}
      </a>
    ))}
    {actionLinks.map((link) => (
      <a
        key={link.name}
        href={link.href}
        className={`${
          link.primary
            ? 'bg-[#FC5A3F] min-w-[100px] text-center text-base-font px-4 py-2 rounded-full h-[40] hover:bg-orange-600'
            : 'text-white group text-large-font px-2'
        }`}
      >
        {link.name}
      </a>
    ))}
  </div>
);

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-black text-white fixed h-[90px] top-0 left-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between py-6 px-4">
        {/* Logo */}
        <div className="text-xl font-bold text-orange-500">
          <Image src="/image-logo.png" width={164} height={32} alt="no-logo" />
        </div>

        {/* Mobile Menu Button */}
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

        {/* Desktop Menu */}
        <DesktopNav />

        {/* Mobile Menu */}
        <MobileNav isOpen={isMenuOpen} toggleMenu={() => setIsMenuOpen(!isMenuOpen)} />
      </div>
    </div>
  );
};

export default Index;