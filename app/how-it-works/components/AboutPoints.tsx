"use client";

import * as React from "react";
import { CategoryTitle } from "@/app/components/comps/CategoryTitle";
export const AboutPoints: React.FC = () => {
	return (
		<section className="mt-14 max-w-full max-md:mt-10">
			<CategoryTitle title="About points" />
			<div className="flex ml-10 w-[826px] max-md:w-full max-md:ml-0 gap-5 max-md:mt-2 mt-15 max-md:flex-col">
				<div className="w-[33%] max-md:w-full">
					<div className="flex grow gap-3.5 font-bold text-center text-white max-md:mt-5">
						<div className="px-8 py-8 text-3xl whitespace-nowrap bg-gradient-to-r from-[#C093FF] via-[#FFA9EC] to-[#FFC65B] h-[106px] rounded-[731px] w-[106px] max-md:px-5">
							1<span className="text-[26px] text-white">P</span>
						</div>
						<img
							src="https://cdn.builder.io/api/v1/image/assets/87b5d4114987481390e084a568fbb563/d37274d0aef740834d53fdb15b0c9c0b78ea70f6?placeholderIfAbsent=true"
							alt="Arrow"
							className="object-contain shrink-0 my-auto aspect-[2.14] w-[15px]"
						/>
						<div className="px-8 py-8 text-3xl whitespace-nowrap bg-stone-300 h-[106px] rounded-[731px] w-[106px] max-md:px-5">
							1円
						</div>
					</div>
				</div>
				<div className="ml-5 w-[67%] max-md:ml-0 max-md:w-full">
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
