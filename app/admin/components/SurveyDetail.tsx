"use client";
import * as React from "react";
import { FormInput } from "./SurveyFormInput";
import { ActionButtons } from "./ActionButtons";

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
    <div className="flex flex-row-reverse max-[1200px]:flex-col max-[1200px]:items-center gap-10 py-32 max-md:py-10">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0bc17241ccc9bd3e6f4d999e6fabd4ba7302cd73"
        className="flex-1 rounded-3xl w-[294px] h-[294px]  max-sm:h-auto"
        alt="Survey illustration"
      />
      <form className="flex-1 px-12 max-md:px-5">
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
    </div>
  );
};
