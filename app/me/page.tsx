"use client";
import React from "react";
import Header from "../components/layout/Header";
import { AccountSummary } from "./components/AccountSummary";
import { PointPassbook } from "./components/PointPassbook";
import { OtherSettings } from "./components/OtherSetting";
import Footer from "../components/layout/Footer";
import { Layout } from "../components/layout/Layout";
export const UserAccountPage: React.FC = () => {
	return (
		<Layout>
			<div className="px-12 max-md:px-2">
				<Header />
				<main className="px-26 py-10 max-md:px-5 max-md:py-10">
					<AccountSummary />
					<PointPassbook />
					<OtherSettings />
				</main>
			</div>
			<Footer />
		</Layout>
	);
};

export default UserAccountPage;
