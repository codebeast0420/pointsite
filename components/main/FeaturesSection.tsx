import React from "react";
import Image from "next/image";
import Button from "../layout/Button";
import FeatureImage from "@/assets/images/Union.svg"
import FeaturePink from "./FeaturePink";
import FeatureBluePink from "./FeatureBluePink";
import FeatureYellow from "./FeatureYellow";

const FeaturesSection: React.FC = () => {
  const features: { description: string, svg: React.JSX.Element }[] = [
    {
      description: "Automated survey completion",
      svg: <FeaturePink />
    },
    {
      description: "Turn on the AI and start earning instantly",
      svg: <FeatureBluePink />
    },
    {
      description: "Save time and effort",
      svg: <FeatureYellow />
    },
  ];

  return (
    <section className="flex gap-48 max-sm:gap-20 justify-center py-30 max-[1100px]:flex-col max-md:p-8" aria-label="Features section">
      <div className="relative flex items-center justify-center" aria-label="Features image">
        <Image src={FeatureImage} alt="Feature Image" width={375} height={295}/>
      </div>
      <div className="" aria-label="Features content">
        <h2 className="mb-8 text-4xl font-bold" aria-label="Features title">Extra income, made easy</h2>
        <p className="mb-8 text-lg font-semibold max-w-[521px]" aria-label="Features description">
          No more wasting time and effort. With Raku Earn, our AI fills out
          surveys for you, all you have to do is turn it on and watch the points
          come in.
        </p>
        <div className="flex flex-col gap-5" aria-label="Features list">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-5 items-center" aria-label="Features item">
              {feature.svg}
              <p className="text-lg font-semibold" aria-label="Features item description">{feature.description}</p>
            </div>
          ))}
        </div>
        <Button variant="secondary" className="mt-8" ariaLabel="Features button">
          How it works
        </Button>
      </div>
    </section>
  );
};

export default FeaturesSection;
