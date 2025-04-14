import * as React from "react";
import Image, { StaticImageData } from "next/image";
interface StepCardProps {
  stepNumber: number;
  title: string;
  description: string;
  image?: StaticImageData;
  points?: Array<{ amount: string }>;
}

export const StepCard: React.FC<StepCardProps> = ({
  stepNumber,
  title,
  description,
  image,
  points,
}) => {
  return (
    <article className="flex flex-col grow px-6 pt-5 pb-8 w-full font-bold text-center rounded-3xl bg-neutral-100 max-md:px-5 max-md:mt-6" aria-label="Step card">
      <div className="text-2xl text-[#D4C8FF]" aria-label="Step number">
        <span style={{ fontSize: "24px" }}>step.</span>
        <span style={{ fontSize: "40px" }}>{stepNumber}</span>
      </div>
      <h3 className="mt-2 text-lg text-violet-500" aria-label="Step title">{title}</h3>
      {image && (
        <Image
          src={image}
          alt={`Step ${stepNumber} illustration`}
          className="object-fill self-center mt-6 max-w-full h-[155px] min-h-[155px]"
          aria-label="Step image"
        />
      )}
      {points && (
        <div className="flex flex-col gap-2 mt-5">
          {points.map((point, index) => (
            <div
              key={index}
              className="flex gap-5 justify-between px-2.5 py-2 max-w-full bg-white rounded-xl w-[174px]"
              aria-label="Step point"
            >
              <div className="px-1.5 text-xs text-center text-white whitespace-nowrap bg-amber-400 h-[18px] rounded-[113px] w-[18px]" aria-label="Step point number">
                P
              </div>
              <div className="text-base text-right text-violet-500" aria-label="Step point amount">
                {point.amount}
              </div>
            </div>
          ))}
        </div>
      )}
      <p className="mt-7 text-sm font-semibold text-black" aria-label="Step description">{description}</p>
    </article>
  );
};
