import React from "react";

interface HeroItemProps {
	value: string;
	icon: React.ReactNode;
	className?: string;
	reverse?: boolean;
}

const HeroItem: React.FC<HeroItemProps> = ({ value, icon, className, reverse }) => {
	return (
		<div className={`flex justify-between items-center max-sm:p-1 p-2.5 max-sm:mb-1 mb-2.5 rounded-xl bg-neutral-100 ${reverse ? "max-sm:gap-x-2 gap-x-25 gap-x-2.5" : "gap-2.5"}`}>
			{reverse ? (
				<>
					<p className={`${className} max-sm:text-xs`}>{value}</p>
					{icon}
				</>
			) : (
				<>
					{icon}
					<p className={`text-base max-sm:text-xs font-extrabold ${className}`}>{value}</p>
				</>
			)}
		</div>
	);
};

export default HeroItem;
