"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
//layout
import AuthLayout from "../_authLayout/layout";
// component
import Button from "../../../_components/button";

const Login = () => {
    const router = useRouter();
    const [otp, setOtp] = useState(["", "", "", ""]);
    const inputRefs = useRef([]);

    const handleInputChange = (value, index) => {
        if (/^[0-9]?$/.test(value)) {
            const updatedOtp = [...otp];
            updatedOtp[index] = value;
            setOtp(updatedOtp);

            // Focus the next input field
            if (value && index < otp.length - 1) {
                inputRefs.current[index + 1]?.focus();
            }
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handleSubmit = () => {
        const enteredOtp = otp.join("");
        console.log("Entered OTP:", enteredOtp);
        // Send OTP to server for verification
    };
    return (
        <AuthLayout
            authPargraph="Leverage AI-driven strategies to gradually increase sending volume. Build and maintain a strong sender reputation with minimal effort. Optimize sending patterns to align with ISP best practices."
            logoText="OTP Verification"
            authText="Intelligent Email Warm-Up"
            leftLogo="/icon-flame-auth.png"
        >
            <div className="flex flex-col items-center justify-center">
                <div className="text-large-font text-lightGrey">
                    Enter 4 digit OTP code sent to{" "}
                    <b className="text-[#131313]">Heaven24@yahoo.com</b>
                </div>
                <div className="flex justify-center gap-4 mb-6 mt-6">
                    {otp.map((value, index) => (
                        <input
                            key={index}
                            ref={(el) => (inputRefs.current[index] = el)}
                            type="text"
                            value={value}
                            onChange={(e) =>
                                handleInputChange(e.target.value, index)
                            }
                            onKeyDown={(e) => handleKeyDown(e, index)}
                            maxLength="1"
                            className="w-24 h-24 text-center text-primary font-bold text-xl focus:border-focus-red border rounded-full  focus:outline-none"
                        />
                    ))}
                </div>
                <div className="text-center mt-[10px]">
                    <Button
                        text="Verify"
                        className="bg-primary text-white min-w-[180px] h-[44px] shadow-[1px_2px_6px_0px_#684FFF1A]"
                    />
                </div>
            </div>

            <div></div>
        </AuthLayout>
    );
};
export default Login;
