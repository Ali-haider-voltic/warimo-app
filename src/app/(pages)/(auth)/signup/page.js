"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// Redux
import { SignUpUser } from "../../../slices/authSlice";
import { useDispatch } from "react-redux";
// Layout
import AuthLayout from "../_authLayout/layout";
// Components
import Input from "../../../_components/input";
import Checkbox from "../../../_components/checkbox";
import Button from "../../../_components/button";

const SignUp = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(false); // State to track checkbox
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
      const result = await dispatch(SignUpUser({ data })).unwrap();
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      const data = await res.json();
  
      if (res.ok) {
        setSuccess(data.message);
        setFormData({ name: "", email: "", password: "" });
      } else {
        setError(data.message || "Something went wrong.");
      }
      if (result?.success) {
        toast.success("Account created successfully!");
        router.push("/dashboard"); // Redirect to dashboard or another page
      } else {
        toast.error(result?.message || "Signup failed. Please try again.");
      }
    } catch (err) {
      toast.error(err.message || "An error occurred during signup.");
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
              text="Sign Up"
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
                iconWidth={24}
                className="bg-white text-secondary min-w-[180px] h-[44px] shadow-[1px_2px_6px_0px_#684FFF1A]"
              />
            </div>
          </div>
        </form>
      </AuthLayout>
      {/* ToastContainer for notifications */}
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
};

export default SignUp;
