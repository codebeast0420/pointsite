"use client";
import React from "react";

interface BadgeProps {
  text: string;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ text, className = "" }) => {
  return (
    <div
      className={`px-2.5 py-1 text-xs font-bold text-white whitespace-nowrap bg-red-600 rounded-md ${className}`}
      role="status"
      aria-label={text}
    >
      {text}
    </div>
  );
};
