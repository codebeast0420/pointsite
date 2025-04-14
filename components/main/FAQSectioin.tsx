import React, { useState, useEffect } from "react";
import { CircleMinus } from "lucide-react";
import { CirclePlus } from "lucide-react";
import { FAQs } from "@/constants/constants";

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  useEffect(() => {
    console.log(openIndex);
  }, [openIndex]);

  return (
    <section className="px-46 py-12 text-center max-[1000px]:p-8" aria-label="FAQ section">
      <h2 className="mb-10 text-4xl font-bold" aria-label="FAQ title">Frequently asked questions</h2>
      <div className="flex gap-10 max-md:flex-col max-md:gap-5 max-md:w-full" aria-label="FAQ content">
        <div className="flex flex-col gap-5 w-1/2 max-md:w-full" aria-label="FAQ content left">
          {FAQs.filter((faq, index) => index % 2 === 0).map((faq, index) => (
            <div key={faq.order} className={`overflow-hidden py-0 rounded-3xl bg-neutral-100 ${openIndex !== faq.order ? "h-[75px]" : ""}`}>
              <button
                onClick={() => {
                  setOpenIndex(openIndex === faq.order ? null : faq.order);
                }}
                className="flex justify-between w-full px-5 py-0 items-center h-[75px] transition-all duration-300 outline-none"
                aria-label={`FAQ question ${faq.order + 1}`}
              >
                <p className="text-lg font-bold">{faq.title}</p>
                {openIndex === faq.order ? <CircleMinus color="white" fill="#8771EF" className="w-8 h-8" /> : <CirclePlus color="white" fill="#8771EF" className="w-8 h-8" />}
              </button>
              <div
                className={`px-5 transition-all duration-300 ease-in-out ${openIndex === faq.order
                  ? "max-h-[500px] opacity-100 pb-4 "
                  : "max-h-0 opacity-0"
                  }`}
              >
                <p className="text-base text-left text-gray-600" aria-label="FAQ description">{faq.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-5 w-1/2 max-md:w-full" aria-label="FAQ content right">
          {FAQs.filter((faq, index) => index % 2 !== 0).map((faq, index) => (
            <div key={index} className={`overflow-hidden py-0 rounded-3xl bg-neutral-100 ${openIndex !== faq.order ? "h-[75px]" : ""}`}>
              <button
                onClick={() => {
                  setOpenIndex(openIndex === faq.order ? null : faq.order);;
                }}
                className="flex justify-between w-full px-5 py-0 items-center h-[75px] transition-all duration-300 outline-none"
                aria-label={`FAQ question ${faq.order + 1}`}
              >
                <p className="text-lg font-bold">{faq.title}</p>
                {openIndex === faq.order ? <CircleMinus color="white" fill="#8771EF" className="w-8 h-8" /> : <CirclePlus color="white" fill="#8771EF" className="w-8 h-8" />}
              </button>
              <div
                className={`px-5 transition-all duration-300 ease-in-out ${openIndex === faq.order
                  ? "max-h-[500px] opacity-100 pb-4 "
                  : "max-h-0 opacity-0"
                  }`}
              >
                <p className="text-base text-left text-gray-600">{faq.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
