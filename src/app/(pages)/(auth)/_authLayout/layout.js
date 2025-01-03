import React from 'react';
import Image from 'next/image';
// Components
import Button from '../../../_components/button';

const AuthLayout = ({ children, logoText, accountText,buttonText,paragrapgh,leftLogo,leftButtonClick,authText,authPargraph,paddingTop }) => {
    const currentYear = new Date().getFullYear();

    return (
        <div className="grid grid-cols-1 sm:grid-cols-12">
            {/* Left Section */}
            <div className="sm:col-span-6 lg:col-span-5 lg:mr-[19px]">
                <div className="bg-[#131313] min-h-screen flex flex-col justify-between lg:p-12 md:p-8 p-6">
                    {/* Header */}
                    <div className="bg-primary w-[52px] h-[52px] flex justify-center items-center rounded-full">
                        <Image src="/icon-home.svg" width={24} height={24} alt="Home Icon" />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col justify-center items-center flex-grow">
                        <Image src={leftLogo || ""} width={80} height={80} alt="Success Icon" />
                        <h2 className="text-center text-[44px] font-extrabold uppercase text-white pt-[30px] leading-[59px] pb-[6px]">
                            {authText}
                        </h2>
                        <p className="text-white text-center leading-[20.8px] font-popins px-[7px]">
                          {authPargraph}
                        </p>
                    </div>

                    {/* Footer */}
                    <div className="text-white">
                        <div className="flex justify-center gap-5">
                            {["Privacy", "Terms & Conditions", "Help"].map((item, index) => (
                                <span key={index} className="flex items-center text-[12px] leading-[17px] font-medium cursor-pointer">
                                    <div className="bg-[#2B2B2C] h-[6px] w-[6px] rounded-full mr-[6px]" />
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Section */}
            <div className="sm:col-span-6 lg:col-span-7">
                <div className="min-h-screen lg:p-12 md:p-8 p-6 relative">
                    <div className="flex items-center justify-end gap-2">
                       {accountText && <span className="text-[14px] text-[#6A6A6C] font-normal">{accountText}</span> } 
                       {buttonText &&  <Button onClick={leftButtonClick} icon="/icon-arrow.png" text={buttonText} className="bg-white text-primary" /> }
                    </div>
                    <div className={` pb-[41px] max-w-[552px] m-auto pr-[19px] flex flex-col justify-center calc-height`}>
                        <div className="flex flex-col items-center mb-[24px]">
                            <Image src="/icon-brand-logo.svg" width={266} height={56} alt="Brand Logo" />
                            <h2 className="text-[#131313] text-[20px] font-medium mt-[12px]">{logoText}</h2>
                            {paragrapgh && <p className='text-lightGrey font-large-font text-center mt-2 mb-3'>{paragrapgh}</p>}
                        </div>
                        {children}
                        <div className="text-center text-grey text-base-font absolute center-text">
                            {currentYear} ALL RIGHTS RESERVED
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;