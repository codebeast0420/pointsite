"use client";
import React, { useState, useEffect } from "react";
import Button from "./Button";
import Link from "next/link";
import { ChevronRight, UserRound } from "lucide-react";
import { HeaderLinks } from "@/constants/constants";
import { useRouter } from "next/navigation";
import Logo from '@/assets/images/logo1.png';
import Image from "next/image";

const MobileLink = ({ href, title, onClick }: { href: string, title: string, onClick: () => void }) => {
	return (
		<Link href={href} className="text-xl font-bold text-black" onClick={onClick}>
			{title}
		</Link>
	);
};

const Header: React.FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isLogedin, setIsLogedin] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		setIsLogedin(localStorage.getItem("isLoggedIn") === "true");
	}, []);

	const router = useRouter();

	return (
		<header className="flex items-center justify-between py-8">
			<div className="flex items-center gap-10">
				<Link href="/" className="text-2xl font-bold">
					<Image src={Logo} alt="Logo" className="w-[172px]" />
				</Link>
			</div>
			<div className="flex items-center gap-10">
				<nav className="flex gap-10 max-[906px]:hidden" aria-label="Main navigation">
					<Link href="/how-it-works" className="text-base font-bold text-black">
						How it Works
					</Link>
					<Link href="/survey-list" className="text-base font-bold text-black">
						Survey List
					</Link>
					<Link href="/point-exchange" className="text-base font-bold text-black">
						Point Exchange
					</Link>
				</nav>
				<div className="flex gap-2.5 max-[906px]:hidden">
					<Button variant="secondary">AI Dashboard</Button>
					{isLogedin ? (
						<div className="relative" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
							<div className="flex cursor-pointer items-center justify-center p-3 rounded-full bg-neutral-100 hover:bg-neutral-200 gap-2">
								<UserRound color="black" width={30} height={30} />
							</div>

							{isOpen && (
								<>
									<div className="absolute w-full h-2 -bottom-2"></div>

									<div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
										<div className="px-2">
											<div className="flex items-center px-4 py-2 justify-between bg-[#F6F5F9] rounded-md">
												<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
													<rect width="18" height="18" rx="9" fill="#FFC031" />
													<path d="M6.5748 13.25V5.06818H9.95459C10.5672 5.06818 11.0958 5.18803 11.5406 5.42773C11.9881 5.66477 12.333 5.99636 12.5753 6.4225C12.8177 6.84597 12.9389 7.33869 12.9389 7.90066C12.9389 8.46529 12.815 8.95934 12.5673 9.38281C12.3223 9.80362 11.9721 10.1299 11.5166 10.3616C11.0612 10.5933 10.5206 10.7092 9.89466 10.7092H7.80926V9.1511H9.52712C9.82542 9.1511 10.0744 9.09917 10.2742 8.99529C10.4766 8.89142 10.6297 8.74627 10.7336 8.55984C10.8375 8.37074 10.8894 8.15101 10.8894 7.90066C10.8894 7.64764 10.8375 7.42924 10.7336 7.24547C10.6297 7.05904 10.4766 6.91522 10.2742 6.81401C10.0718 6.7128 9.82275 6.6622 9.52712 6.6622H8.55233V13.25H6.5748Z" fill="white" />
												</svg>
												<p className="text-[#8771EF] font-bold">8,000 P</p>
											</div>
										</div>
										<Link
											href="/me"
											className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-neutral-50"
										>
											<p>My Account</p>
											<ChevronRight />
										</Link>
										<button
											onClick={() => {
												localStorage.removeItem("isLoggedIn");
												setIsLogedin(false);
												router.push("/");
											}}
											className="flex items-center justify-between w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-neutral-50"
										>
											<p>Log Out</p>
											<ChevronRight />
										</button>
									</div>
								</>
							)}
						</div>
					) : (
						<Button variant="primary" onClick={() => router.push("/login")}>Login</Button>
					)}
				</div>
			</div>
			{/* Hamburger Menu Button */}
			<button
				className="hidden max-[906px]:block"
				onClick={() => setIsMenuOpen(!isMenuOpen)}
				aria-label="Toggle menu"
			>
				<div className="space-y-2">
					<span className={`block h-0.5 w-6 bg-black transition-all ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
					<span className={`block h-0.5 w-6 bg-black transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
					<span className={`block h-0.5 w-6 bg-black transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
				</div>
			</button>

			{/* Mobile Menu */}
			<div className={`fixed top-0 left-0 w-full h-full bg-white z-50 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} max-[906px]:block hidden`}>
				<div className="p-4">
					<Link href="/" className="flex justify-between items-center mb-8">
						<img src="https://cdn.builder.io/api/v1/image/assets/TEMP/9b4a2606fc0d129ed5f9dc4774ede3ece5dba4f4" alt="Logo" className="h-[58px] w-[172px]" />
						<button onClick={() => setIsMenuOpen(false)} className="p-2">
							<span className="block h-0.5 w-6 bg-black rotate-45 translate-y-2.5"></span>
							<span className="block h-0.5 w-6 bg-black -rotate-45 -translate-y-2.5"></span>
						</button>
					</Link>
					<nav className="flex flex-col gap-6" aria-label="Mobile navigation">
						{HeaderLinks.map((link, index) => (
							<MobileLink key={index} title={link.title} href={link.href} onClick={() => setIsMenuOpen(false)} />
						))}
					</nav>
					<div className="flex flex-col gap-4 mt-8">
						<Button variant="secondary" className="w-full">AI Dashboard</Button>
						{isLogedin ? (
							<Button variant="primary" className="w-full" onClick={() => {
								localStorage.removeItem("isLoggedIn");
								setIsLogedin(false);
								router.push("/");
							}}>Log Out</Button>
						) : (
							<Button variant="primary" className="w-full" onClick={() => router.push("/login")}>Login</Button>
						)}
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;