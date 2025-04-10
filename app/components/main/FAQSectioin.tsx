import React from "react";
import Plus from "../svg/Plus";

const FAQSection: React.FC = () => {
  return (
    <section className="px-36 py-12 text-center max-md:p-8">
      <h2 className="mb-10 text-4xl font-bold">Frequently asked questions</h2>
      <div className="grid gap-5 grid-cols-[repeat(2,1fr)] max-sm:grid-cols-[1fr]">
        {[...Array(6)].map((_, index) => (
          <button
            key={index}
            className="flex justify-end items-center px-5 py-0 rounded-3xl bg-neutral-100 h-[75px]"
            aria-label={`FAQ question ${index + 1}`}
          >
            <Plus />
          </button>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
