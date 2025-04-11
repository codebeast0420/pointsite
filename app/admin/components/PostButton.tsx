"use client";
import * as React from "react";

interface PostButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: "primary" | "outline";
	fullWidth?: boolean;
}

export const PostButton: React.FC<PostButtonProps> = ({
	children,
	variant = "primary",
	fullWidth = false,
	className = "",
	...props
}) => {
	const baseStyles =
		"py-3.5 text-lg font-bold rounded-[100px] transition-colors";
	const variantStyles = {
		primary:
			"bg-black text-white border border-solid border-zinc-300 border-opacity-90",
		outline: "border border-black border-solid text-black bg-transparent",
	};

	const widthStyles = fullWidth ? "w-full" : "";

	return (
		<button
			className={`${baseStyles} ${variantStyles[variant]} ${widthStyles} ${className}`}
			{...props}
		>
			{children}
		</button>
	);
};
