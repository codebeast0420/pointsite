"use client";

import React from "react";
import Header from "@/components/layout/Header";
import { LoginForm } from "./components/LoginForm";
import { RegistrationForm } from "./components/Registration";
import { Layout } from "@/components/layout/Layout";
import Footer from "@/components/layout/Footer";

const LoginPage: React.FC = () => {
	return (
		<>
			<link
				href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
				rel="stylesheet"
			/>
			<Layout>
				<div className="px-12 max-md:px-2 w-full max-w-[1440px] max-md:max-w-[991px]" aria-label="Login page">
					<Header />
					<section className="px-26 py-0 mb-20 max-md:px-5 max-md:py-0" aria-label="Login section">
						<h1 className="mb-8 text-3xl font-bold max-sm:text-2xl">
							Login / registration
						</h1>
						<div className="flex gap-8 p-6 rounded-3xl bg-neutral-100 max-md:flex-col max-sm:p-4">
							<LoginForm />
							<RegistrationForm />
						</div>
					</section>
				</div>
				<Footer />
			</Layout>
		</>
	);
};

export default LoginPage;
