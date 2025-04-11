import React, { useState } from "react";
import { CircleMinus } from "lucide-react";
import { CirclePlus } from "lucide-react";
import { FAQs } from "@/constants/constants";

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section className="px-46 py-12 text-center max-[1000px]:p-8">
      <h2 className="mb-10 text-4xl font-bold">Frequently asked questions</h2>
      <div className="grid gap-5 grid-cols-[repeat(2,1fr)] max-sm:grid-cols-[1fr]">
        {FAQs.map((faq, index) => (
          <div key={index} className={`overflow-hidden py-0 rounded-3xl bg-neutral-100 ${openIndex !== index ? "h-[75px]" : ""}`}>
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="flex justify-between w-full px-5 py-0 items-center h-[75px] transition-all duration-300 outline-none"
              aria-label={`FAQ question ${index + 1}`}
            >
              <p className="text-lg font-bold">{faq.title}</p>
              {openIndex === index ? <CircleMinus color="white" fill="#8771EF" className="w-8 h-8"/> : <CirclePlus color="white" fill="#8771EF" className="w-8 h-8" />}
            </button>
            <div
              className={`px-5 transition-all duration-300 ease-in-out ${openIndex === index
                  ? "max-h-[500px] opacity-100 py-4 "
                  : "max-h-0 opacity-0"
                }`}
            >
              <p className="text-base text-left text-gray-600">{faq.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
