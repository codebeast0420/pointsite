"use client";
import * as React from "react";
import { useState } from "react";
import { RequiredLabel } from "./RequiredLabel";
import { RadioButton } from "@/app/account-setting/components/RadioButton";
import { DateSelector } from "@/app/account-setting/components/DateSelector";
import { UserProfile } from "@/app/account-setting/components/AccountForm";

export function RegistrationForm() {
  const [userProfile, setUserProfile] = useState<UserProfile>({
    nickname: "",
    email: "",
    pwd: "",
    dob: new Date(),
    gender: "",
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
            className="px-4 py-0 mb-5 h-10 rounded-md border border-solid border-zinc-300 border-opacity-90 w-[393px] max-sm:w-full"
            value={userProfile.pwd}
            onChange={(e) => setUserProfile({ ...userProfile, pwd: e.target.value })}
          />
          <input
            type="password"
            id="confirm-password"
            aria-label="Confirm your password"
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
        <div className="relative w-[199px]">
          <select className="px-4 py-0 h-10 rounded-md border border-solid border-zinc-300 border-opacity-90 w-[393px] max-sm:w-full">
            <option value="" disabled defaultValue="" />
            <option value="1">Tokyo</option>
            <option value="2">Osaka</option>
            <option value="3">Kyoto</option>
            <option value="4">Sapporo</option>
            <option value="5">Fukuoka</option>
          </select>
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
