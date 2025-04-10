import * as React from "react";

export const CategoryTitle: React.FC<{ title: string }> = ({ title }) => {
	return (
		<div className="flex gap-5 px-5 py-3 text-2xl font-bold text-violet-500 bg-violet-100 rounded-[40px]">
			<div className="flex shrink-0 my-auto bg-white rounded-full h-[22px] w-[22px]" />
			<h2
				id="redemption-title"
				className="flex-auto w-[1234px] max-md:max-w-full"
			>
				{title}
			</h2>
		</div>
	);
};


