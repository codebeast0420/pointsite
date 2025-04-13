"use client";
import React from "react";
import Header from "@/components/layout/Header";
import HeroSection from "@/components/main/HeroSection";
import RedemptionSection from "@/components/main/RedemptionSection";
import FeaturesSection from "@/components/main/FeaturesSection";
import FAQSection from "@/components/main/FAQSectioin";
import CTASection from "@/components/main/CTASection";
import Footer from "@/components/layout/Footer";
import { Layout } from "@/components/layout/Layout";

const LandingPage: React.FC = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
        rel="stylesheet"
      />
      <Layout>
        <div className="px-12 max-md:px-2 w-full max-w-[1440px] max-md:max-w-[991px]">
          <Header />
          <HeroSection />
          <RedemptionSection />
          <FeaturesSection />
          <FAQSection />
          <CTASection />
        </div>
        <Footer />
      </Layout>
    </>
  );
};

export default LandingPage;
