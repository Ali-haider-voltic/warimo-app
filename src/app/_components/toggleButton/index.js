'use client'
import React, { useState } from "react";

const ToggleSwitch = () => {
  const [active, setActive] = useState("Monthly");

  return (
    <div className="flex items-center justify-center">
      <div className="relative bg-white rounded-full  flex w-[244px]">
        {/* Animated Indicator */}
        <div
          className={`absolute top-0 bottom-0 w-[50%] bg-[#FC5A3F] rounded-full transition-all duration-300 ${
            active === "Monthly" ? "left-0" : "left-[50%]"
          }`}
        ></div>

        {/* Monthly Button */}
        <button
          className={`flex-1 text-center py-4 font-semibold text-[18px] relative z-10 ${
            active === "Monthly" ? "text-white" : "text-black"
          }`}
          onClick={() => setActive("Monthly")}
        >
          Monthly
        </button>

        {/* Yearly Button */}
        <button
          className={`flex-1 text-center py-4 font-semibold text-[18px] relative z-10 ${
            active === "Yearly" ? "text-white" : "text-black"
          }`}
          onClick={() => setActive("Yearly")}
        >
          Yearly
        </button>
      </div>
    </div>
  );
};

export default ToggleSwitch;

