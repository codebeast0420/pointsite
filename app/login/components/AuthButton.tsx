"use client";

import React from "react";

interface AuthButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: "primary" | "secondary";
	fullWidth?: boolean;
	children: React.ReactNode;
}

export const AuthButton: React.FC<AuthButtonProps> = ({
	variant = "primary",
	fullWidth = false,
	children,
	className = "",
	...props
}) => {
	const baseStyles =
		"h-10 text-base font-bold rounded-md cursor-pointer border-[none]";
	const variantStyles =
		variant === "primary"
			? "bg-violet-500 text-white"
			: "bg-transparent text-black";
	const widthStyles = fullWidth ? "w-full" : "";

	return (
		<button
			className={`${baseStyles} ${variantStyles} ${widthStyles} ${className}`}
			{...props}
		>
			{children}
		</button>
	);
};
