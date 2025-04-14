"use client";

import * as React from "react";
import Image from "next/image";
import Header from "@/components/layout/Header";
import { StepsSection } from "./components/StepsSection";
import { AboutPoints } from "./components/AboutPoints";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/main/CTASection";
import PStack from "@/components/svg/PStack";
import Man from "@/assets/images/man.png"
import { howToUseSteps } from "@/constants/constants";
import { RedemptionSteps } from "./components/RedemptionSteps";
import { Layout } from "@/components/layout/Layout";
import LogoB from "@/assets/images/logo1.png";

const HowItWorks: React.FC = () => {
	return (
		<Layout>
			<div className="px-12 max-md:px-2 w-full max-w-[1440px] max-md:max-w-[991px]">
				<Header />
				<div className="px-8 max-md:px-2">
					<section className="flex flex-col justify-center mx-2 items-center px-16 py-12 mt-8 w-full bg-neutral-100 rounded-[40px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
						<div className="flex max-w-full items-center justify-around w-full">
							<PStack className="mt-20" />
							<div className="flex items-center justify-center max-md:flex-col">
								<img
									src={LogoB.src}
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
				</div>
			</div>
			<Footer />
		</Layout>
	);
};

export default HowItWorks;
