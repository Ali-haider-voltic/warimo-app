"use client"
import React from 'react';
import Header from '../../../_components/header/index';
import ToggleButton from '../../../_components/toggleButton';
import Slider from '../../../_components/slider';
import PricingPlan from '../../../_components/pricing-plans'
const Home = () => {
    return (
        <div>
            <Header />
            <div className='pt-[85px]'>
                <div className='add-shape'>
                    <div className='container mx-auto'>
                        <div className="flex flex-col items-center justify-center mt-[40px]">
                            <div className="flex items-center justify-center mt-[-10px] px-4">
                                <span className="relative"><span className='tracking-wider font-medium pricing-title'>PRICING</span></span>
                            </div>
                            <h1 className='text-center text-[32px] sm:text-[16px] md:text-[40px] text-[#131313] font-bold capitalize leading-[50px] mt-[30px]'>Competitive rates designed for <span className='text-primary'>agencies</span> <br /><span className='text-primary'>   and accounts holders</span></h1>
                            <p className='text-[#131313]  sm:text-[12px] md:text-[14px] leading-[16px] mt-4'>Manage newsletter publishing, member subscriptions, and payouts seamlessly—all in one platform</p>
                            <div className='mt-8'>
                                <ToggleButton />

                            </div>
                            <a className='underline text-[18px] capitalize text-primary mt-6 cursor-pointer'>get 3 days free </a>

                        </div>
                        <div className='mt-[88px]'>
                            <Slider />
                        </div>
                        <div>
                            <PricingPlan />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home;
