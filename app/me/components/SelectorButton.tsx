import React from 'react';

interface SelectorButtonProps {
	title: string;
	selected: boolean;
	onClick: () => void;
}

export const SelectorButton: React.FC<SelectorButtonProps> = ({ title, selected, onClick }) => {
	return (
		<div className="w-1/2 max-md:w-full relative">
			<button className={`w-full cursor-pointer py-5 max-md:py-3 max-md:px-16 px-40 rounded-lg text-lg font-bold text-center relative ${selected ? 'bg-[#8A70FF] text-white' : 'text-black'}`} onClick={onClick}>
				{title}
			</button>
			{selected && (
				<div
					className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-[4px] w-4 h-4 bg-[#8A70FF] rotate-45"
					aria-hidden="true"
				/>
			)}
		</div>
	);
};

