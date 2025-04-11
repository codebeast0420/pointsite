"use client";
import * as React from "react";

interface PostInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const PostInput: React.FC<PostInputProps> = ({
  label,
  id,
  className = "",
  ...props
}) => {
  const inputId = id || label.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="flex flex-col">
      <label htmlFor={inputId} className="text-lg text-black mb-2">
        {label}
      </label>
      <input
        id={inputId}
        className={`h-10 bg-white rounded-md border border-solid border-zinc-300 border-opacity-90 ${className}`}
        {...props}
      />
    </div>
  );
};
