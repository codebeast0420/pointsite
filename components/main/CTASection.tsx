import React from "react";
import Button from "../layout/Button";

const CTASection: React.FC = ({ className }: { className?: string }) => {
  return (
    <section className={`p-16 mx-2 mb-6 text-center rounded-[40px] max-md:p-10 max-md:m-8 bg-gradient-to-r from-[#C093FF] via-[#FFA9EC] to-[#FFC65B] bg-[length:100%_400%] animate-[gradient_8s_ease-in-out_infinite] ${className}`} aria-label="CTA section">
      <h2 className="mb-5 text-5xl font-bold text-white max-sm:text-4xl" aria-label="CTA title">
        Start earning the smart way
      </h2>
      <p className="mb-8 text-lg font-semibold text-white" aria-label="CTA description">
        Get Raku Earn extension and let automation work for you.
      </p>
      <Button
        variant="white"
        className="mx-auto my-0 w-[153px] cursor-pointer"
        ariaLabel="Get started with Raku Earn"
      >
        Get Started
      </Button>
    </section>
  );
};

export default CTASection;
