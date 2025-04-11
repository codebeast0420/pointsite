"use client";
import * as React from "react";
import { RequiredLabel } from "./RequiredLabel";
import { SelectField } from "./SelectedField";

export function RegistrationForm() {
  return (
    <form>
      <h2 className="mb-8 text-2xl font-semibold text-black">
        Basic information
      </h2>

      <div className="mb-10">
        <RequiredLabel text="Nickname" />
        <input
          type="text"
          id="nickname"
          aria-label="Enter your nickname"
          className="px-4 py-0 h-10 rounded-md border border-solid border-zinc-300 border-opacity-90 w-[393px] max-sm:w-full"
        />
      </div>

      <div className="mb-10">
        <RequiredLabel text="Email address" />
        <input
          type="email"
          id="email"
          aria-label="Enter your email address"
          className="px-4 py-0 h-10 rounded-md border border-solid border-zinc-300 border-opacity-90 w-[393px] max-sm:w-full"
        />
      </div>

      <div className="mb-10">
        <RequiredLabel text="Password" />
        <input
          type="password"
          id="password"
          aria-label="Enter your password"
          className="px-4 py-0 mb-5 h-10 rounded-md border border-solid border-zinc-300 border-opacity-90 w-[393px] max-sm:w-full"
        />
        <input
          type="password"
          id="confirm-password"
          aria-label="Confirm your password"
          className="px-4 py-0 h-10 rounded-md border border-solid border-zinc-300 border-opacity-90 w-[393px] max-sm:w-full"
        />
      </div>

      <div className="mb-10">
        <RequiredLabel text="Date of birth" />
        <div className="flex gap-2.5 max-sm:flex-col">
          <SelectField id="birth-year" aria-label="Birth year" />
          <SelectField id="birth-month" aria-label="Birth month" />
          <SelectField id="birth-day" aria-label="Birth day" />
        </div>
      </div>

      <div className="mb-10">
        <RequiredLabel text="Gender" />
        <div className="flex gap-12 max-sm:flex-col max-sm:gap-5">
          <div className="flex gap-2.5 items-center">
            <input
              type="radio"
              name="gender"
              id="male"
              className="w-5 h-5 rounded-full border border-solid border-zinc-300"
            />
            <label htmlFor="male">Male</label>
          </div>
          <div className="flex gap-2.5 items-center">
            <input
              type="radio"
              name="gender"
              id="female"
              className="w-5 h-5 rounded-full border border-solid border-zinc-300"
            />
            <label htmlFor="female">Female</label>
          </div>
          <div className="flex gap-2.5 items-center">
            <input
              type="radio"
              name="gender"
              id="others"
              className="w-5 h-5 rounded-full border border-solid border-zinc-300"
            />
            <label htmlFor="others">Others</label>
          </div>
        </div>
      </div>

      <div className="mb-10">
        <RequiredLabel text="Prefectures" />
        <div className="relative w-[199px]">
          <select className="px-4 py-0 h-10 rounded-md border border-solid border-zinc-300 border-opacity-90 w-[393px] max-sm:w-full">
            <option value="" disabled selected />
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
