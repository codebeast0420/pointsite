"use client";

import * as React from "react";
import { CategoryTitle } from "@/components/comps/CategoryTitle";
import PointRate from "@/assets/images/point_rate.png";
import Image from "next/image";

export const AboutPoints: React.FC = () => {
	return (
		<section className="mt-14 mb-60 max-w-full max-md:mt-10" aria-label="About points section">
			<CategoryTitle title="About points" />
			<div className="flex ml-10 w-[826px] max-md:w-full max-md:ml-0 gap-5 max-md:mt-2 mt-15 max-md:flex-col" aria-label="About points content">
				<div className="w-[33%] max-md:w-full">
					<div className="flex grow gap-3.5 font-bold text-center text-white max-md:mt-5">
						<Image src={PointRate} alt="Point Rate" className="w-full h-full" aria-label="Point Rate" />
					</div>
				</div>
				<div className="ml-5 w-[67%] max-md:ml-0 max-md:w-full" aria-label="About points content right">
					<div className="flex flex-col self-stretch my-auto text-black max-md:mt-10 max-md:max-w-full">
						<h2 className="self-start text-2xl font-bold">
							The exchange rate is 1 P = 1 yen
						</h2>
						<p className="mt-4 text-sm font-semibold max-md:max-w-full">
							Points can be exchanged from 300 yen (300 points).
							<br />
							Your points and redemption history are always visible in your
							dashboard, so you can track everything.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};
