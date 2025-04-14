"use client";
import * as React from "react";
import Header from "@/components/layout/Header";
import { RegistrationForm } from "./components/RegistrationForm";
import Footer from "@/components/layout/Footer";
import { Layout } from "@/components/layout/Layout";

const RegistrationPage = () => {
	return (
		<Layout>
			<div className="px-12 max-md:px-2 w-full max-w-[1440px] max-md:max-w-[991px]" aria-label="Registration page">
				<Header />
				<main className="mt-20 px-20 py-0 max-md:px-10 max-md:py-0 max-sm:px-5 max-sm:py-0" aria-label="Registration main">
					<h1 className="mb-5 text-3xl font-bold text-black" aria-label="Registration title">Registration</h1>
					<p className="mb-14 text-base font-medium text-black" aria-label="Registration description">
						After entering the required information, please press the "Confirm"
						button.
					</p>
					<RegistrationForm />
				</main>
			</div>
			<Footer />
		</Layout>
	);
}

export default RegistrationPage;