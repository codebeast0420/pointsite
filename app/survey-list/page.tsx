"use client";
import React from "react";
import Header from "@/components/layout/Header";
import { RecommendedSection } from "./components/RecommendedSection";
import { AllSurveysSection } from "./components/AllSurveysSection";
import Footer from "@/components/layout/Footer";
import { Layout } from "@/components/layout/Layout";

const InputDesign: React.FC = () => {
	return (
		<Layout>
			<div className="px-12 max-md:px-2">
				<Header />
				<div className="px-16 py-0 max-md:px-5 max-md:py-0">
					<RecommendedSection />
					<AllSurveysSection />
				</div>
			</div>
			<Footer />
		</Layout>
	);
};

export default InputDesign;
