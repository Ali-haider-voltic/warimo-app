"use client";
import React, { useState } from "react";
import { Eye, EyeOff } from 'lucide-react';

const Index = ({ label, placeholder, type, required }) => {
    const [isPasswordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible((prevState) => !prevState);
    };

    return (
        <div className="mb-3">
            <label className="block text-sm sm:text-md text-black mb-1 text-[#131313] text-[14px] mb-[13px] font-medium">
                {label}{required && <span className='text-[#E9190F] ml-1'>*</span>}
            </label>

            {type === "password" ? (
                <div className="relative">
                    <input
                        type={isPasswordVisible ? "text" : "password"}
                        className="w-full h-[48px] px-3 sm:px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-linkcolor"
                        placeholder={placeholder}
                    />
                    {isPasswordVisible ? (
                        <EyeOff
                            className="absolute right-[17px] top-[50%] transform -translate-y-1/2 cursor-pointer text-[#6A6A6C]"
                            onClick={togglePasswordVisibility}
                        />
                    ) : (
                        <Eye
                            className="absolute right-[17px] top-[50%] transform -translate-y-1/2 cursor-pointer text-[#6A6A6C]"
                            onClick={togglePasswordVisibility}
                        />
                    )}
                </div>
            ) : (
                <input
                    type={type}
                    className="w-full h-[48px] px-3 sm:px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-linkcolor"
                    placeholder={placeholder}
                />
            )}
        </div>
    );
};

export default Index;