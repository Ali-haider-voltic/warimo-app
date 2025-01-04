"use client";
import React, { useState, useRef, useEffect } from "react";
import { Timer } from 'lucide-react';
import { useRouter } from "next/navigation";
// Layout
import AuthLayout from "../_authLayout/layout";
// Component
import Button from "../../../_components/button";

const OtpVerification = ({ duration = 6 }) => {
    const router = useRouter();
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const inputRefs = useRef([]);
    const [timeLeft, setTimeLeft] = useState(duration);
    const [timer, setTimer] = useState(30);
    const [isTimerVisible, setIsTimerVisible] = useState(true);

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

    useEffect(() => {
        // Handle countdown timer
        if (timeLeft <= 0) return;

        const interval = 1000; // Update every second
        const timer = setInterval(() => {
            setTimeLeft((prev) => Math.max(prev - 1, 0));  // Decrement by 1 second
        }, interval);

        return () => clearInterval(timer);  // Cleanup on component unmount
    }, [timeLeft]);

    useEffect(() => {
        if (timer > 0) {
            const interval = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1);
            }, 1000);
            return () => clearInterval(interval); // Cleanup interval on component unmount
        } else {
            setIsTimerVisible(false); // Hide timer after 30 seconds
        }
    }, [timer]);

    // Calculate clockwise border removal as a percentage


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
                            className="w-16 h-16 text-center text-primary font-bold text-xl focus:border-focus-red border rounded-full  focus:outline-none"
                        />
                    ))}
                </div>

                {isTimerVisible && (
                    <div className="w-full flex justify-end items-center pr-24">
                        <div className={`relative w-20 flex justify-center items-center rounded-full`}>
                            <div
                                className={`absolute inset-0 rounded-full border-2 border-primary`}
                                style={{
                                    clipPath: `inset(${(30 - timer) / 30 * 100}% 0 0 0)`,
                                    transition: 'clip-path 1s linear'
                                }}
                            ></div>
                            <div className="flex items-center space-x-1">
                                <span className="text-lg font-medium text-linkcolor">
                                    00:{timer.toString().padStart(2, '0')}
                                </span>
                                <Timer className="text-sm w-4 h-4 text-linkcolor" />
                            </div>
                        </div>
                    </div>
                )}

                <div className="text-center mt-4">
                    <Button
                    disabled
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
