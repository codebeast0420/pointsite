"use client";
import React from "react";
import Header from "@/components/layout/Header";
import { SurveyDetails } from "./components/SurveyDetails";
import { SuggestedSurveys } from "./components/SuggestedSurveys";
import Footer from "@/components/layout/Footer";
import { Layout } from "@/components/layout/Layout";
import { BackButton } from "../point-exchange-selected/components/BackButton";

const SelectedSurvey: React.FC = () => {
	return (
		<Layout>
			<div className="px-12 max-md:px-2">
				<Header />
				<div className="flex flex-col items-start px-16 w-full max-md:px-5 mb-20 max-md:max-w-full">
					<BackButton className="ml-10 max-md:ml-0"/>
					<SurveyDetails />
					<SuggestedSurveys />
				</div>
			</div>
			<Footer />
		</Layout>
	);
};

export default SelectedSurvey;
