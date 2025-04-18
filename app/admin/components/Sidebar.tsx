'use client'
import * as React from "react";
import { Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Logo from "@/assets/images/logo.svg";

export const Sidebar: React.FC<{ navItems: string[], activeItem: string, setActiveItem: (item: string) => void, setIsSurveyDetailOpen: (isOpen: boolean) => void }> = ({ navItems, activeItem, setActiveItem, setIsSurveyDetailOpen }) => {
	const [isOpen, setIsOpen] = React.useState(false);
	const router = useRouter();

	return (
		<>
			<button
				className="md:hidden fixed top-4 left-4 p-2 rounded-lg bg-white shadow-md"
				onClick={() => setIsOpen(!isOpen)}
				aria-label="Toggle menu"
			>
				<Menu size={24} />
			</button>

			<aside
				className={`w-[28%] max-md:fixed max-md:inset-y-0 max-md:left-0 max-md:w-full max-md:transform max-md:transition-transform max-md:duration-300 ${isOpen ? 'max-md:translate-x-0' : 'max-md:-translate-x-full'
					}`}
				aria-label="Admin Sidebar"
			>

				<div className="flex min-h-[100vh] justify-between flex-col grow items-center pt-8 pb-16 w-full font-semibold text-black bg-white max-md:mt-10">
					<div className="flex flex-col items-center w-full">
						<Image
							src={Logo}
							alt="Admin logo"
							className="object-contain max-w-full w-[172px]"
						/>
						<h2 className="text-xl">Admin</h2>

						<nav
							className="flex flex-col items-start self-stretch px-2.5 mt-16 text-lg max-md:mt-10"
							aria-label="Main navigation"
						>
							{navItems.map((item, index) => (
								<button
									key={item}
									className={`text-left cursor-pointer self-stretch px-6 py-4 whitespace-nowrap rounded-xl max-md:px-5 ${item === activeItem
										? " bg-neutral-100 "
										: ""
										} ${index === 0 ? "mt-0" : ""}`}
									aria-current={item === activeItem ? "page" : undefined}
									aria-label={item}
									onClick={() => {
										setActiveItem(item);
										setIsSurveyDetailOpen(false);
									}}
								>
									{item}
								</button>
							))}
						</nav>
					</div>
					<div className="w-full px-2.5">
						<button
							className="px-6 py-4 mt-auto text-lg cursor-pointer"
							onClick={() => {
								localStorage.removeItem("isLoggedIn");
								router.push("/");
							}}
							aria-label="Log out"
						>
							Log out
						</button>
					</div>
				</div>
			</aside>
			{isOpen && (
				<div
					className="fixed inset-0 bg-white bg-opacity-50 z-40 md:hidden"
					aria-label="Overlay"
				>
					<button
						className="md:hidden fixed top-4 left-4 p-2 rounded-lg bg-white shadow-md"
						onClick={() => setIsOpen(!isOpen)}
						aria-label="Toggle menu"
					>
						<X size={24} />
					</button>
					<div
						className="flex flex-col items-start self-stretch px-2.5 mt-20 text-lg"
						aria-label="Admin Mobile Sidebar"
					>
						{navItems.map((item, index) => (
							<button
								key={item}
								onClick={() => {
									setActiveItem(item);
									setIsOpen(false);
								}}
								className={`text-left cursor-pointer self-stretch px-6 py-4 whitespace-nowrap rounded-xl max-md:px-5 ${item === activeItem
									? " bg-neutral-100 "
									: ""
									} ${index === 0 ? "mt-0" : ""}`}
								aria-label={item}
							>
								{item}
							</button>
						))}
						<button className="px-6 py-4 mt-auto text-lg cursor-pointer" onClick={() => {
							localStorage.removeItem("isLoggedIn");
							router.push("/");
						}}
							aria-label="Log out"
						>
							Log out
						</button>
					</div>
				</div>
			)}
		</>
	);
};
