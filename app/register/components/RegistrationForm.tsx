"use client";
import * as React from "react";
import { useState } from "react";
import { RequiredLabel } from "./RequiredLabel";
import { RadioButton } from "@/app/account-setting/components/RadioButton";
import { DateSelector } from "@/app/account-setting/components/DateSelector";
import { UserProfile } from "@/app/account-setting/components/AccountForm";
import { Prefectures } from "@/constants/constants";
import { ChevronDown } from "lucide-react";
export function RegistrationForm() {
  const [userProfile, setUserProfile] = useState<UserProfile>({
    nickname: "",
    email: "",
    pwd: "",
    dob: new Date(),
    gender: "male",
    prefectures: "",
  });

  return (
    <form>
      <h2 className="mb-2 text-2xl font-semibold text-black">
        Basic information
      </h2>

      <div className="flex max-sm:flex-col max-sm:gap-2 max-sm:items-start items-center gap-30 mb-2 border-b border-solid p-8 border-zinc-300 border-opacity-90">
        <RequiredLabel text="Nickname" />
        <input
          type="text"
          id="nickname"
          aria-label="Enter your nickname"
          placeholder="Nickname"
          className="px-4 py-0 h-10 rounded-md border border-solid border-zinc-300 border-opacity-90 w-[393px] max-sm:w-full"
          value={userProfile.nickname}
          onChange={(e) => setUserProfile({ ...userProfile, nickname: e.target.value })}
        />
      </div>

      <div className="flex max-sm:flex-col max-sm:gap-2 max-sm:items-start items-center gap-30 mb-2 border-b border-solid p-8 border-zinc-300 border-opacity-90">
        <RequiredLabel text="Email address" />
        <input
          type="email"
          id="email"
          aria-label="Enter your email address"
          placeholder="Email address"
          className="px-4 py-0 h-10 rounded-md border border-solid border-zinc-300 border-opacity-90 w-[393px] max-sm:w-full"
          value={userProfile.email}
          onChange={(e) => setUserProfile({ ...userProfile, email: e.target.value })}
        />
      </div>

      <div className="flex max-sm:flex-col max-sm:gap-2 max-sm:items-start items-start gap-30 mb-2 border-b border-solid p-8 border-zinc-300 border-opacity-90">
        <RequiredLabel text="Password" />
        <div className="flex flex-col gap-2.5">
          <input
            type="password"
            id="password"
            aria-label="Enter your password"
            placeholder="Password"
            className="px-4 py-0 mb-5 h-10 rounded-md border border-solid border-zinc-300 border-opacity-90 w-[393px] max-sm:w-full"
            value={userProfile.pwd}
            onChange={(e) => setUserProfile({ ...userProfile, pwd: e.target.value })}
          />
          <input
            type="password"
            id="confirm-password"
            aria-label="Confirm your password"
            placeholder="Confirm password"
            className="px-4 py-0 h-10 rounded-md border border-solid border-zinc-300 border-opacity-90 w-[393px] max-sm:w-full"
            value={userProfile.pwd}
            onChange={(e) => setUserProfile({ ...userProfile, pwd: e.target.value })}
          />
        </div>
      </div>

      <div className="flex max-sm:flex-col max-sm:gap-2 max-sm:items-start items-center gap-30 mb-2 border-b border-solid p-8 border-zinc-300 border-opacity-90">
        <RequiredLabel text="Date of birth" />
        <div className="flex gap-2.5 max-sm:flex-col">
          <DateSelector value={userProfile.dob} onChange={(date) => setUserProfile({ ...userProfile, dob: date })} />
        </div>
      </div>

      <div className="flex max-sm:flex-col max-sm:gap-2 max-sm:items-start items-center gap-30 mb-2 border-b border-solid p-8 border-zinc-300 border-opacity-90">
        <RequiredLabel text="Gender" />
        <div className="flex gap-12 max-sm:flex-col max-sm:gap-5">
          <RadioButton
            label="Male"
            checked={userProfile.gender === "male"}
            name="gender"
            onChange={() => setUserProfile({ ...userProfile, gender: "male" })}
          />
          <RadioButton
            label="Female"
            checked={userProfile.gender === "female"}
            name="gender"
            onChange={() => setUserProfile({ ...userProfile, gender: "female" })}
          />
          <RadioButton
            label="Others"
            checked={userProfile.gender === "others"}
            name="gender"
            onChange={() => setUserProfile({ ...userProfile, gender: "others" })}
          />
        </div>
      </div>

      <div className="flex max-sm:flex-col max-sm:gap-2 max-sm:items-start items-center gap-30 mb-2 border-b border-solid p-8 border-zinc-300 border-opacity-90">
        <RequiredLabel text="Prefectures" />
        <div className="relative">
          <select className="px-4 py-2 relative rounded-lg border border-zinc-300 appearance-none bg-white cursor-pointer w-[150px]">
            <option value="" disabled defaultValue="" />
            {Prefectures.map((prefecture) => (
              <option key={prefecture} value={prefecture}>{prefecture}</option>
            ))}
          </select>
          <ChevronDown className="absolute pointer-events-none right-2 top-1/2 -translate-y-1/2" />
        </div>
      </div>

      <section className="mt-16">
        <div className="flex gap-5 items-center mb-7">
          <h2 className="text-2xl font-semibold text-black">
            Agreements on Terms of Use
          </h2>
          <div className="px-2.5 py-0.5 text-xs font-bold text-white bg-red-600 rounded-md">
            Required
          </div>
        </div>
        <div className="flex flex-col gap-5 mb-5">
          <a href="#" className="text-base text-blue-600 no-underline">
            Terms of Use
          </a>
          <a href="#" className="text-base text-blue-600 no-underline">
            Private Policy
          </a>
        </div>
        <div className="flex gap-5 items-center mt-7">
          <input
            type="checkbox"
            id="agree"
            className="w-5 h-5 rounded-sm border border-solid border-zinc-300 border-opacity-90"
          />
          <label htmlFor="agree">
            Agree to the Terms of Use and Privacy Policy
          </label>
        </div>
      </section>

      <button
        type="submit"
        className="mx-auto my-16 text-base font-bold text-white bg-violet-500 border-[none] h-[50px] rounded-[100px] w-[393px] max-sm:w-full"
      >
        Register
      </button>
    </form>
  );
}
