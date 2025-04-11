"use client";
import React, { useState } from "react";
import { Calendar, ChevronDown } from "lucide-react";
import { SelectorButton } from "./SelectorButton";
import { EarnedHistoryCard } from "./EarnedHistoryCard";
import { HistoryItems } from "@/constants/constants";
import { ExchangeHistoryCard } from "./ExchangeHistoryCard";
import { ExchangeHistoryItems } from "@/constants/constants";

export const PointPassbook: React.FC = () => {
	const [selectedTab, setSelectedTab] = useState('earned');

	return (
		<section className="mb-10">
			<h2 className="mb-5 text-2xl font-bold text-black">Point passbook</h2>
			<div className="flex mb-8 rounded-xl bg-neutral-100 max-sm:flex-col">
				<SelectorButton title="Point earned history" selected={selectedTab === 'earned'} onClick={() => setSelectedTab('earned')} />
				<SelectorButton title="Point exchange history" selected={selectedTab === 'exchange'} onClick={() => setSelectedTab('exchange')} />
			</div>
			<div className="p-9 rounded-xl bg-neutral-100">
				<div className="flex justify-between items-center mb-5">
					<h3 className="text-lg font-semibold text-black">Results (23)</h3>
					<button className="flex gap-2.5 items-center px-5 py-3.5 bg-white rounded-xl border border-solid border-zinc-300 border-opacity-90">
						<Calendar color="black" />
						<span className="text-base font-medium text-black">
							Last 7 days
						</span>
						<ChevronDown />
					</button>
				</div>
				<div className="flex flex-col gap-5">
					{selectedTab === 'earned' ? (
						HistoryItems.map((item, index) => (
							<EarnedHistoryCard key={index} index={index} item={item} />
						))
					) : (
						ExchangeHistoryItems.map((item, index) => (
							<ExchangeHistoryCard key={index} index={index} item={item} />
						))
					)}
				</div>
			</div>
		</section>
	);
};
