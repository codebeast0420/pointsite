"use client";
import React from "react";
import Header from "@/components/layout/Header";
import { AccountSummary } from "./components/AccountSummary";
import { PointPassbook } from "./components/PointPassbook";
import { OtherSettings } from "./components/OtherSetting";
import Footer from "@/components/layout/Footer";
import { Layout } from "@/components/layout/Layout";

export default function Page () {
	return (
		<Layout>
			<div className="px-12 max-md:px-2 w-full max-w-[1440px] max-md:max-w-[991px]">
				<Header />
				<main className="pl-20 max-md:pl-5 pr-10 max-md:pr-5 py-10 max-md:px-5 max-md:py-10">
					<AccountSummary />
					<PointPassbook />
					<OtherSettings />
				</main>
			</div>
			<Footer />
		</Layout>
	);
};

