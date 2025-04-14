"use client";
import React, { useState } from "react";
import { SurveyCard } from "./SurveyCard";
import { ChevronDown, LayoutGrid } from "lucide-react";

export const AllSurveysSection: React.FC = () => {
	const [sortBy, setSortBy] = useState("Date added");
	const [sortDirection, setSortDirection] = useState("asc");


	return (
		<section className="mt-40" aria-label="All surveys section">
			<div className="flex gap-2 items-center mb-8" aria-label="All surveys section title">
			<LayoutGrid color="#8771EF" />
				<h2 className="text-2xl font-bold text-violet-500">All Surveys</h2>
				<div className="flex gap-1.5 items-center ml-auto">
					<label
						htmlFor="sort-select"
						className="text-base font-medium text-black"
					>
						Sort by
					</label>
					<div className="relative">
						<select
							id="sort-select"
							value={sortBy}
							aria-label="Sort by select"
							onChange={(e) => setSortBy(e.target.value)}
							className="px-4 py-2 relative rounded-lg border border-zinc-300 appearance-none bg-white cursor-pointer w-[140px]"
						>
							<option value="date_added">Date added</option>
							<option value="reward">Reward amount</option>
							<option value="estimated_time">Estimated time</option>
							<option value="popularity">Popularity</option>
						</select>
						<ChevronDown className="absolute pointer-events-none right-2 top-1/2 -translate-y-1/2" />
					</div>
				</div>
			</div>
			<div className="grid gap-5 mb-10 grid-cols-[repeat(5,1fr)] max-[1200px]:grid-cols-[repeat(4,1fr)] max-md:grid-cols-[repeat(3,1fr)] max-sm:grid-cols-[repeat(1,1fr)]" aria-label="All surveys cards">
				{[...Array(10)].map((_, index) => (
					<SurveyCard
						key={`all-surveys-${index}`}
						title="Survey title will go here as you can see the ma..."
						points={1000}
						isNew={index < 4}
					/>
				))}
			</div>
			<div className="flex justify-center mx-0 my-10" aria-label="Show more button">
				<button className="flex gap-2 items-center cursor-pointer px-8 py-5 text-base font-bold bg-neutral-100 rounded-[100px]" aria-label="Show more button">
					<span>Show more</span>
					<ChevronDown />
				</button>
			</div>
		</section>
	);
};
