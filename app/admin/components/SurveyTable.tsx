"use client";
import React from "react";
import Link from "next/link";

interface Survey {
	title: string;
	points: number;
	date: string;
}

export function SurveyTable({ setIsSurveyDetailOpen }: { setIsSurveyDetailOpen: (isOpen: boolean) => void }) {
	// Example data - replace with your actual data source
	const surveys: Survey[] = [
		{ title: "user@example.com", points: 1000, date: "2025-04-09 12:00" },
		{ title: "user@example.com", points: 3000, date: "2025-04-09 12:00" },
		{ title: "user@example.com", points: 1000, date: "2025-04-09 12:00" },
		// ... more users
	];

	return (
		<div className="ml-5 w-[72%] max-md:ml-0 max-md:w-full mt-30 overflow-x-scroll" aria-label="Survey table section">
			<table className="w-full border-collapse" aria-label="Survey table">
				<thead>
					<tr className="border-b border-black" aria-label="Survey table header">
						<th className="py-4 px-6 text-left font-semibold" aria-label="Survey table header column">User</th>
						<th className="py-4 px-6 text-right font-semibold" aria-label="Survey table header column">Point Amount</th>
						<th className="py-4 px-6 text-center font-semibold" aria-label="Survey table header column">Posted</th>
						<th className="py-4 px-6 text-right font-semibold" aria-label="Survey table header column">Actions</th>
					</tr>
				</thead>
				<tbody>
					{surveys.map((survey, index) => (
						<tr
							key={index}
							className={`border-b border-gray-100 cursor-pointer hover:bg-gray-50`}
							onClick={() => setIsSurveyDetailOpen(true)}
						>
							<td className={`px-6 text-left ${index === 0 ? "pt-4 pb-2" : "py-2 "}`} aria-label="Survey table data">
								{survey.title}
							</td>
							<td className={`py-2 px-6 text-right ${index === 0 ? "pt-4 pb-2" : "py-2 "}`} aria-label="Survey table data">
								{survey.points.toLocaleString()} P
							</td>
							<td className={`py-2 px-6 text-center ${index === 0 ? "pt-4 pb-2" : "py-2 "}`} aria-label="Survey table data">
								{survey.date}
							</td>
							<td className={`py-2 px-6 text-right ${index === 0 ? "pt-4 pb-2" : "py-2 "}`} aria-label="Survey table data">
								<Link
									href={`/admin/`}
									className="font-medium"
								>
									View
								</Link>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}