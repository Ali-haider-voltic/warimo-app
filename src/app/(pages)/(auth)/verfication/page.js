"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
//layout
import AuthLayout from "../_authLayout/layout";
// component
import Button from "../../../_components/button";

const Login = () => {
    const router = useRouter();
    return (
        <AuthLayout
            authPargraph="Stay informed about your email warm-up progress. Analyze domain reputation, email health, and deliverability trends effortlessly. Make data-driven decisions to maximize your inbox placement success."
            logoText="Check Mailbox"
            authText="Real-Time Warm-Up Monitoring"
            leftLogo="/icon-monitor-auth.png"
        >
            <div className="flex flex-col items-center justify-center">
                <div className="text-large-font text-lightGrey">
                    We sent a code to{" "}
                    <b className="text-[#131313]">Heaven24@yahoo.com</b>
                </div>
                <Image
                    src="/image-verifaction.png"
                    width={260}
                    height={308}
                    alt="no-image"
                />
                <div className="flex gap-2 my-5">
                    <Button
                        text="Open Gmail"
                        startIcon="/icon-gmail.png"
                        icon="/icon-arrow-up.png"
                        className="bg-white text-secondary min-w-[148px] h-[32px]"
                    />
                    <Button
                        text="Open Outlook"
                        startIcon="/icon-outlook.png"
                        icon="/icon-arrow-up.png"
                        className="bg-white text-secondary min-w-[148px] h-[32px]"
                    />
                </div>
                <p className="text-[#6A6A6C] text-large-font my-5 ">
                    Did not receive the email? Check your spam filter
                </p>
            </div>

            <div>
                <div className="flex justify-center gap-1 items-center">
                    <span className="text-[#6A6A6C] text-large-font">or</span>
                    <Button
                        startIcon="/icon-arrow-start-up.png"
                        text="Try another email address"
                        className="bg-white text-primary min-w-[180px] h-[28px]"
                    />
                </div>
            </div>
        </AuthLayout>
    );
};
export default Login;
