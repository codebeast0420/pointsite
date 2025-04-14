"use client";
import React from "react";
import { Badge } from "./Badge";
import Button from "@/components/layout/Button";
import SurveyThumbnail from "@/assets/images/survey.svg";
import Image from "next/image";
import { SurveyLink } from "@/constants/constants";
export const SurveyDetails: React.FC = () => {
  return (
    <section className="self-center px-14 py-5 mt-5 w-full rounded-3xl bg-neutral-100 max-w-[1300px] max-md:px-5 max-md:max-w-full" aria-label="Survey details section">
      <div className="px-10 py-5 mt-5 rounded-3xl bg-neutral-100 max-sm:px-5 max-sm:py-8" aria-label="Survey details content">
        <div className="flex gap-24 max-[1160px]:flex-col max-[1160px]:items-center" aria-label="Survey details content">
          <div className="max-[1100px]:ml-0 w-[214px]" aria-label="Survey details thumbnail">
            <div className="flex flex-col items-center max-sm:w-full max-[1100px]:mt-10" aria-label="Survey details thumbnail content">
                <Image
                src={SurveyThumbnail}
                alt="Survey thumbnail"
                className="w-[214px] h-[214px] min-w-[214px]"
                aria-label="Survey details thumbnail"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets/87b5d4114987481390e084a568fbb563/18e84256b257bc680e97329a567bafcf12bba368?placeholderIfAbsent=true"
                alt="Provider logo"
                className="object-contain self-center mt-7 rounded-full aspect-square w-[54px]"
                aria-label="Survey details provider logo"
              />
            </div>
          </div>
          <div className="max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-start max-md:mt-10 max-md:max-w-full">
              <Badge text="NEW" />
              <h1 className="mt-2.5 text-2xl font-bold text-black max-md:max-w-full">
                Survey title will go here as you can see the max length if there
                is more
              </h1>
              <div className="flex border-b pb-3 border-[#DDDDDD] gap-5 justify-start mt-8 max-w-full text-base text-black w-full">
                <span className="font-bold w-[30%]">Survey Provider:</span>
                <span className="font-medium">XYZ Company</span>
              </div>
              
              <div className="flex gap-5 pb-3 border-b border-[#DDDDDD] justify-start mt-2.5 max-w-full text-base text-black w-full">
                <span className="font-bold w-[30%]">Added Date:</span>
                <span className="font-medium">12/23/2025</span>
              </div>
              
              <div className="flex gap-5 justify-start mt-2 max-w-full text-base text-black w-full">
                <span className="font-bold w-[30%]">Estimated Time:</span>
                <span className="font-medium">~10 minutes</span>
              </div>
              <div className="flex items-center gap-3.5 self-end mt-12 max-md:mt-10">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="40.0005" height="40.0005" rx="20.0002" fill="#FFC031" />
                  <path d="M14.2217 29.0001V10.8182H21.7324C23.0937 10.8182 24.2685 11.0845 25.2569 11.6172C26.2513 12.1439 27.0177 12.8808 27.5563 13.8278C28.0949 14.7688 28.3642 15.8638 28.3642 17.1126C28.3642 18.3673 28.089 19.4652 27.5385 20.4063C26.994 21.3414 26.2157 22.0664 25.2037 22.5814C24.1916 23.0963 22.9901 23.3537 21.5993 23.3537H16.965V19.8914H20.7825C21.4454 19.8914 21.9988 19.776 22.4427 19.5451C22.8925 19.3143 23.2328 18.9917 23.4636 18.5774C23.6944 18.1572 23.8098 17.6689 23.8098 17.1126C23.8098 16.5503 23.6944 16.065 23.4636 15.6566C23.2328 15.2423 22.8925 14.9227 22.4427 14.6978C21.9928 14.4729 21.4395 14.3605 20.7825 14.3605H18.6163V29.0001H14.2217Z" fill="white" />
                </svg>
                <div className="text-5xl font-bold text-violet-500 basis-auto max-md:text-4xl">
                  1,000 P
                </div>
              </div>
              <Button
                variant="primary"
                className="self-stretch mt-14 text-2xl max-md:mt-10 max-md:max-w-full"
                aria-label="Survey details get button"
                onClick={() => {
                  window.open(SurveyLink, "_blank");
                }}
              >
                GET
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
