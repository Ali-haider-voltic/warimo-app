"use client";
import React from "react";
import { useRouter } from "next/navigation";
//layout
import AuthLayout from "../_authLayout/layout";
// component
import Input from "../../../_components/input";
import Checkbox from "../../../_components/checkbox";
import Button from "../../../_components/button";

const ResetPassword = () => {
    const router = useRouter();
    return (
        <AuthLayout
            authPargraph="Integrate effortlessly with popular email clients, CRM systems, and other essential software. Streamline your workflow and enhance productivity by connecting our warm-up service with your existing tools."
            logoText="Reset Password"
            authText="Connect with Your Essential Tools"
            leftLogo="/icon-connect.png"
            leftButtonClick={() => router.push("/signup")}
        >
            <Input
                className="mb-[24px]"
                required
                label="Password"
                type="password"
                placeholder="Enter your password"
            />
            <Input
                className="mb-[24px]"
                required
                label="Confrim Password"
                type="password"
                placeholder="Enter your password"
            />
            <div className="text-center mt-[10px]">
                <Button
                    text="Sign In"
                    className="bg-primary text-white min-w-[180px] h-[44px] shadow-[1px_2px_6px_0px_#684FFF1A]"
                />
            </div>
            <div></div>
        </AuthLayout>
    );
};
export default ResetPassword;
