import * as React from "react";
import { ExchangeHistoryItem } from "@/app/constants/constants";

interface ExchangeHistoryCardProps {
	index: number;
	item: ExchangeHistoryItem;
}

export const ExchangeHistoryCard: React.FC<ExchangeHistoryCardProps> = ({
	index,
	item
}) => {
	const statusColors = {
		pending: "text-amber-300",
		complete: "text-green-600",
		declined: "text-red-600",
	};

	return (
		<>
			<div className="flex flex-wrap gap-5 justify-between w-full text-base max-md:max-w-full">
				<div className="flex gap-5">
					<img
						src={item.image}
						alt={item.title}
						className="object-contain shrink-0 aspect-square w-[70px]"
					/>
					<div className="flex flex-col my-auto text-black">
						<div className="font-medium">{item.title}</div>
						<div className="self-start mt-1.5 font-bold">{item.amount}</div>
					</div>
					<div
						className={`self-start mt-3.5 font-medium capitalize ${statusColors[item.status]
							}`}
					>
						{item.status}
					</div>
				</div>
				<div className="self-start mt-3.5 font-medium text-right text-black">
					{item.date}
				</div>
			</div>
			<div className="shrink-0 h-px border border-solid border-zinc-300 border-opacity-90 max-md:max-w-full" />
		</>
	);
};
