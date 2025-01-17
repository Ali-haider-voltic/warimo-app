"use client";
import React, { useState, useRef, useEffect } from "react";
import { Timer } from 'lucide-react';
import { useRouter } from "next/navigation";
// Layout
import AuthLayout from "../../_authLayout/layout";
// Component
import Button from "../../../../_components/button";
import TimeCounter from '../../../../_components/timeCounter'
import { useDispatch, useSelector } from "react-redux";
import { verifyOtp } from "../../../../slices/authSlice";

const OtpVerification = () => {
    const router = useRouter();
    const [isClient, setIsClient] = useState(false);
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const inputRefs = useRef([]);
      const dispatch = useDispatch();
      console.log(router.query); 

    const handleInputChange = (value, index) => {
        if (/^[0-9]?$/.test(value)) {  // only numeric values allowed
            const updatedOtp = [...otp];
            updatedOtp[index] = value;
            setOtp(updatedOtp);

            // Focus the next input field
            if (value && index < otp.length - 1) {
                inputRefs.current[index + 1]?.focus();
            }
        }
    };
       useEffect(() => {
            setIsClient(true);
        }, []);

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };
    const userId = isClient ? window.location.pathname.split('/')[1] : null;
    const handleSubmit = () => {
        const enteredOtp = otp.join("");
        dispatch(verifyOtp( {router,userId, otpEntered: enteredOtp}))
        setOtp(["", "", "", "", "", ""])
    };
    const email =localStorage.getItem("email");

    return (
        <AuthLayout
            authPargraph="Leverage AI-driven strategies to gradually increase sending volume. Build and maintain a strong sender reputation with minimal effort. Optimize sending patterns to align with ISP best practices."
            logoText="OTP Verification"
            authText="Intelligent Email Warm-Up"
            leftLogo="/icon-flame-auth.png"
        >
            <div className="flex flex-col items-center justify-center">
                <div className="text-large-font text-lightGrey">
                    Enter 6-digit OTP code sent to{" "}
                    <b className="text-[#131313]">{email}</b>
                </div>
                <div className="flex justify-center gap-6 mb-2.5 mt-6">
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
                            className="w-16 h-16 text-center text-primary font-bold text-xl focus:border-focus-red border rounded-full  focus:outline-none"
                        />
                    ))}
                </div>
                <div className="flex justify-end items-end w-full mr-[60px]">
                    <TimeCounter />
                </div>

                <div className="text-center mt-4">
                    <Button
                        text="Verify"
                        className="bg-primary text-white min-w-[180px] h-[44px] shadow-[1px_2px_6px_0px_#684FFF1A]"
                        onClick={handleSubmit}
                    />
                </div>
            </div>
        </AuthLayout>
    );
};

export default OtpVerification;
