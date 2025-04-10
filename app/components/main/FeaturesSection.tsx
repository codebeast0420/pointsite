import React from "react";
import Image from "next/image";
import Button from "../layout/Button";
import FeatureImage from "@/app/assets/images/Union.png"
import CoinImage from "@/app/assets/images/23.png"
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
    <section className="flex gap-48 max-sm:gap-20 flex justify-center py-12 max-[1100px]:flex-col max-md:p-8">
      <div className="relative flex items-center justify-center">
        <Image src={FeatureImage} alt="Feature Image" width={375} height={295}/>
        <Image src={CoinImage} alt="Coin Image" className="absolute top-[10%] max-[1100px]:right-[20%] max-sm:top-[-9%] right-[-6%] max-sm:w-[120px]" />
      </div>
      <div className="">
        <h2 className="mb-8 text-4xl font-bold">Extra income, made easy</h2>
        <p className="mb-8 text-lg font-semibold max-w-[521px]">
          No more wasting time and effort. With Raku Earn, our AI fills out
          surveys for you, all you have to do is turn it on and watch the points
          come in.
        </p>
        <div className="flex flex-col gap-5">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-5 items-center">
              {feature.svg}
              <p className="text-lg font-semibold">{feature.description}</p>
            </div>
          ))}
        </div>
        <Button variant="secondary" className="mt-8">
          How it works
        </Button>
      </div>
    </section>
  );
};

export default FeaturesSection;
