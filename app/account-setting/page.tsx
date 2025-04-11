"use client";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { AccountForm } from "./components/AccountForm";
import { Layout } from "../components/layout/Layout";

export default function AccountSetting() {
	return (
		<Layout>
			<div className="px-12 max-md:px-2">
				<Header />
				<main className="px-26 py-10 max-md:px-5 max-md:py-10">
					<AccountForm />
				</main>
			</div>
			<Footer />
		</Layout>
	);
}
