import * as React from "react";

interface StatCardProps {
  title: string;
  value: string | number;
  variant?: "default" | "highlight";
}

export const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  variant = "default",
}) => {
  const bgColor = variant === "highlight" ? "bg-amber-300" : "bg-white";

  return (
    <article
      className={`flex flex-col grow items-start py-6 pr-14 pl-5 w-full text-lg font-semibold text-black ${bgColor} rounded-xl max-md:pr-5 max-md:mt-8`}
      role="region"
      aria-label={title}
    >
      <h3>{title}</h3>
      <p className="mt-5">{value}</p>
    </article>
  );
};
