"use client";
import React from "react";

const Index = ({ text,Link,name,value,checked,onChange,type,error,...rest }) => {
  const isTermsText = text === "I agree to the Terms & Conditions";

  return (
    <>
      <div className="flex items-center mb-4">
        <input
          id="country-option-1"
          type={type}
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          {...rest}
          className="checked:bg-red-500 checked:hover:text-primary checked:active:text-primary0 checked:focus:text-primary0 focus:text-primary focus:outline-none  focus:text-primary" 
        />
        <label
          htmlFor="country-option-1"
          className={`ms-2 text-[12px] font-medium ${
            isTermsText ? "text-[#FC5A3F]" : "text-[#131313]"
          }`}
        >
          {text}{Link && <a className="text-primary pl-1 cursor-pointer">{Link}</a>}
        </label>
        {error && <p className="text-[#E9190F] text-[12px] mt-1 absolute">{error}</p>}
      </div>

    </>
  );
};

export default Index;
