import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  const links = [
    {
      title: 'Warmio',
      items: [
        { label: 'Features', href: '#' },
        { label: 'Pricing', href: '#' },
        { label: 'Security Center', href: '#' },
      ],
    },
    {
      title: 'Company',
      items: [
        { label: 'About Us', href: '#' },
        { label: 'FAQs', href: '#' },
        { label: 'Contact Us', href: '#' },
      ],
    },
    {
      title: 'Privacy & Terms',
      items: [
        { label: 'Privacy Policy', href: '#' },
        { label: 'Terms of Service', href: '#' },
        { label: 'Cookie Policy', href: '#' },
      ],
    },
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, label: 'Facebook' },
    { icon: <FaTwitter />, label: 'Twitter' },
    { icon: <FaLinkedinIn />, label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-[#F5F2ED] text-[#3C3C3C] pt-[14px]">
      <div className="container mx-auto lg:px-0 px-5">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Newsletter */}
          <div>
            <div className="flex items-center mb-4">
              <img
                src="/logo-footer.png"
                alt="Warmio Logo"
                className="h-10"
              />
            </div>
            <p className="text-secondary text-large-font mt-[44px]">
              Stay informed with our newsletter—never miss out on our newest projects and updates
            </p>
          </div>

          {/* Dynamic Links Sections */}
          {links.map(({ title, items }) => (
            <div key={title}>
              <h3 className="text-lg font-bold mb-4">{title}</h3>
              <ul className="space-y-2">
                {items.map(({ label, href }) => (
                  <li key={label}>
                    <a href={href} className="hover:text-black">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <hr className="mt-[105px] mb-4 border-gray-300" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          {/* Copyright */}
          <p className="text-large-font text-secondary font-semibold">
            &copy; 2025 Warmio
          </p>

          {/* Social Media Links */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            {socialLinks.map(({ icon, label }) => (
              <a
                key={label}
                href="#"
                className="text-[#B3B3B5] hover:text-black border border-[#B3B3B5] p-1 rounded-full"
                aria-label={label}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;