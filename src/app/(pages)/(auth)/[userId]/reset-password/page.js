"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
// layout
import AuthLayout from "../../_authLayout/layout";
import { ToastContainer, toast } from "react-toastify";
// component
import Input from "../../../../_components/input";
import Button from "../../../../_components/button";
// React Hook Form
import { useForm } from "react-hook-form";
// redux
import { resetPassword } from '../../../../slices/authSlice';     
import { useDispatch,useSelector } from 'react-redux'; 

const ResetPassword = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    // State to track if we're on the client side
    const [isClient, setIsClient] = useState(false);
    const { loading,message } = useSelector((state) => state.auth);

    // UseEffect to ensure we're in the client-side
    useEffect(() => {
        setIsClient(true);
    }, []);

    // Safely get the userId after confirming client-side
    const userId = isClient ? window.location.pathname.split('/')[1] : null;

    const { register, handleSubmit, reset, formState: { errors }, watch } = useForm({
        defaultValues: {
            password: "",
            confirmPassword: '',
        },
    });
    console.log(message,"kk")

    // Form submit handler
    const onSubmit = (data) => {
        if (userId) {
            dispatch(resetPassword({ userId, newPassword: data.password })); 
        }
        toast.success(message);
        router.push("/login"); 

        reset({
            password: '',
            confirmPassword: ''
        });
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
                        disabled={loading}
                        type="submit"
                        text="Reset Password"
                        className="bg-primary text-white min-w-[180px] h-[44px] shadow-[1px_2px_6px_0px_#684FFF1A]"
                    />
                </div>
            </form>
            <ToastContainer position="top-right" autoClose={3000} />
        </AuthLayout>
    );
};

export default ResetPassword;
