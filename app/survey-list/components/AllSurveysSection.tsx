"use client";
import React from "react";
import { SurveyCard } from "./SurveyCard";
import { GridIcon, DownArrowIcon } from "./Icons";

export const AllSurveysSection: React.FC = () => {
	return (
		<section>
			<div className="flex gap-2 items-center mb-8">
				<GridIcon />
				<h2 className="text-2xl font-bold text-violet-500">All Surveys</h2>
				<div className="flex gap-1.5 items-center ml-auto">
					<label
						htmlFor="sort-select"
						className="text-base font-medium text-black"
					>
						Sort by
					</label>
					<button
						id="sort-select"
						className="flex cursor-pointer gap-1.5 items-center px-4 py-3.5 bg-white rounded-xl border border-solid border-zinc-300 border-opacity-90"
						aria-haspopup="listbox"
					>
						<span>Date added</span>
						<DownArrowIcon />
					</button>
				</div>
			</div>
			<div className="grid gap-5 mb-10 grid-cols-[repeat(5,1fr)] max-[1200px]:grid-cols-[repeat(4,1fr)] max-md:grid-cols-[repeat(3,1fr)] max-sm:grid-cols-[repeat(1,1fr)]">
				{[...Array(10)].map((_, index) => (
					<SurveyCard
						key={`all-surveys-${index}`}
						imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/cea9d28fc9309c94bd6ca3096902462181ae91a5"
						title="Survey title will go here as you can see the ma..."
						points={1000}
						isNew={index < 4}
					/>
				))}
			</div>
			<div className="flex justify-center mx-0 my-10">
				<button className="flex gap-2 items-center cursor-pointer px-8 py-5 text-base font-bold bg-neutral-100 rounded-[100px]">
					<span>Show more</span>
					<DownArrowIcon />
				</button>
			</div>
		</section>
	);
};
