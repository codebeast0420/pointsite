import React from "react";

interface EarnedHistoryCardProps {
	index: number;
	item: {
		imageUrl: string;
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
		>
			<img
				src={item.imageUrl}
				alt="Survey icon"
				className="mr-8 rounded-xl h-[70px] w-[70px]"
			/>
			<div className="flex-1">
				<h4 className="mb-1.5 text-base font-medium text-black">
					{item.title}
				</h4>
				<p className="text-base font-bold text-black">
					{item.points} P
				</p>
			</div>
			<time className="text-base font-medium text-black">
				{item.date}
			</time>
		</article>
	);
};

