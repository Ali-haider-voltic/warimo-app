"use client";
import React from "react";
import { useRouter } from "next/navigation";
// layout
import AuthLayout from "../_authLayout/layout";
// component
import Input from "../../../_components/input";
import Button from "../../../_components/button";
// React Hook Form
import { useForm } from "react-hook-form";

const ResetPassword = () => {
    const router = useRouter();

    // Initialize useForm hook
    const { register, handleSubmit, formState: { errors }, watch } = useForm();

    // Form submit handler
    const onSubmit = (data) => {
        console.log(data);
        // Handle password reset logic here
    };

    return (
        <AuthLayout
            authPargraph="Integrate effortlessly with popular email clients, CRM systems, and other essential software. Streamline your workflow and enhance productivity by connecting our warm-up service with your existing tools."
            logoText="Reset Password"
            authText="Connect with Your Essential Tools"
            leftLogo="/icon-connect.png"
            leftButtonClick={() => router.push("/signup")}
        >
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    {...register("password", {
                        required: "Password is required",
                        minLength: {
                            value: 6,
                            message: "Password must be at least 6 characters",
                        },
                    })}
                    className="mb-[24px]"
                    label="Password"
                    type="password"
                    placeholder="Enter your password"
                    error={errors.password?.message}
                />

                <Input
                    {...register("confirmPassword", {
                        required: "Confirm Password is required",
                        validate: (value) => 
                            value === watch("password") || "Passwords do not match",
                    })}
                    className="mb-[24px]"
                    label="Confirm Password"
                    type="password"
                    placeholder="Confirm your password"
                    error={errors.confirmPassword?.message}
                />
    

                <div className="text-center mt-[10px]">
                    <Button
                        type="submit"
                        text="Reset Password"
                        className="bg-primary text-white min-w-[180px] h-[44px] shadow-[1px_2px_6px_0px_#684FFF1A]"
                    />
                </div>
            </form>
        </AuthLayout>
    );
};

export default ResetPassword;
