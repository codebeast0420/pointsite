"use client";
import { useState } from "react";
import { RadioButton } from "./RadioButton";
import { DateSelector } from "./DateSelector";
import { ChevronDown } from "lucide-react";
import { Prefectures } from "@/constants/constants";
export interface UserProfile {
  nickname: string,
  email: string,
  pwd: string,
  dob: Date,
  gender: string,
  prefectures: string,
}

export const AccountForm = () => {
  const [uerProfile, setUserProfile] = useState<UserProfile>(
    {
      nickname: "james",
      email: "james@gmail.com",
      pwd: "testtest",
      dob: new Date("1999-12-21") as Date,
      gender: "male",
      prefectures: "Tokyo"
    }
  )

  return (
    <section className="flex flex-col items-start w-full">
      <h1 className="mt-10 text-2xl font-bold text-black max-md:mt-10 max-md:ml-2.5">
        Account setting
      </h1>

      <div className="flex flex-col w-full">
        <div className="flex max-sm:flex-col max-sm:gap-2 max-sm:items-start items-center gap-30 mb-2 border-b border-solid p-8 border-zinc-300 border-opacity-90">
          <label htmlFor="nickname" className="my-auto w-[18%]">Nickname</label>
          <input
            id="nickname"
            type="text"
            value={uerProfile.nickname}
            className="px-4 py-0 h-10 rounded-md border border-solid border-zinc-300 border-opacity-90 w-[393px] max-sm:w-full"
            onChange={(e) => setUserProfile({ ...uerProfile, nickname: e.target.value })}
          />
        </div>

        <div className="flex max-sm:flex-col max-sm:gap-2 max-sm:items-start items-center gap-30 mb-2 border-b border-solid p-8 border-zinc-300 border-opacity-90">
          <label htmlFor="email" className="my-auto w-[18%]">Email address</label>
          <input
            id="email"
            type="email"
            value={uerProfile.email}
            className="px-4 py-0 h-10 rounded-md border border-solid border-zinc-300 border-opacity-90 w-[393px] max-sm:w-full"
            onChange={(e) => setUserProfile({ ...uerProfile, email: e.target.value })}
          />
        </div>

        <div className="flex max-sm:flex-col max-sm:gap-2 max-sm:items-start items-center gap-30 mb-2 border-b border-solid p-8 border-zinc-300 border-opacity-90">
          <label htmlFor="password" className="my-auto w-[18%]">Password</label>
          <div className="flex gap-5">
            <input
              id="password"
              type="password"
              value={uerProfile.pwd}
              className="px-4 py-0 h-10 rounded-md border border-solid border-zinc-300 border-opacity-90 w-[393px] max-sm:w-full"
              onChange={(e) => setUserProfile({ ...uerProfile, pwd: e.target.value })}
            />
            <button className="my-auto cursor-pointer hover:text-gray-700">
              Change password
            </button>
          </div>
        </div>

        <div className="flex max-sm:flex-col max-sm:gap-2 max-sm:items-start items-center gap-30 mb-2 border-b border-solid p-8 border-zinc-300 border-opacity-90">
          <label htmlFor="dob" className="my-auto w-[18%] text-base font-medium text-black">
            Date of birth
          </label>
          <div className="flex gap-2.5">
            <DateSelector
              value={uerProfile.dob}
              onChange={(date) => setUserProfile({ ...uerProfile, dob: date })}
            />
          </div>
        </div>

        <div className="flex max-sm:flex-col max-sm:gap-2 max-sm:items-start items-center gap-30 mb-2 border-b border-solid p-8 border-zinc-300 border-opacity-90">
          <label htmlFor="gender" className="my-auto w-[18%] text-base font-medium text-black">Gender</label>
          <div className="flex gap-8">
            <RadioButton
              label="Male"
              checked={uerProfile.gender === "male"}
              name="gender"
              onChange={() => setUserProfile({ ...uerProfile, gender: "male" })}
            />
            <RadioButton
              label="Female"
              checked={uerProfile.gender === "female"}
              name="gender"
              onChange={() => setUserProfile({ ...uerProfile, gender: "female" })}
            />
            <RadioButton
              label="Others"
              checked={uerProfile.gender === "others"}
              name="gender"
              onChange={() => setUserProfile({ ...uerProfile, gender: "others" })}
            />
          </div>
        </div>

        <div className="flex max-sm:flex-col max-sm:gap-2 max-sm:items-start items-center gap-30 mb-2 border-b border-solid p-8 border-zinc-300 border-opacity-90">
          <label htmlFor="prefectures" className="my-auto w-[18%]">Prefectures</label>
          <div className="relative">
            <select
              id="prefectures"
              value={uerProfile.prefectures}
              onChange={(e) => setUserProfile({ ...uerProfile, prefectures: e.target.value })}
              className="px-4 py-2 relative rounded-lg border border-zinc-300 appearance-none bg-white cursor-pointer w-[150px]"
            >
              {Prefectures.map((prefecture) => (
                <option key={prefecture} value={prefecture}>{prefecture}</option>
              ))}
            </select>
            <ChevronDown className="absolute pointer-events-none right-2 top-1/2 -translate-y-1/2" />
          </div>
        </div>

        <button
          className="cursor-pointer max-md:ml-2.5 p-8 text-base font-medium text-red-600 hover:text-red-700 text-left"
          aria-label="Delete account"
        >
          Delete account
        </button>
      </div>
    </section>
  );
};
