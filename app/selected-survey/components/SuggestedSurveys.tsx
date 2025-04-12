"use client";
import React from "react";
import { SurveyCard } from "@/app/survey-list/components/SurveyCard";
import { Zap } from "lucide-react";
export const SuggestedSurveys: React.FC = () => {
    return (
        <section className="self-center mt-14 mb-8 max-md:mt-10">
            <div className="flex flex-col gap-5 items-start">
                <div className="flex gap-2 items-center text-2xl font-bold text-violet-500 max-md:ml-2.5">
                    <Zap color="#8771EF" />
                    <h2 className="basis-auto">Suggested for you</h2>
                </div>
                <div className="grid grid-cols-5 max-[1200px]:grid-cols-4 max-[1000px]:grid-cols-3 max-[800px]:grid-cols-2 max-sm:grid-cols-1 gap-5 self-center w-full max-w-[1300px] max-md:max-w-full">
                    {[1, 2, 3, 4, 5].map((index) => (
                        <SurveyCard
                            key={index}
                            imageUrl="https://cdn.builder.io/api/v1/image/assets/87b5d4114987481390e084a568fbb563/becd79cb3724cfb5334bf8ca66452dec35212664?placeholderIfAbsent=true"
                            title="Survey title will go here as you can see the ma..."
                            points={1000}
                            isNew={index === 4 ? true : false}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
