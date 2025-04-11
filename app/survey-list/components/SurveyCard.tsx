import React from "react";
import Link from "next/link";

interface SurveyCardProps {
	imageUrl: string;
	title: string;
	points: number;
	isNew?: boolean;
}

export const SurveyCard: React.FC<SurveyCardProps> = ({
	imageUrl,
	title,
	points,
	isNew,
}) => {
	return (
		<Link href={`/selected-survey`}>
			<article className="relative p-5 cursor-pointer rounded-3xl bg-neutral-100">
				{isNew && (
					<div
						className="absolute -top-2 left-[40%] px-2 py-0.5 text-xs font-bold text-white bg-red-600 rounded-md"
						aria-label="New survey"
					>
						NEW
					</div>
				)}
				<img
					src={imageUrl}
					alt=""
					className="mb-5 w-full rounded-3xl h-[175px] object-cover"
				/>
				<h3 className="mb-5 text-sm font-bold text-black line-clamp-2">
					{title}
				</h3>
				<p className="text-2xl font-extrabold text-violet-500">
					{points.toLocaleString()} P
				</p>
			</article>
		</Link>
	);
};
