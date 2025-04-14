import * as React from "react";

export const CategoryTitle: React.FC<{ title: string }> = ({ title }) => {
	return (
		<div className="flex gap-5 px-5 py-3 text-2xl font-bold text-[#8771EF] bg-violet-100 rounded-[40px]" aria-label="Category title">
			<div className="flex shrink-0 my-auto bg-white rounded-full h-[22px] w-[22px]" aria-label="Category title icon" />
			<h2
				id="redemption-title"
				className="flex-auto w-[1234px] max-md:max-w-full"
				aria-label="Category title text"
			>
				{title}
			</h2>
		</div>
	);
};


