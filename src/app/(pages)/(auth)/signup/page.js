"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signIn } from 'next-auth/react';
// Redux
import { SignUpUser,verifyGoogle } from "../../../slices/authSlice";
import { useDispatch,useSelector } from "react-redux";
// Layout
import AuthLayout from "../_authLayout/layout";
// Components
import Input from "../../../_components/input";
import Checkbox from "../../../_components/checkbox";
import Button from "../../../_components/button";

const SignUp = () => {
  const router = useRouter();
  
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(false);
  const { message, loading,data:responseData } = useSelector((state) => state.auth);
  
  const [error, setError] = useState(""); // State to track error message

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm();

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const onSubmit = async (data) => {
    if (!isChecked) {
      setError("You must agree to the Terms & Conditions to continue.");
      toast.error("Please accept the Terms & Conditions.");
      return;
    }
    setError("");

    try {
      const result = await dispatch(SignUpUser({ router, credentials: data })).unwrap();
      if (result?.success) {
        toast.success(message);
 
      } else {
        toast.error(message);
      }
    } catch (err) {
      toast.error(message);
    } finally {
      reset({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        rememberMe: false,
      });
      setIsChecked(false);
    }
  };
  const handleGoogleSignIn = () => {
    window.location.href = "/api/auth/google";
  };
  

  return (
    <>
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
            <div className="sm:col-span-6 lg:col-span-6">
              <Input
                {...register("firstName", { required: "First Name is required" })}
                className="mb-[24px]"
                label="First Name"
                required
                placeholder="Enter your first name"
                error={errors.firstName?.message}
              />
            </div>
            <div className="sm:col-span-6 lg:col-span-6">
              <Input
                {...register("lastName", { required: "Last Name is required" })}
                className="mb-[24px]"
                label="Last Name"
                required
                placeholder="Enter your last name"
                error={errors.lastName?.message}
              />
            </div>
          </div>

          <Input
            {...register("email", {
              required: "Email Address is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Invalid email address",
              },
            })}
            required
            className="mb-[24px]"
            label="Email Address"
            placeholder="Enter your email address"
            error={errors.email?.message}
          />

          <Input
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
            required
            className="mb-[24px]"
            label="Password"
            type="password"
            error={errors.password?.message}
            placeholder="Enter your password"
          />

          <Input
            {...register("confirmPassword", {
              required: "Please confirm your password",
              validate: (value) =>
                value === watch("password") || "Passwords do not match",
            })}
            required
            className="mb-[16px]"
            label="Confirm Password"
            type="password"
            placeholder="Confirm your password"
            error={errors.confirmPassword?.message}
          />

          <div className="flex justify-between">
            <Checkbox
              {...register("rememberMe")}
              checked={isChecked}
              onChange={handleCheckboxChange}
              text="I agree to the"
              Link="Terms & Conditions"
              type="checkbox"
            />
          </div>

          <div className="text-center mt-[10px]">
            <Button
              type="submit"
              text={loading ? 'laoding...' : 'Sign In'}
              className="bg-primary text-white min-w-[180px] h-[44px]"
              disabled={loading}
            />
          </div>
          <div>
            <div className="flex items-center my-6 mx-16">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="flex-shrink mx-4 text-gray-600 text-base-font">
                OR
              </span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>
         
          </div>
        </form>
        <div className="flex justify-center">
              <Button
                startIcon="/icon-gmail.png"
                text="Sign in with Google"
                onClick={handleGoogleSignIn}
                iconWidth={24}
                className="bg-white text-secondary min-w-[180px] h-[44px]"
              />
            </div>
      </AuthLayout>
      {/* ToastContainer for notifications */}
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
};

export default SignUp;
