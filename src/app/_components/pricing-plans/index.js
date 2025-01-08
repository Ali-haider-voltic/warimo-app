"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Divider } from "antd";
import { motion } from "framer-motion";

const PricingSection = () => {
  const [openSections, setOpenSections] = useState({}); // Object to track open states

  const toggleSection = (sectionId) => {
    setOpenSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId], // Toggle the state of the clicked section
    }));
  };

  const pricingPlans = [
    {
      id: 1,
      title: "Expert",
      price: 279,
      members: "50k",
      features: [
        "Warmup emails per day (100)",
        "DNS record test (10)",
        "Inbox placement test (1)",
      ],
    },
    {
      id: 2,
      title: "Premium",
      price: 149,
      members: "20k",
      features: [
        "Warmup emails per day (50)",
        "DNS record test (5)",
        "Inbox placement test (1)",
      ],
    },
    {
      id: 3,
      title: "Expert",
      price: 279,
      members: "50k",
      features: [
        "Warmup emails per day (100)",
        "DNS record test (10)",
        "Inbox placement test (1)",
      ],
    },
    {
      id: 4,
      title: "Expert",
      price: 279,
      members: "50k",
      features: [
        "Warmup emails per day (100)",
        "DNS record test (10)",
        "Inbox placement test (1)",
      ],
    },
  ];

  return (
    <div className="container mx-auto">
      {/* Pricing Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {pricingPlans.map((plan) => {
          const isExpanded = openSections[plan.id];

          return (
            <div
              key={plan.id}
              className={`${
                plan.title === "Premium"
                  ? "bg-secondary text-white lg:mt-[-14px] lg:mb-[-24px] pt-[28px]"
                  : "bg-white text-secondary"
              } rounded-lg px-3 py-6 shadow-[0px_0px_4px_0px_#FC5A3F33] min-h-[400px]`}
            >
              <div className="flex justify-between items-center flex-wrap">
                <h3 className="text-lg sm:text-base font-semibold uppercase">{plan.title}</h3>
                <p className="text-sm sm:text-xs font-semibold flex gap-1">
                  <Image src="/icon-add.svg" width={11} height={3} alt="no-icon" />
                  <span className="text-primary font-semibold">{plan.members}</span> members
                </p>
              </div>
              <div className="flex flex-wrap  items-center text-[36px] md:text-[32px] sm:text-[28px] gap-[10px] mt-[44px] font-bold">
                <sub className="sub-dollar">$</sub>{plan.price}{" "}
                <span className="flex flex-col">
                  <span className="text-lg sm:text-base font-semibold">USD/ mo</span>
                  <span className="text-sm sm:text-xs font-semibold">Per mail box</span>
                </span>
              </div>
              <button className="bg-primary w-full mt-[38px] mb-[18px] text-white py-2 px-4 rounded-full hover:text-primary font-semibold transition">
                Get Started
              </button>

              {/* Content Area */}
              <div className="text-sm sm:text-xs space-y-2">
                {plan.features.slice(0, 2).map((feature, index) => (
                  <div key={index} className="text-base sm:text-xs">
                    {feature}
                    <Divider className="my-2.5" />
                  </div>
                ))}
                <div>
                  <button
                    type="button"
                    className="flex items-center mt-[16px] justify-center w-full font-semibold text-primary gap-3"
                    onClick={() => toggleSection(plan.id)}
                    aria-expanded={isExpanded || false}
                  >
                    <span>{isExpanded ? "Show Less" : "Show More"}</span>
                    <svg
                      className={`w-3 h-3 transform ${
                        isExpanded ? "rotate-180" : ""
                      } shrink-0`}
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5 5 1 1 5"
                      />
                    </svg>
                  </button>

                  {/* Expandable Content with Animation */}
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: isExpanded ? "auto" : 0,
                      opacity: isExpanded ? 1 : 0,
                    }}
                    exit={{ height: 0, opacity: 0, marginTop: 16 }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                    }}
                    className="overflow-hidden"
                  >
                    {isExpanded &&
                      plan.features.slice(2).map((feature, index) => (
                        <div key={index} className="text-base sm:text-xs">
                          {feature}
                          {index < plan.features.length - 3 && (
                            <Divider className="my-2.5" />
                          )}
                        </div>
                      ))}
                  </motion.div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PricingSection;
