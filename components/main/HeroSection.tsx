import React from "react";
import Image from "next/image";
import Button from "../layout/Button";
import UserAvatarStack from "../comps/UserAvatarStack";
import Toggle from "../svg/Toggle";
import LandHero from "@/assets/images/land_hero.png"
import MessageIcon from "../svg/MessageIcon";
import WriteIcon from "../svg/WriteIcon";

const HeroSection: React.FC = () => {
	const HeroItems = [
		{
			value: "AI",
			icon: <Toggle />,
			className: "text-sm font-bold",
			reverse: true,
		},
		{
			value: "8,000 P",
			icon: <MessageIcon />,
			className: "text-violet-500",
			reverse: false,
		},
		{
			value: "50",
			icon: <WriteIcon />,
			className: "text-orange-500",
			reverse: false,
		},
	];

	return (
		<section className="flex flex-row items-center justify-around max-[1100px]:p-8 max-[1100px]:gap-8 max-[1100px]:flex-col max-md:p-5 mt-[30px]">
			<div className="ml-[7%]">
				<h1 className="mb-8 text-5xl font-bold max-sm:text-4xl">
					<span>Let AI take surveys</span>
					<br />
					<span className="bg-gradient-to-r from-[#c093ff] via-[#ffa9ec] to-[#FDB073] bg-clip-text text-transparent">
						& earn money
					</span>
				</h1>
				<p className="mb-5 text-lg font-semibold">
					Surveys, filled out for you. Points, earned in real-time.
				</p>
				<div className="flex gap-4 items-center mb-16">
					<UserAvatarStack />
					<p className="text-lg font-semibold text-[#A7A7C7]">
						1000+ active users
					</p>
				</div>
				<div className="flex gap-4 mt-8">
					<Button variant="primary">Start Earning</Button>
					<Button variant="secondary">Get AI</Button>
				</div>
			</div>
			<div className="relative mt-[-50px] flex max-sm:mt-4">
				<Image src={LandHero} alt="Land Hero" width={737} height={538} />
			</div>
		</section>
	);
};

export default HeroSection;
