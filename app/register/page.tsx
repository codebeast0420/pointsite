"use client";
import * as React from "react";
import Header from "@/components/layout/Header";
import { RegistrationForm } from "./components/RegistrationForm";
import Footer from "@/components/layout/Footer";

export function RegistrationPage() {
	return (
		<div className="bg-white">
			<Header />
			<main className="px-36 py-0 max-md:px-10 max-md:py-0 max-sm:px-5 max-sm:py-0">
				<h1 className="mb-5 text-3xl font-bold text-black">Registration</h1>
				<p className="mb-14 text-base font-medium text-black">
					After entering the required information, please press the "Confirm"
					button.
				</p>
				<RegistrationForm />
			</main>
			<Footer />
		</div>
	);
}
