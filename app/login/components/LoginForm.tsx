"use client";

import React, { useState } from "react";
import { AuthButton } from "./AuthButton";
import { useRouter } from "next/navigation";

export const LoginForm: React.FC = () => {
	const router = useRouter();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		localStorage.setItem("isLoggedIn", "true");
		if (localStorage.getItem("isLoggedIn") === "true" && email === "admin@gmail.com" && password === "admin") {
			router.push("/admin");
		}
		if (localStorage.getItem("isLoggedIn") === "true" && email !== "admin@gmail.com") {
			router.push("/me");
		}
		// Handle login logic here
	};

	return (
		<div className="flex-1 bg-white px-10 py-6 rounded-3xl max-sm:p-5" aria-label="Login form">
			<form onSubmit={handleSubmit}>
				<h2 className="mb-2 text-2xl font-semibold" aria-label="Login title">Login</h2>
				<div className="mb-8 h-px bg-zinc-300 bg-opacity-90" />
				<div className="flex flex-col items-center w-full" aria-label="Login form content">
					<div className="self-center w-[90%]" aria-label="Login form content">
						<div className="mb-6" aria-label="Email input">
							<label
								htmlFor="email"
								className="mb-2.5 text-base font-medium block"
							>
								Email
							</label>
							<input
								id="email"
								type="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className="px-4 py-0 w-full h-10 rounded-md border border-solid border-zinc-300 border-opacity-90"
								required
							/>
						</div>
						<div className="mb-6" aria-label="Password input">
							<label
								htmlFor="password"
								className="mb-2.5 text-base font-medium block"
							>
								Password
							</label>
							<input
								id="password"
								type="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								className="px-4 py-0 w-full h-10 rounded-md border border-solid border-zinc-300 border-opacity-90"
								required
							/>
						</div>
						<button
							type="button"
							className="mb-6 text-base font-medium cursor-pointer text-neutral-400"
							aria-label="Forgot password"
						>
							Forgot password?
						</button>
						<AuthButton type="submit" fullWidth ariaLabel="Login button">
							Login
						</AuthButton>
					</div>
				</div>
			</form>
		</div>
	);
};
