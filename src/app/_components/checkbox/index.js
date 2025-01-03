"use client";
import React from "react";

const Index = ({ text }) => {
  const isTermsText = text === "I agree to the Terms & Conditions";

  return (
    <>
      <div className="flex items-center mb-4 cursor-pointer">
        <input
          id="default-radio-1"
          type="radio"
          value=""
          name="default-radio"
          className="w-4 h-4 text-[#FC5A3F] bg-gray-100 border-gray-300 focus:outline-none focus:ring-[#FC5A3F] dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          htmlFor="default-radio-1"
          className={`ms-2 text-[12px] font-medium ${
            isTermsText ? "text-[#FC5A3F]" : "text-[#131313]"
          }`}
        >
          {text}
        </label>
      </div>
    </>
  );
};

export default Index;
