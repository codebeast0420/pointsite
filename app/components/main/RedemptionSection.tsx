import React from "react";

interface RedemptionOption {
  icon: string;
  title: string;
}

const RedemptionSection: React.FC = () => {
  const options: RedemptionOption[] = [
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a78f319276fc58a8b12544a443d0eee2d8512a89", title: "Bank Transfer" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e9dfd132c73fa272965be834ab54b75830d886ef", title: "Amazon" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e6a28d88640d3adade107f7d116324ff65f0f679", title: "Apple Store" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f0570a2fecc2ea7487a08aa6620088fd00b0c6f4", title: "Google Play" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a22db23b7f6de0aee8c7b5f2c141537631c22889", title: "PayPay" },
  ];

  return (
    <section className="px-0 py-12 text-center">
      <h2 className="mb-8 text-xl font-bold">
        Redeem Points for Cash, Gifts &amp; More
      </h2>
      <div className="flex gap-10 justify-center max-md:flex-wrap max-sm:gap-5">
        {options.map((option, index) => (
          <article
            key={index}
            className="flex flex-col gap-2.5 justify-center items-center rounded-3xl bg-neutral-100 h-[122px] w-[156px] max-md:w-[calc(33%_-_26px)] max-sm:w-full"
          >
            <img
              src={option.icon}
              alt={option.title}
              className="h-[71px] w-[71px]"
            />
            <h3 className="text-sm font-bold">{option.title}</h3>
          </article>
        ))}
      </div>
    </section>
  );
};

export default RedemptionSection;
