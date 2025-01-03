"use client";
import React from "react";
import { useRouter } from "next/navigation";
//layout
import AuthLayout from "../_authLayout/layout";
// component
import Input from "../../../_components/input";
import Checkbox from "../../../_components/checkbox";
import Button from "../../../_components/button";

const Login = () => {
    const router = useRouter();
    return (
        <AuthLayout
            paddingTop="pt-[164px]"
            authPargraph="With Warmio, enhance your email reputation effortlessly. Our automated warm-up system, powered by AI, ensures your emails bypass spam filters and reach your audience's primary inbox, boosting your campaign effectiveness."
            logoText="Welcome Back!"
            authText="Your Path to Success Starts Here"
            accountText="Don’t have an account?"
            buttonText="Create an account"
            leftLogo="/success-auth.png"
            leftButtonClick={() => router.push("/signup")}
        >
            <Input
                className="mb-[24px]"
                required
                label="Email Address"
                type="email"
                placeholder="Enter your email address"
            />
            <Input
                className="mb-[16px]"
                required
                label="Password"
                type="password"
                placeholder="Enter your password"
            />
            <div className="flex justify-between">
                <Checkbox text="Remember Me" />
                <span
                    className="text-primary font-medium text-base-font cursor-pointer pr-[5px] pt-[2px]"
                    onClick={() => router.push("/forget-password")}
                >
                    Forgot Password?
                </span>
            </div>
            <div className="text-center mt-[10px]">
                <Button
                    text="Sign In"
                    className="bg-primary text-white min-w-[180px] h-[44px]"
                />
            </div>
            <div>
                <div className="flex items-center my-6">
                    <div className="flex-grow border-t border-gray-300"></div>
                    <span className="flex-shrink mx-4 text-gray-600 text-base-font">
                        OR
                    </span>
                    <div className="flex-grow border-t border-gray-300"></div>
                </div>
                <div className="flex justify-center">
                    <Button
                        startIcon="/icon-gmail.png"
                        text="Sign in with Google"
                        className="bg-white text-secondary min-w-[180px] h-[44px] shadow-[1px_2px_6px_0px_#684FFF1A]"
                    />
                </div>
            </div>
        </AuthLayout>
    );
};
export default Login;
