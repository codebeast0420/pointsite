"use client";
import * as React from "react";

interface FormInputProps {
  label: string;
  value: string;
  onChange?: (value: string) => void;
  type?: string;
  id: string;
  className?: string;
}

export const FormInput: React.FC<FormInputProps> = ({
  label,
  value,
  onChange,
  type = "text",
  id,
  className,
}) => {
  return (
    <div className={`mb-5 ${className}`}>
      <label htmlFor={id} className="mb-2 text-lg text-black block">
        {label}
      </label>
      <div className={`w-[393px] max-sm:w-full`}>
        <input
          id={id}
          type={type}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          className="px-4 py-0 w-full h-10 text-lg text-black bg-white rounded-md border border-solid border-zinc-300 border-opacity-90"
          aria-label={label}
        />
      </div>
    </div>
  );
};
