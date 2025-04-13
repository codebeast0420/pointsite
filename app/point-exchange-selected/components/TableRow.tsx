import React from "react";

export const TableRow: React.FC<{ title: string; content: string; className?: string, rounded?: string }> = ({ title, content, className, rounded }) => {
	return (
		<div className={`flex px-0 w-full ${className}`}>
			<dt className={`px-9 flex-shrink-0 text-center py-5 text-lg max-md:w-[140px] max-md:text-sm font-bold ${rounded} bg-neutral-100 w-[238px]`}>
				{title}
			</dt>
			<dd className="flex items-center px-9 py-0 text-lg max-md:text-sm">{content}</dd>
		</div>
	);
};


