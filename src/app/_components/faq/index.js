import { useState } from "react";
import Image from 'next/image';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqData = [
        {
            question: "What is email deliverability, and why does it matter?",
            answer:
                "Email deliverability is the ability to reach the inbox without being flagged as spam. It's vital for businesses to ensure emails reach their audience, boosting engagement and conversions.",
        },
        {
            question: "How does warmio enhance email deliverability?",
            answer: "Warmio uses advanced techniques to improve email deliverability.",
        },
        {
            question: "How soon will your first blog post be delivered?",
            answer: "Your first blog post will be delivered within 3-5 business days.",
        },
        {
            question: "Can warmio track email deliverability performance?",
            answer: "Yes, warmio provides detailed analytics to track performance.",
        },
        {
            question: "How does warmio’s AI boost email deliverability?",
            answer: "Warmio's AI optimizes email timing and content for better results.",
        },
        {
            question: "How does warmio’s AI boost email deliverability?",
            answer: "Warmio's AI optimizes email timing and content for better results.",
        },
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="mt-[118px]">
            <h1 className="text-[40px] font-bold text-center capitalize">FAQs about pricing</h1>
            <div className=" pb-[115px] pt-[88px] flex flex-wrap">
                {faqData.map((item, index) => (
                    <div
                        key={index}
                        className="w-full md:w-1/2 p-4 box-border"
                    >
                        <div className="rounded-lg p-6 shadow-[0px_24.56px_32.74px_-14.73px_#95959540]">
                            {/* FAQ Question */}
                            <button
                                className="flex items-center gap-4 w-full text-left"
                                onClick={() => toggleFAQ(index)}
                            >
                                <span className="text-gray-600 ">
                                    {activeIndex === index ? <Image src="/icon-minus.png" width={22} height={7} alt="no-con" /> : <Image src="/icon-plus.png" height={18} width={18} alt="no-con" />}
                                </span>
                                <span className="lg:text-lg text-md font-semibold text-secondary">
                                    {item.question}
                                </span>

                            </button>

                            {/* Collapsible Answer */}
                            <div
                                className={`overflow-hidden transition-all duration-300 ${activeIndex === index ? "max-h-screen mt-2" : "max-h-0"
                                    }`}
                            >
                                <p className="text-gray-600 text-large-font">
                                    {activeIndex === index && item.answer}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
