"use client";
import React from "react";

export const AccountSummary: React.FC = () => {
	return (
		<section className="mb-10" aria-label="Account summary">
			<h1 className="mb-6 text-3xl font-bold text-black" aria-label="Account summary title">My account</h1>
			<div className="p-8 mb-8 text-center bg-neutral-100 rounded-[40px] max-sm:p-5" aria-label="Account summary points">
				<p className="mb-0.5 text-base font-bold text-black" aria-label="Account summary points text">
					Your current points:
				</p>
				<span className="text-6xl font-extrabold max-sm:text-5xl bg-gradient-to-r from-[#c093ff] via-[#ffa9ec] to-[#FDB073] bg-clip-text text-transparent" aria-label="Account summary points amount">
					8,000 P
				</span>
			</div>
			<button
				className="mx-auto mt-0 mb-10 text-base font-bold text-violet-500 bg-violet-100 h-[61px] rounded-[40px] w-[231px] block"
				aria-label="Exchange points"
			>
				Exchange points
			</button>
		</section>
	);
};
