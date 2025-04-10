"use client";
import React from "react";
import Header from "./components/layout/Header";
import HeroSection from "./components/main/HeroSection";
import RedemptionSection from "./components/main/RedemptionSection";
import FeaturesSection from "./components/main/FeaturesSection";
import FAQSection from "./components/main/FAQSectioin";
import CTASection from "./components/main/CTASection";
import Footer from "./components/layout/Footer";

const LandingPage: React.FC = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
        rel="stylesheet"
      />
      <main className="px-12 mx-auto my-0 w-full bg-white max-w-[1600px] max-md:max-w-[991px] max-sm:max-w-screen-sm">
        <Header />
        <HeroSection />
        <RedemptionSection />
        <FeaturesSection />
        <FAQSection />
        <CTASection />
        <Footer />
      </main>
    </>
  );
};

export default LandingPage;
