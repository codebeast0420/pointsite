import React from "react";
import Image from "next/image";
import Survey from "@/assets/images/survey.svg"

interface EarnedHistoryCardProps {
	index: number;
	item: {
		title: string;
		points: number;
		date: string;
	};
}

export const EarnedHistoryCard: React.FC<EarnedHistoryCardProps> = ({ index, item }) => {
	return (
		<article
			key={index}
			className="flex cursor-pointer items-center px-0 py-5 border-b border-solid border-b-zinc-300 border-b-opacity-90 max-sm:flex-col max-sm:gap-4 max-sm:items-start"
			aria-label="Earned history card"
		>
			<Image
				src={Survey}
				alt="Survey icon"
				className="mr-8 rounded-xl h-[70px] w-[70px]"
			/>
			<div className="flex-1">
				<h4 className="mb-1.5 text-base font-medium text-black" aria-label="Earned history card title">
					{item.title}
				</h4>
				<p className="text-base font-bold text-black" aria-label="Earned history card points">
					{item.points} P
				</p>
			</div>
			<time className="text-base font-medium text-black" aria-label="Earned history card date">
				{item.date}
			</time>
		</article>
	);
};

