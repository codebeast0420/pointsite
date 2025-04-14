"use client";
import * as React from "react";
import { FormInput } from "./SurveyFormInput";
import { ActionButtons } from "./ActionButtons";
import Image from "next/image";
import Survey from "@/assets/images/survey.svg"

export const SurveyDetail: React.FC = () => {
  const [formData, setFormData] = React.useState({
    title: "Survey Title",
    provider: "XYZ Company",
    estimatedTime: "10",
    pointsAmount: "1,000",
    link: "link.com",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="flex overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] flex-row w-[72%] max-md:w-full max-[1200px]:flex-col-reverse max-[1200px]:items-center gap-10 mt-30 max-md:mt-10" aria-label="Survey detail section">
      <form className="flex-1 max-[1200px]:flex max-[1200px]:flex-col max-[1200px]:items-center ml-5 max-md:px-5 max-[1200px]:w-full w-[38%]" aria-label="Survey detail form">
        <FormInput
          id="survey-title"
          label="Title"
          value={formData.title}
          onChange={(value) => handleInputChange("title", value)}
        />
        <FormInput
          id="survey-provider"
          label="Survey Provider"
          value={formData.provider}
          onChange={(value) => handleInputChange("provider", value)}
        />
        <FormInput
          id="estimated-time"
          label="Estimated time (min)"
          value={formData.estimatedTime}
          onChange={(value) => handleInputChange("estimatedTime", value)}
          className="mb-20"
        />
        <FormInput
          id="points-amount"
          label="Points Amount"
          value={formData.pointsAmount}
          onChange={(value) => handleInputChange("pointsAmount", value)}
        />
        <FormInput
          id="survey-link"
          label="Link"
          value={formData.link}
          onChange={(value) => handleInputChange("link", value)}
        />
        <ActionButtons
          onEdit={() => console.log("Edit clicked")}
          onDelete={() => console.log("Delete clicked")}
          onGoBack={() => console.log("Go back clicked")}
        />
      </form>
      <div className="w-[62%] ml-10 flex items-start justify-center" aria-label="Survey detail image section">
        <Image
          src={Survey}
          className="rounded-3xl w-[294px]"
          alt="Survey illustration"
        />
      </div>
    </div>
  );
};
