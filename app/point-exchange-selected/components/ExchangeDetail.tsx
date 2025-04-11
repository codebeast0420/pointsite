import React from "react";
import { Info } from "lucide-react";
import { TableRow } from "./TableRow";
import { ExchangeDetails as ExchangeDetailsData } from "@/constants/constants";

export const ExchangeDetails: React.FC = () => {
	return (
		<section className="mt-16">
			<h2 className="flex gap-2 items-center mb-8 text-2xl font-bold text-violet-500">
				<Info color="#8771EF" />
				Exchange details
			</h2>
			<div className="bg-white rounded-3xl border border-solid border-zinc-300 border-opacity-90">
				<dl>
					{ExchangeDetailsData.map((detail) => (
						<TableRow key={detail.title} title={detail.title} content={detail.content} className={detail.className} rounded={detail.rounded} />
					))}
				</dl>
			</div>
		</section>
	);
};
