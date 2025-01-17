"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import AuthGuard from '../../../../authGuide/authgurd';
// Components
import Header from '../../../_components/header/index';
import ToggleButton from '../../../_components/toggleButton';
import Slider from '../../../_components/slider';
import PricingPlan from '../../../_components/pricing-plans';
import Button from '../../../_components/button';
import Faq from '../../../_components/faq';
import Footer from '../../../_components/footer';
import Loader from '../../../_components/loader';
import { useRouter } from 'next/navigation';

const Home = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Function to check if token is present
  const checkToken = () => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
    }
  };

  // Check token on initial load
  useEffect(() => {
    checkToken();
  }, [router]);

  // Listen for changes to localStorage (e.g. token removal)
  useEffect(() => {
    const handleStorageChange = () => {
      checkToken();
    };

    // Listen to localStorage changes
    window.addEventListener('storage', handleStorageChange);

    // Clean up the event listener
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <Header />
      <div className='pt-[89px]'>
        <section className='add-shape'>
          <section className='container mx-auto lg:px-0 px-5'>
            <div className="flex flex-col items-center justify-center mt-[40px]">
              <div className="flex items-center justify-center mt-[-10px] px-4">
                <span className="relative">
                  <span className='tracking-wider font-medium pricing-title'>PRICING</span>
                </span>
              </div>
              <h1 className='text-center text-[32px] sm:text-[16px] md:text-[40px] text-[#131313] font-bold capitalize leading-[50px] mt-[26px]'>
                Competitive rates designed for <span className='text-primary'>agencies</span> <br />
                <span className='text-primary'>and accounts holders</span>
              </h1>
              <p className='text-[#131313] sm:text-[12px] md:text-[14px] leading-[16px] mt-[26px]'>
                Manage newsletter publishing, member subscriptions, and payouts seamlessly—all in one platform
              </p>
              <div className='mt-8'>
                <ToggleButton />
              </div>
              <button 
                className='underline text-[18px] capitalize text-primary mt-3'>
                get 3 days free
              </button>
            </div>
            <section className='mt-[55px]'>
              <Slider />
            </section>
            <section className='mt-[59px]'>
              <PricingPlan />
            </section>
          </section>

          <section className='add-bg-image'>
            <div className='container mx-auto mt-[136px] lg:px-0 px-5'>
              <h1 className='text-[40px] text-center leading-[48px] capitalize font-bold'>
                Warmio provides the ultimate solution to <br />boost your message deliverability
              </h1>
              <p className='text-center mt-6 text-large-font'>
                Activate all features free today—no credit or debit card needed
              </p>
              <div className="flex lg:flex-row flex-col gap-[10px] justify-center items-center mt-[27px]">
                <Button text='Get 7-day trial' className="h-[56px] min-w-[203px] bg-primary text-white text-[18px] font-bold px-10 " />
                <button className='h-[56px] bg-white rounded-full gap-3 flex items-center text-secondary text-[18px] font-bold pl-2 pr-5'>
                  <Image src="/icon-play.png" width={40} height={40} alt="Play icon" />Request Demo
                </button>
              </div>
            </div>
          </section>

          <section className='faq-section container mx-auto lg:px-0 px-5'>
            <Faq />
          </section>

          <section className='container mx-auto lg:px-0 px-5'>
            <div className="bg-black text-white mb-10 relative bg-dotted overflow-hidden rounded-xl">
              <div className="relative flex-col z-10 md:gap-2 sm:gap-2 lg:flex-row lg:justify-between flex justify-center items-center max-w-[53rem] mx-auto h-full px-4">
                <h2 className="text-[32px] font-bold">Subscribe Newsletters</h2>
                <div className="flex items-center bg-white rounded-full overflow-hidden px-2 py-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="px-4 py-2 text-black outline-none border-none"
                  />
                  <button className="bg-primary lg:text-[18px] text-base-font rounded-full h-[56px] text-white px-6 font-semibold">
                    Subscribe Now
                  </button>
                </div>
              </div>
            </div>
          </section>
          
          <section>
            <Footer />
          </section>
        </section>
      </div>
    </div>
  );
};

export default AuthGuard(Home);
