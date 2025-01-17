    "use client"; // This line ensures that this component is treated as a client component
    import React from "react";
    import { useRouter } from "next/navigation";
    import { useForm } from "react-hook-form";

    //layout
    import AuthLayout from "../_authLayout/layout";
    // component
    import Input from "../../../_components/input";
    import Button from "../../../_components/button";
    // redux
    import { useDispatch, useSelector } from 'react-redux';
    import { forgotPassword } from '../../../slices/authSlice';

    const Login = () => {
        const router = useRouter();
        // Initialize React Hook Form
        const { register,reset, handleSubmit, formState: { errors } } = useForm({
            defaultValues: {
              email: "",
            },
          });
        const dispatch = useDispatch();
        const { loading, error, forgotPasswordSuccess } = useSelector((state) => state.auth);
    

        // Form submit handler
        const onSubmit = (data) => {
            dispatch(forgotPassword(data));
            reset({email:''})
        };

        return (
            <AuthLayout
                paddingTop="pt-[99px]"
                authText="Real-Time Warm-Up Monitoring"
                authPargraph="Stay informed about your email warm-up progress. Analyze domain reputation, email health, and deliverability trends effortlessly. Make data-driven decisions to maximize your inbox placement success."
                logoText="Forgot Password?"
                leftLogo="/icon-monitor-auth.png"
                paragrapgh="Please submit your registered email address and we'll send you an email with your password reset link!"
            >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        className="mb-[24px]"
                        required
                        label="Email Address"
                        type="email"
                        placeholder="Enter your registered email"
                        {...register("email", {
                            required: "Email Address is required",  // email is required
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,  // Basic email validation pattern
                                message: "Invalid email address",
                            },
                        })}
                        error={errors.email?.message}
                    />
                    <div className="text-center">
                        <Button
                            type="submit"
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
                </form>
            </AuthLayout>
        );
    };

    export default Login;
