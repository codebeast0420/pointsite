import * as React from "react";
import Image, { StaticImageData } from "next/image";

export const RedemptionCard: React.FC<{ number: number, title: string, description: string, image: StaticImageData }> = ({ number, title, description, image }) => {
	return (
		<div className="flex items-center gap-5 mt-8" aria-label="Redemption card">
			<Image src={image} alt={title} width={100} height={100} aria-label="Redemption card image" />
			<div>
				<div className="flex gap-2.5 max-md:mt-10" aria-label="Redemption card title">
					<div className="px-2 text-center text-white whitespace-nowrap bg-violet-500 rounded-full h-[26px] w-[26px]">
						{number}
					</div>
					<h3 className="my-auto text-black" aria-label="Redemption card title">
						{title}
					</h3>
				</div>
				<p className="mt-4 ml-9 text-sm font-semibold text-black max-md:max-w-full" aria-label="Redemption card description">
					{description}
				</p>
			</div>
		</div>
	);
};

