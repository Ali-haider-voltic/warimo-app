"use client";
import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const Input = ({
    label,
    placeholder,
    type,
    required,
    className,
    value,
    name,
    error,
    ...rest
}) => {
    const [isPasswordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible((prevState) => !prevState);
    };

    return (
        <div className={`relative ${className}`}>
            <label className="block text-sm sm:text-md text-black mb-1 text-[#131313] text-[14px] mb-[13px] font-medium">
                {label}
                {required && <span className="text-[#E9190F] ml-0.5">*</span>}
            </label>

            {type === "password" ? (
                <div className="relative">
                    <input
                        name={name}
                        required={required}
                        type={isPasswordVisible ? "text" : "password"}
                        className={`w-full placeholder-[#6A6A6C] placeholder:font-medium  ${error ? 'focus:border-danger' : 'focus:border-focus-red'} text-base-font border-none h-[52px] px-3 sm:px-4 py-2  rounded-full focus:outline-none`}
                        placeholder={placeholder}
                        {...rest}
                    />
                    {!isPasswordVisible ? (
                        <EyeOff
                            size={15}
                            className="absolute right-[17px] top-[50%] transform -translate-y-1/2 cursor-pointer text-[#6A6A6C]"
                            onClick={togglePasswordVisibility}
                        />
                    ) : (
                        <Eye
                            size={15}
                            className="absolute right-[17px] top-[50%] transform -translate-y-1/2 cursor-pointer text-[#6A6A6C]"
                            onClick={togglePasswordVisibility}
                        />
                    )}
                </div>
            ) : (
                <input
                    name={name}
                    type={type}
                    required={required}
                    className={`w-full placeholder-[#6A6A6C]  placeholder:font-medium  text-base-font  ${error ? 'focus:border-danger' : 'focus:border-focus-red'} border-none focus:shadow-none h-[52px] px-3 sm:px-4 py-2  rounded-full focus:outline-none`}
                    placeholder={placeholder}
                    {...rest}
                    onChange={(e) => e.target.value}
                    value={value}
                />
            )}
            {error && <p className="text-[#E9190F] text-[12px] mt-1 absolute">{error}</p>}
        </div>
    );
};

export default Input;
