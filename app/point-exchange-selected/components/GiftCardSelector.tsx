"use client";
import React from "react";
import { PaymentCardImg } from "@/constants/constants";

const amounts = ["300", "500", "1,000", "3,000", "10,000"];
type PaymentMethodId = keyof typeof PaymentCardImg;

export const GiftCardSelector: React.FC<{ id: PaymentMethodId }> = ({ id }) => {
	return (
		<section className="self-center px-14 py-5 mt-5 w-full rounded-3xl bg-neutral-100 max-w-[1300px] max-md:px-5 max-md:max-w-full" aria-label="Gift card selector section">
			<div className="px-10 py-5 mt-5 rounded-3xl bg-neutral-100 max-sm:px-5 max-sm:py-8" aria-label="Gift card selector content">
				<div className="flex gap-24 max-[1160px]:flex-col max-[1160px]:items-center" aria-label="Gift card selector content">
					<img src={PaymentCardImg[id].icon.src} className="h-[214px] w-[214px]" alt="Amazon Logo" aria-label="Gift card selector icon" />
					<div className="flex-1" aria-label="Gift card selector content">
						<h1 className="mb-9 text-2xl font-bold" aria-label="Gift card selector title">{PaymentCardImg[id].title} Gift Card</h1>
						<div aria-label="Gift card selector content">
							<h2 className="mb-7 text-base font-bold" aria-label="Gift card selector amount title">
								Select the amount you want
							</h2>
							<div className="flex gap-5 flex-wrap max-md:justify-center">
								{amounts.map((amount) => (
									<button
										key={amount}
										className="px-5 py-3.5 font-semibold text-center bg-white rounded-xl border border-solid border-zinc-300 border-opacity-90 min-w-[100px] hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-violet-500"
									>
										{amount} YEN
									</button>
								))}
							</div>
						</div>
						<button className="p-4 mt-20 w-full text-2xl font-bold text-white bg-violet-500 cursor-pointer border-[none] rounded-[100px] hover:bg-violet-600 transition-colors focus:outline-none focus:ring-2 focus:ring-violet-700" aria-label="Gift card selector apply button">
							APPLY
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};
