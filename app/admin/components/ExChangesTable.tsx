"use client";
import React from "react";
import { Check, X, Minus } from "lucide-react";

interface User {
	email: string;
	amount: number;
	method: string;
	submitted: string;
	status: string;
}

export function ExchangesTable() {
	// Example data - replace with your actual data source
	const statusColor = {
		pending: "text-yellow-500",
		complete: "text-green-500",
		declined: "text-red-500",
	}

	const users: User[] = [
		{
			email: "user@example.com",
			amount: 500,
			method: "Amazon",
			submitted: "2025-04-09 12:00",
			status: "pending",
		},
		{
			email: "user@example.com",
			amount: 3000,
			method: "Paypay",
			submitted: "2025-04-09 11:30",
			status: "complete",
		},
		{
			email: "user@example.com",
			amount: 1000,
			method: "Google",
			submitted: "2025-04-09 11:30",
			status: "pending",
		},
		{
			email: "user@example.com",
			amount: 1000,
			method: "Google",
			submitted: "2025-04-09 11:30",
			status: "declined",
		},
		// ... more users
	];

	return (
		<div className="ml-5 w-[72%] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] max-md:ml-0 max-md:w-full mt-30 overflow-x-scroll" aria-label="Exchanges table Section">
			<table className="w-full border-collapse" aria-label="Exchanges table">
				<thead>
					<tr className="border-b border-black" aria-label="Exchanges table header">
						<th className="py-4 px-6 text-left font-semibold" aria-label="Exchanges table header column">User</th>
						<th className="py-4 px-6 text-right font-semibold" aria-label="Exchanges table header column">Amount</th>
						<th className="py-4 px-6 text-right font-semibold" aria-label="Exchanges table header column">Method</th>
						<th className="py-4 px-6 text-left font-semibold" aria-label="Exchanges table header column">Submitted</th>
						<th className="py-4 px-6 text-left font-semibold" aria-label="Exchanges table header column">Status</th>
						<th className="py-4 px-6 text-right font-semibold" aria-label="Exchanges table header column">Actions</th>
					</tr>
				</thead>
				<tbody>
					{users.map((user, index) => (
						<tr
							key={index}
							className={`border-b border-gray-100 hover:bg-gray-50`}
						>
							<td className={`px-6 text-left ${index === 0 ? "pt-4 pb-2" : "py-2 "}`} aria-label="Exchanges table data">
								{user.email}
							</td>
							<td className={`py-2 px-6 text-right ${index === 0 ? "pt-4 pb-2" : "py-2 "}`} aria-label="Exchanges table data">
								{user.amount} yen
							</td>
							<td className={`py-2 px-6 text-right ${index === 0 ? "pt-4 pb-2" : "py-2 "}`} aria-label="Exchanges table data">
								{user.method}
							</td>
							<td className={`py-2 px-6 text-left ${index === 0 ? "pt-4 pb-2" : "py-2 "}`} aria-label="Exchanges table data">
								{user.submitted}
							</td>
							<td className={`py-2 px-6 text-left ${index === 0 ? "pt-4 pb-2" : "py-2 "} ${statusColor[user.status as keyof typeof statusColor]}`} aria-label="Exchanges table data">
								{user.status}
							</td>
							<td className={`py-2 px-6 flex justify-center gap-2 ${index === 0 ? "pt-4 pb-2" : "py-2 "}`} aria-label="Exchanges table data">
								{user.status === "pending" ? (
									<>
										<Check className="cursor-pointer" />
										<X className="cursor-pointer" />
									</>
								) : (
									<>
										<Minus />
									</>
								)}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div >
	);
}