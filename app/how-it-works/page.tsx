"use client";

import * as React from "react";
import Image from "next/image";
import Header from "../components/layout/Header";
import { StepsSection } from "./components/StepsSection";
import { AboutPoints } from "./components/AboutPoints";
import Footer from "../components/layout/Footer";
import CTASection from "../components/main/CTASection";
import PStack from "../components/svg/PStack";
import Man from "@/app/assets/images/man.png"
import Step1Img from "@/app/assets/images/Group 1000004591.png";
import Step2Img from "@/app/assets/images/Group 1000004588.png";
import Step3Img from "@/app/assets/images/Group 1000004587.png";
import Step4Img from "@/app/assets/images/Group 1000004592.png";
import Step5Img from "@/app/assets/images/Group 1000004593.png";
import Step6Img from "@/app/assets/images/Group 1000004596.png";
import { RedemptionSteps } from "./components/RedemptionSteps";
const howToUseSteps = [
	{
		number: 1,
		title: "Sign in & install extension",
		description:
			"Sign up in seconds and add our Chrome extension to get started.",
		image: Step1Img
	},
	{
		number: 2,
		title: "Fill your details",
		description: "Input your details so the AI can auto-fill surveys accurately.",
		image: Step2Img
	},
	{
		number: 3,
		title: "Turn on the Raku Earn AI",
		description: "Open the extension within survey list page and activate the AI.",
		image: Step3Img
	},
	{
		number: 4,
		title: "Start earning points ",
		description: "Sit back and let AI automatically earn you points.",
		image: Step4Img
	},
	{
		number: 5,
		title: "Track your progress",
		description: "Check the AI performance from your dashboard.",
		image: Step5Img
	},
	{
		number: 6,
		title: "Exchange your points",
		description: "Redeem your points for real cash or digital rewards anytime.",
		image: Step6Img
	},
];


const HowItWorks: React.FC = () => {
	return (
		<main className="px-12 mx-auto my-0 w-full bg-white max-w-[1600px] max-md:max-w-[991px] max-sm:max-w-screen-sm">
			<Header />

			<section className="flex flex-col justify-center mx-2 items-center px-16 py-12 mt-16 w-full bg-neutral-100 rounded-[40px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
				<div className="flex max-w-full items-center justify-around w-full">
					<PStack className="mt-20" />
					<div className="flex items-center justify-center max-md:flex-col">
						<img
							src="https://cdn.builder.io/api/v1/image/assets/87b5d4114987481390e084a568fbb563/3d6b8111139cc90148e4bd67ab6b622c8787b2bb?placeholderIfAbsent=true"
							alt="How it works illustration"
							className="object-contain grow w-[400px] aspect-[2.96] max-md:max-w-full"
						/>
						<div className="ml-5 max-md:ml-0 max-md:text-center max-md:w-full">
							<h1 className="text-4xl font-bold text-black pt-0">
								How it works
							</h1>
						</div>
					</div>
					<Image src={Man} className="max-md:w-[100px] max-md:h-[80px]" alt="Man" width={200} height={80} />
				</div>
			</section>

			<StepsSection title="How to use Raku Earn" steps={howToUseSteps} />

			<RedemptionSteps />

			<AboutPoints />

			<CTASection />

			<Footer />
		</main>
	);
};

export default HowItWorks;
