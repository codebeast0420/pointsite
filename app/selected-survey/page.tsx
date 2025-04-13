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
			<div className="px-12 max-md:px-2 w-full max-w-[1440px] max-md:max-w-[991px]">
				<Header />
				<div className="pl-26 max-md:pl-5 pr-10 max-md:pr-5 flex flex-col items-start w-full mb-20 max-md:max-w-full">
					<BackButton className="max-md:ml-0"/>
					<SurveyDetails />
					<SuggestedSurveys />
				</div>
			</div>
			<Footer />
		</Layout>
	);
};

export default SelectedSurvey;
