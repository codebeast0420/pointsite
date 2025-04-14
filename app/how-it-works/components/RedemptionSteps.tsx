import * as React from "react";
import { RedemptionCard } from "./RedemptionCard";
import { CategoryTitle } from "@/components/comps/CategoryTitle";
import { redemptionSteps } from "@/constants/constants";

export const RedemptionSteps: React.FC = () => {
	return (
		<section className="mt-32 max-md:mt-10" aria-labelledby="redemption-title">
			<CategoryTitle title="How to redeem points for cash" aria-label="Redemption title" />

			<div className="ml-11 max-w-full w-[641px] max-sm:w-full max-sm:ml-0" aria-label="Redemption steps">
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
