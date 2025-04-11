import * as React from "react";

interface RequiredLabelProps {
	text: string;
}

export function RequiredLabel({ text }: RequiredLabelProps) {
	return (
		<div className="flex gap-5 items-center mb-2.5">
			<label className="text-base font-medium text-black">{text}</label>
			<div className="px-2.5 py-0.5 text-xs font-bold text-white bg-red-600 rounded-md">
				Required
			</div>
		</div>
	);
}
