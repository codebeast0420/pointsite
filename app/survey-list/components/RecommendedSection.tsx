import React from "react";
import { SurveyCard } from "./SurveyCard";
import { LikeIcon } from "./Icons";

export const RecommendedSection: React.FC = () => {
  return (
    <section>
      <div className="flex gap-2 items-center mb-8">
        <LikeIcon />
        <h2 className="text-2xl font-bold text-violet-500">
          Today's Recommend
        </h2>
      </div>
      <div className="grid gap-5 mb-10 grid-cols-[repeat(5,1fr)] max-[1200px]:grid-cols-[repeat(4,1fr)] max-[1024px]:grid-cols-[repeat(3,1fr)] max-[768px]:grid-cols-[repeat(2,1fr)] max-sm:grid-cols-[repeat(1,1fr)]">
        {[...Array(5)].map((_, index) => (
          <SurveyCard
            key={`recommended-${index}`}
            imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/cea9d28fc9309c94bd6ca3096902462181ae91a5"
            title="Survey title will go here as you can see the ma..."
            points={1000}
            isNew={index === 3}
          />
        ))}
      </div>
    </section>
  );
};
