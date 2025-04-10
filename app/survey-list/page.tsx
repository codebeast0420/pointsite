"use client";
import React from "react";
import Header from "../components/layout/Header";
import { RecommendedSection } from "./components/RecommendedSection";
import { AllSurveysSection } from "./components/AllSurveysSection";
import CTASection from "../components/main/CTASection";
import Footer from "../components/layout/Footer";

const InputDesign: React.FC = () => {
	return (
		<main className="px-12 mx-auto my-0 w-full bg-white max-w-[1600px] max-md:max-w-[991px] max-sm:max-w-screen-sm">
			<Header />
			<div className="px-16 py-0 max-md:px-5 max-md:py-0">
				<RecommendedSection />
				<AllSurveysSection />
				<CTASection />
			</div>
			<Footer />
		</main>
	);
};

export default InputDesign;
