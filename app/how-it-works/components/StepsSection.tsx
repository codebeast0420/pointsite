import * as React from "react";
import { StepCard } from "./StepCard";
import { StaticImageData } from "next/image";
import { CategoryTitle } from "@/components/comps/CategoryTitle";
interface Step {
	number: number;
	title: string;
	description: string;
	image: StaticImageData
}

export const StepsSection: React.FC<{ title: string, steps: Array<Step> }> = ({ title, steps }) => {
	return (
		<section className="mt-16 flex flex-col" aria-labelledby="steps-title">
			<CategoryTitle title={title} />

			<div className="self-center mt-7 w-full px-8 max-md:max-w-full" aria-label="Steps section">
				<div className="grid max-[1100px]:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 grid-cols-4 gap-5 max-md:flex-col" aria-label="Steps">
					{steps.map((step, index) => (
						<div className="w-full" key={index} aria-label="Step">
							<StepCard
								stepNumber={step.number}
								title={step.title}
								description={step.description}
								image={step.image.src}
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
