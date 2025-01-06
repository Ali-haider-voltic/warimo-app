"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// Layout
import AuthLayout from "../_authLayout/layout";
// Components
import Input from "../../../_components/input";
import Checkbox from "../../../_components/checkbox";
import Button from "../../../_components/button";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../../slices/authSlice";

const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.auth);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const rememberMe = watch("rememberMe");

  const onSubmit = async (data) => {
    try {
      const result = await dispatch(loginUser({ data })).unwrap();
      if (result?.success) {
        toast.success("Login successful!");
        router.push("/dashboard"); // Redirect to dashboard or any other page
      } else {
        toast.error(result?.message || "Login failed. Please try again.");
      }
    } catch (err) {
      toast.error(err.message || "An error occurred during login.");
    } finally {
      reset({
        email: "",
        password: "",
        rememberMe: false,
      });
    }
  };

  return (
    <>
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            className="mb-[24px]"
            label="Email Address"
            type="email"
            placeholder="Enter your email address"
            error={errors.email?.message}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            })}
          />
          <Input
            className="mb-[24px]"
            label="Password"
            type="password"
            placeholder="Enter your password"
            error={errors.password?.message}
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters long",
              },
            })}
          />
          <div className="flex justify-between">
            <Checkbox
              text="Remember Me"
              name="rememberMe"
              type="checkbox"
              checked={rememberMe}
              onChange={() => setValue("rememberMe", !rememberMe)}
            />
            <span
              className="text-primary font-medium text-base-font cursor-pointer pr-[5px] pt-[2px]"
              onClick={() => router.push("/forget-password")}
            >
              Forgot Password?
            </span>
          </div>
          <div className="text-center mt-[10px]">
            <Button
              type="submit"
              text="Sign In"
              className="bg-primary text-white min-w-[180px] h-[44px]"
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
            <div className="flex justify-center">
              <Button
                startIcon="/icon-gmail.png"
                text="Sign in with Google"
                iconWidth={24}
                className="bg-white text-secondary min-w-[180px] h-[44px]"
              />
            </div>
          </div>
        </form>
      </AuthLayout>
      {/* ToastContainer for displaying notifications */}
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
};

export default Login;
