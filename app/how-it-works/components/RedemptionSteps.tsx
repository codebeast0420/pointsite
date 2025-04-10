import * as React from "react";
import { RedemptionCard } from "./RedemptionCard";
import Redemption1 from "@/app/assets/images/redemption1.png";
import Redemption2 from "@/app/assets/images/redemption2.png";
import Redemption3 from "@/app/assets/images/redemption3.png";
import { CategoryTitle } from "./CategoryTitle";
const redemptionSteps = [
	{
		number: 1,
		title: "Open the exchange page",
		description: "Head to Point Exchange page.",
		image: Redemption1,
	},
	{
		number: 2,
		title: "Choose your payout option",
		description: "Select from PayPay, bank transfer, gift cards, and more.",
		image: Redemption2,
	},
	{
		number: 3,
		title: "Confirm and wait for payout",
		description: "Submit your request, your rewards will be on the way shortly.",
		image: Redemption3,
	},
];

export const RedemptionSteps: React.FC = () => {
	return (
		<section className="mt-32 max-md:mt-10" aria-labelledby="redemption-title">
			<CategoryTitle title="How to redeem points for cash" />

			<div className="ml-11 max-w-full w-[641px] max-sm:w-full max-sm:ml-0">
				<div className="flex gap-5 max-md:flex-col">
					<div className="max-md:w-full">
						<div className="flex flex-col items-start mt-5 w-full text-lg font-bold max-md:mt-2 max-md:max-w-full">
							{redemptionSteps.map((step) => (
								<RedemptionCard
									key={step.number}
									number={step.number}
									title={step.title}
									description={step.description}
									image={step.image.src}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
