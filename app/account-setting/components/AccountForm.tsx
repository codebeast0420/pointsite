"use client";
import { useState } from "react";
import { RadioButton } from "./RadioButton";
import { DateSelector } from "./DateSelector";
import { ChevronDown } from "lucide-react";
interface UserProfile {
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
      <h1 className="mt-10 ml-20 text-2xl font-bold text-black max-md:mt-10 max-md:ml-2.5">
        Account setting
      </h1>

      <div className="flex flex-col w-full gap-8">
        <div className="flex flex-wrap pb-5 border-b border-solid border-zinc-300 border-opacity-90 gap-5 mt-10 max-md:ml-2.5 ml-28 max-w-full text-base font-medium text-black whitespace-nowrap">
          <label className="my-auto w-[20%]">Nickname</label>
          <input
            type="text"
            value={uerProfile.nickname}
            className="px-5 py-3 rounded-md border border-solid border-zinc-300 border-opacity-90"
            onChange={(e) => setUserProfile({ ...uerProfile, nickname: e.target.value })}
          />
        </div>

        <div className="flex flex-wrap pb-5 border-b border-solid border-zinc-300 border-opacity-90 gap-5 max-md:ml-2.5 ml-28 max-w-full text-base font-medium text-black">
          <label className="my-auto w-[20%]">Email address</label>
          <input
            type="email"
            value={uerProfile.email}
            className="px-5 py-3 whitespace-nowrap rounded-md border border-solid border-zinc-300 border-opacity-90"
            onChange={(e) => setUserProfile({ ...uerProfile, email: e.target.value })}
          />
        </div>

        <div className="flex flex-wrap pb-5 border-b border-solid border-zinc-300 border-opacity-90 gap-5 max-md:ml-2.5 ml-28 max-w-full text-base font-medium text-black">
          <label className="my-auto w-[20%]">Password</label>
          <div className="flex gap-5">
            <input
              type="password"
              value={uerProfile.pwd}
              className="px-5 py-3 whitespace-nowrap rounded-md border border-solid border-zinc-300 border-opacity-90"
              onChange={(e) => setUserProfile({ ...uerProfile, pwd: e.target.value })}
            />
            <button className="my-auto hover:text-gray-700">
              Change password
            </button>
          </div>
        </div>

        <div className="flex flex-wrap pb-5 border-b border-solid border-zinc-300 border-opacity-90 gap-5 max-md:ml-2.5 ml-28 max-w-full text-base font-medium text-black">
          <label className="my-auto w-[20%] text-base font-medium text-black">
            Date of birth
          </label>
          <div className="flex gap-2.5">
            <DateSelector
              value={uerProfile.dob}
              onChange={(date) => setUserProfile({ ...uerProfile, dob: date })}
            />
          </div>
        </div>

        <div className="flex flex-wrap pb-5 border-b border-solid border-zinc-300 border-opacity-90 gap-5 max-md:ml-2.5 ml-28 max-w-full text-base font-medium text-black">
          <label className="my-auto w-[20%] text-base font-medium text-black">Gender</label>
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

        <div className="flex flex-wrap pb-5 border-b border-solid border-zinc-300 border-opacity-90 gap-5 max-md:ml-2.5 ml-28 max-w-full text-base font-medium text-black whitespace-nowrap">
          <label className="my-auto w-[20%]">Prefectures</label>
          <div className="relative">
            <select
              value={uerProfile.prefectures}
              onChange={(e) => setUserProfile({ ...uerProfile, prefectures: e.target.value })}
              className="px-4 py-2 relative rounded-lg border border-zinc-300 appearance-none bg-white cursor-pointer w-[120px]"
            >
              <option value="Tokyo">Tokyo</option>
              <option value="Osaka">Osaka</option>
              <option value="Kyoto">Kyoto</option>
              <option value="Hiroshima">Hiroshima</option>
              <option value="Fukuoka">Fukuoka</option>
            </select>
            <ChevronDown className="absolute pointer-events-none right-2 top-1/2 -translate-y-1/2" />
          </div>
        </div>

        <button
          className="mt-10 cursor-pointer max-md:ml-2.5 ml-28 text-base font-medium text-red-600 hover:text-red-700 text-left"
          aria-label="Delete account"
        >
          Delete account
        </button>
      </div>
    </section>
  );
};
