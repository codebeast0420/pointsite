import * as React from "react";
import { StatCard } from "./StatCard";

export const DashboardContent: React.FC = () => {
	return (
		<main className="ml-5 w-[72%] max-md:ml-0 max-md:w-full">
			<div className="mt-28 w-full max-md:mt-10 max-md:max-w-full">
				<section className="max-md:max-w-full">
					<div className="flex gap-5 max-md:w-full max-sm:px-2 max-md:flex-col max-md:items-center">
						<div className="w-6/12 max-md:ml-0 max-md:w-full">
							<StatCard title="Total users:" value="1,234" />
						</div>
						<div className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
							<StatCard title="Total points distributed" value="98,230" />
						</div>
					</div>
				</section>

				<section className="mt-28 max-md:mt-10 max-md:max-w-full">
					<div className="flex gap-5 max-md:w-full max-sm:px-2 max-md:flex-col max-md:items-center">
						<div className="w-6/12 max-md:ml-0 max-md:w-full">
							<StatCard title="Exchanges today:" value="23" />
						</div>
						<div className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
							<StatCard
								title="Pending requests:"
								value="4"
								variant="highlight"
							/>
						</div>
					</div>
				</section>
			</div>
		</main>
	);
};
