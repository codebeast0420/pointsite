"use client";
import * as React from "react";
import { PostInput } from "./PostInput";
import { PostButton } from "./PostButton";
import { FileUpload } from "./FileUpload";

export const SurveyForm: React.FC = () => {
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle form submission
	};

	return (
		<section className="ml-5 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] w-[72%] max-md:ml-0 max-md:w-full mt-30 max-md:mt-10" aria-label="Survey form section">
			<div className="flex flex-col items-start self-stretch my-auto w-full max-md:mt-10">
				<form
					onSubmit={handleSubmit}
					className="flex flex-col items-start self-stretch w-full max-md:px-5 max-md:mb-10"
					aria-label="Survey form"
				>
					<div className="self-stretch">
						<div className="flex gap-5 max-md:flex-col">
							<div className="w-[38%] max-md:w-full">
								<div className="flex flex-col gap-5">
									<PostInput
										label="Title"
										type="text"
										required
										aria-required="true"
									/>
									<PostInput
										label="Survey Provider"
										type="text"
										required
										aria-required="true"
									/>
									<PostInput
										label="Estimated time (min)"
										type="number"
										required
										aria-required="true"
									/>
								</div>
								<div className="mt-14 max-md:mt-10 space-y-5 w-[393px] max-md:w-full max-w-full" aria-label="Survey form input section">
									<PostInput
										label="Points Amount"
										type="number"
										required
										aria-required="true"
									/>
									<PostInput
										label="Link"
										type="url"
										required
										aria-required="true"
									/>

									<div className="mt-28 max-md:mt-10">
										<PostButton type="submit" fullWidth className="px-16">
											Post
										</PostButton>
									</div>
								</div>
							</div>

							<div className="ml-10 mt-10 w-[62%] max-md:ml-0 max-md:w-full" aria-label="Survey form file upload section">
								<FileUpload />
							</div>
						</div>
					</div>

				</form>
			</div>
		</section>
	);
};
