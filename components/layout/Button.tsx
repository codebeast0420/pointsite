import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "white";
  className?: string;
  onClick?: () => void;
  ariaLabel?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  className = "",
  onClick,
  ariaLabel,
}) => {
  const baseStyles =
    "text-base font-bold rounded-[100px] px-8 py-4 flex items-center justify-center";
  const variants = {
    primary: "bg-[#8771EF] text-white",
    secondary: "bg-neutral-100 text-black",
    white: "bg-white text-black",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className} cursor-pointer`}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

export default Button;
