"use client";
import React from "react";
import { useRouter } from "next/navigation";
//layout
import AuthLayout from "../_authLayout/layout";
// component
import Input from "../../../_components/input";
import Checkbox from "../../../_components/checkbox";
import Button from "../../../_components/button";

const SignUp = () => {
    const router = useRouter();
    return (
        <AuthLayout
            paddingTop="pt-[57px]"
            authPargraph="Join our platform to elevate your email deliverability. Gain access to advanced tools that ensure your messages land in the inbox, protect your sender reputation, and optimize your campaigns for maximum effectiveness."
            logoText="Get Started Now"
            authText="Accelerate Email Delivery Now"
            accountText="Already have an account?"
            buttonText="Sign In"
            leftLogo="/icon-signup-auth.png"
            leftButtonClick={() => router.push("/login")}
        >
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                <div className="sm:col-span-6 lg:col-span-6">
                    <Input
                        className="mb-[24px]"
                        required
                        label="First Name"
                        type="email"
                        placeholder="Enter your email address"
                    />
                </div>
                <div className="sm:col-span-6 lg:col-span-6">
                    <Input
                        className="mb-[24px]"
                        required
                        label="Last Name"
                        type="email"
                        placeholder="Enter your email address"
                    />
                </div>
            </div>
            <Input
                className="mb-[24px]"
                required
                label="Email Address"
                type="email"
                placeholder="Enter your email address"
            />
            <Input
                className="mb-[24px]"
                required
                label="Password"
                type="password"
                placeholder="Enter your password"
            />
            <Input
                className="mb-[16px]"
                required
                label="Confirm Password"
                type="password"
                placeholder="Enter your password"
            />
            <div className="flex justify-between">
                <Checkbox text="I agree to the Terms & Conditions" />
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
export default SignUp;
