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
	const [selectedDate, setSelectedDate] = useState('Last 7 days');

	return (
		<section className="mb-10" aria-label="Point passbook">
			<h2 className="mb-5 text-2xl font-bold text-black" aria-label="Point passbook title">Point passbook</h2>
			<div className="flex mb-8 rounded-xl bg-neutral-100 max-sm:flex-col" aria-label="Point passbook tabs">
				<SelectorButton title="Point earned history" selected={selectedTab === 'earned'} onClick={() => setSelectedTab('earned')} />
				<SelectorButton title="Point exchange history" selected={selectedTab === 'exchange'} onClick={() => setSelectedTab('exchange')} />
			</div>
			<div className="p-9 rounded-xl bg-neutral-100" aria-label="Point passbook results">
				<div className="flex max-md:flex-col max-md:items-start max-md:gap-5 justify-between items-center mb-5" aria-label="Point passbook results filters">
					<h3 className="text-lg font-semibold text-black" aria-label="Point passbook results title">Results (23)</h3>
					<div className="relative" aria-label="Point passbook results date selector">
						<Calendar className="z-10 mt-[-1px] pointer-events-none absolute left-2 top-1/2 -translate-y-1/2" width={20} height={20} />
						<select
							id="selectedDate"
							value={selectedDate}
							onChange={(e) => setSelectedDate(e.target.value)}
							className="px-9 py-2 relative rounded-lg border border-zinc-300 appearance-none bg-white cursor-pointer w-[180px]"
							aria-label="Point passbook results date selector"
						>
							<option value="Last 7 days">Last 7 days</option>
							<option value="Last 30 days">Last 30 days</option>
							<option value="Last 90 days">Last 90 days</option>
						</select>
						<ChevronDown className="absolute pointer-events-none right-2 top-1/2 -translate-y-1/2"/>
					</div>
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
