import React from "react";
import { RedemptionOptions } from "@/constants/constants";
import Image from "next/image";
const RedemptionSection: React.FC = () => {

  return (
    <section className="px-0 py-12 text-center" aria-label="Redemption section">
      <h2 className="mb-8 text-xl font-bold" aria-label="Redemption title">
        Redeem Points for Cash, Gifts &amp; More
      </h2>
      <div className="flex gap-10 justify-center max-md:flex-wrap max-sm:gap-5" aria-label="Redemption options">
        {RedemptionOptions.map((option, index) => (
          <article
            key={index}
            className="flex flex-col gap-2.5 justify-center items-center rounded-3xl bg-neutral-100 h-[122px] w-[156px] max-md:w-[calc(33%_-_26px)] max-sm:w-full"
            aria-label="Redemption option"
          >
            <Image
              src={option.icon}
              alt={option.title}
              className="h-[71px] w-[71px]"
              aria-label="Redemption option icon"
            />
            <h3 className="text-sm font-bold" aria-label="Redemption option title">{option.title}</h3>
          </article>
        ))}
      </div>
    </section>
  );
};

export default RedemptionSection;
