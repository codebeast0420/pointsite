"use client";
import React from "react";
import { Badge } from "./Badge";
import Button from "@/components/layout/Button";

export const SurveyDetails: React.FC = () => {
  return (
    <section className="self-center px-14 py-20 mt-5 w-full rounded-3xl bg-neutral-100 max-w-[1300px] max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5 max-[1100px]:flex-col items-center justify-center">
        <div className="max-[1100px]:ml-0 ">
          <div className="flex flex-col max-sm:w-full w-[350px] max-[1100px]:mt-10">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/87b5d4114987481390e084a568fbb563/abe130102c305251c0e0ec827ac2ac1bd18a9be2?placeholderIfAbsent=true"
              alt="Survey thumbnail"
              className="object-contain rounded-3xl aspect-square max-sm:w-full w-[428px]"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/87b5d4114987481390e084a568fbb563/18e84256b257bc680e97329a567bafcf12bba368?placeholderIfAbsent=true"
              alt="Provider logo"
              className="object-contain self-center mt-7 rounded-full aspect-square w-[54px]"
            />
          </div>
        </div>
        <div className="ml-20 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col items-start max-md:mt-10 max-md:max-w-full">
            <Badge text="NEW" />
            <h1 className="mt-2.5 text-2xl font-bold text-black max-md:max-w-full">
              Survey title will go here as you can see the max length if there
              is more
            </h1>
            <div className="flex gap-5 justify-between mt-8 max-w-full text-base text-black w-[300px]">
              <span className="font-bold">Survey Provider:</span>
              <span className="font-medium">XYZ Company</span>
            </div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/87b5d4114987481390e084a568fbb563/b594f20b4a01d8dc61461be56ac20370002410e7?placeholderIfAbsent=true"
              alt="Divider"
              className="object-contain self-stretch mt-2 w-full aspect-[250] max-md:max-w-full"
            />
            <div className="flex gap-5 justify-between mt-2.5 max-w-full text-base text-black w-[281px]">
              <span className="font-bold">Added Date:</span>
              <span className="font-medium">12/23/2025</span>
            </div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/87b5d4114987481390e084a568fbb563/b594f20b4a01d8dc61461be56ac20370002410e7?placeholderIfAbsent=true"
              alt="Divider"
              className="object-contain self-stretch mt-2 w-full aspect-[250] max-md:max-w-full"
            />
            <div className="flex gap-5 justify-between mt-2 max-w-full text-base text-black w-[284px]">
              <span className="font-bold">Estimated Time:</span>
              <span className="font-medium">~10 minutes</span>
            </div>
            <div className="flex gap-3.5 self-end mt-12 max-md:mt-10">
              <div className="px-3 my-auto w-10 h-10 text-2xl font-extrabold text-center text-white whitespace-nowrap bg-amber-400 rounded-[250px]">
                P
              </div>
              <div className="text-5xl font-bold text-violet-500 basis-auto max-md:text-4xl">
                1,000 P
              </div>
            </div>
            <Button
              variant="primary"
              className="self-stretch mt-14 text-2xl max-md:mt-10 max-md:max-w-full"
            >
              GET
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
