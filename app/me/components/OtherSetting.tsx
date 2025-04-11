"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
export const OtherSettings: React.FC = () => {
  return (
    <section className="mb-10" aria-labelledby="other-settings">
      <h2 id="other-settings" className="mb-5 text-2xl font-bold text-black">
        Others
      </h2>
      <nav>
        <ul>
          <li>
            <Link
              href="/account-setting"
              className="flex justify-between items-center px-0 py-5 text-lg font-semibold text-black border-b border-solid border-b-zinc-300 border-b-opacity-90"
            >
              <span>Account setting</span>
              <ArrowRight />
            </Link>
          </li>
          <li>
            <Link
              href="#faq"
              className="flex justify-between items-center px-0 py-5 text-lg font-semibold text-black border-b border-solid border-b-zinc-300 border-b-opacity-90"
            >
              <span>FAQ / Contact Us</span>
              <ArrowRight />
            </Link>
          </li>
          <li>
            <button
              onClick={() => console.log("Logout clicked")}
              className="w-full flex justify-between items-center px-0 py-5 text-lg font-semibold text-black border-b border-solid border-b-zinc-300 border-b-opacity-90"
            >
              <span>Log out</span>
              <ArrowRight />
            </button>
          </li>
        </ul>
      </nav>
    </section>
  );
};
