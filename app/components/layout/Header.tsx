import React, { useState } from "react";
import Button from "./Button";

const Header: React.FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<header className="flex items-center justify-between py-8">
			<div className="flex items-center gap-10">
				<a href="/" className="text-2xl font-bold">
					<img src="https://cdn.builder.io/api/v1/image/assets/TEMP/9b4a2606fc0d129ed5f9dc4774ede3ece5dba4f4" alt="Logo" className="h-[58px] w-[172px]" />
				</a>
				<nav className="flex gap-10 max-sm:hidden" aria-label="Main navigation">
					<a href="#how-it-works" className="text-base font-bold text-black">
						How it Works
					</a>
					<a href="#survey-list" className="text-base font-bold text-black">
						Survey List
					</a>
					<a href="#point-exchange" className="text-base font-bold text-black">
						Point Exchange
					</a>
				</nav>
			</div>
			<div className="flex gap-2.5 max-sm:hidden">
				<Button variant="secondary">Get AI</Button>
				<Button variant="primary">Login</Button>
			</div>

			{/* Hamburger Menu Button */}
			<button
				className="hidden max-sm:block"
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
			<div className={`fixed top-0 left-0 w-full h-full bg-white z-50 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} max-sm:block hidden`}>
				<div className="p-4">
					<div className="flex justify-between items-center mb-8">
						<img src="https://cdn.builder.io/api/v1/image/assets/TEMP/9b4a2606fc0d129ed5f9dc4774ede3ece5dba4f4" alt="Logo" className="h-[58px] w-[172px]" />
						<button onClick={() => setIsMenuOpen(false)} className="p-2">
							<span className="block h-0.5 w-6 bg-black rotate-45 translate-y-2.5"></span>
							<span className="block h-0.5 w-6 bg-black -rotate-45 -translate-y-2.5"></span>
						</button>
					</div>
					<nav className="flex flex-col gap-6" aria-label="Mobile navigation">
						<a href="#how-it-works" className="text-xl font-bold text-black" onClick={() => setIsMenuOpen(false)}>
							How it Works
						</a>
						<a href="#survey-list" className="text-xl font-bold text-black" onClick={() => setIsMenuOpen(false)}>
							Survey List
						</a>
						<a href="#point-exchange" className="text-xl font-bold text-black" onClick={() => setIsMenuOpen(false)}>
							Point Exchange
						</a>
					</nav>
					<div className="flex flex-col gap-4 mt-8">
						<Button variant="secondary" className="w-full">Get AI</Button>
						<Button variant="primary" className="w-full">Login</Button>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;