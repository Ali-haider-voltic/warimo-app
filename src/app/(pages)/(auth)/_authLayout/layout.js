import React from 'react';
import Image from 'next/image';
import Button from '../../../_components/button'

const AuthLayout = ({children}) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-12 md:grid-cols-12 lg:grid-cols-12">
            {/* Left Section */}
            <div className="sm:col-span-6 md:col-span-6 lg:col-span-5 lg:mr-[19px] sm:mr-0">
                <div className="bg-[#131313] min-h-screen flex flex-col justify-between lg:p-12 md:p-8 p-6">
                    {/* Header */}
                    <div className="bg-[#FC5A3F] w-[52px] h-[52px] flex justify-center items-center rounded-full">
                        <Image
                            src="/home.svg"
                            width={24}
                            height={24}
                            alt="Home Icon"
                        />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col justify-center items-center flex-grow">
                        <Image
                            src="/success-auth.png"
                            width={80}
                            height={80}
                            alt="Success Icon"
                        />
                        <h2 className="text-center text-[44px] font-extrabold uppercase text-white pt-[30px] leading-[59px] pb-[6px]">
                            Your Path to Success Starts
                        </h2>
                        <p className="text-white text-center leading-[20.8px] font-popins px-[7px]">
                            With Warmio, enhance your email reputation effortlessly. Our automated warm-up system, powered by AI, ensures your emails bypass spam filters and reach your audience's primary inbox, boosting your campaign effectiveness.
                        </p>
                    </div>

                    {/* Footer */}
                    <div className="text-white">
                        <div className="flex justify-center gap-5">
                            {['Privacy', 'Terms & Conditions', 'Help'].map((item, index) => (
                                <span key={index} className="flex items-center text-[12px] leading-[17px] font-medium">
                                    <div className="bg-[#2B2B2C] h-[6px] w-[6px] rounded-full mr-[6px]" />
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Section */}
            <div className="sm:col-span-6 md:col-span-6 lg:col-span-7">
                {/* Placeholder content for the right section */}
                <div className="min-h-screen bg-gray-100 lg:p-12 md:p-8 p-6">
                    <div className='flex items-center justify-end items-center gap-2' >
                        <span className='text-[14px] text-[#6A6A6C] font-normal'>Don’t have an account? </span> <Button icon="/icon-arrow.png" text="Create an account" className="bg-[#ffffff] text-[#FC5A3F]" />
                    </div>
                    <div className='py-[164px] max-w-[555px] m-auto'>
                        <div className='flex flex-col items-center ml-[-17px] mb-[23px]' >
                        <Image src="/brand-logo.svg"  width={266} height={56} alt="no-logo" />
                        <h2 className='text-[#131313] text-[20px] font-medium mt-[12px] ml-[-7px]'>Welcome Back</h2>
                        </div>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;