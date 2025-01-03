"use client"; // This line ensures that this component is treated as a client component
import React from "react";
import { useRouter } from "next/navigation";
//layout
import AuthLayout from "../_authLayout/layout";
// component
import Input from "../../../_components/input";
import Button from "../../../_components/button";

const Login = () => {
    const router = useRouter();

    return (
        <AuthLayout
            paddingTop="pt-[99px]"
            authText="Real-Time Warm-Up Monitoring"
            authPargraph="Stay informed about your email warm-up progress. Analyze domain reputation, email health, and deliverability trends effortlessly. Make data-driven decisions to maximize your inbox placement success."
            logoText="Forgot Password?"
            leftLogo="/icon-monitor-auth.png"
            paragrapgh="Please submit your registered email address and we'll send you an email with your password reset link!"
        >
            <Input
                className="mb-[24px]"
                required
                label="Email Address"
                type="email"
                placeholder="Enter your registered email"
            />
            <div className="text-center mt-[10px]">
                <Button
                    text="Send Reset Link"
                    className="bg-primary text-white min-w-[180px] h-[44px] shadow-[1px_2px_6px_0px_#684FFF1A]"
                />
            </div>
            <div className="flex justify-center mt-5">
                <Button
                    startIcon="/icon-arrow-back.png"
                    onClick={() => router.push("/login")}
                    text="Back to Sign in"
                />
            </div>
        </AuthLayout>
    );
};

export default Login;
