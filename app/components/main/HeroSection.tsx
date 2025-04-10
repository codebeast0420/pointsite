import React from "react";
import Image from "next/image";
import Button from "../layout/Button";
import UserAvatarStack from "../comps/UserAvatarStack";
import Toggle from "../svg/Toggle";
import HeroItem from "./HeroItem";
import MessageIcon from "../svg/MessageIcon";
import WriteIcon from "../svg/WriteIcon";
import LeftPenny from "@/app/assets/images/21.png"
import RightPenny from "@/app/assets/images/22.png"
import NewTag from "../svg/NewTag";
import DescLines from "../svg/DescLines";
import PSymbol from "../svg/PSymbol";

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
		<section className="flex flex-row items-center justify-around py-12 mt-12 max-[1100px]:p-8 max-[1100px]:gap-8 max-[1100px]:flex-col max-md:p-5">
			<div className="ml-[-7%]">
				<h1 className="mb-5 text-6xl font-bold max-sm:text-4xl">
					<span>Let AI take surveys</span>
					<br />
					<span className="bg-gradient-to-r from-[#c093ff] via-[#ffa9ec] to-[#FDB073] bg-clip-text text-transparent">
						& earn money
					</span>
				</h1>
				<p className="mb-5 text-lg font-semibold">
					Surveys, filled out for you. Points, earned in real-time.
				</p>
				<div className="flex gap-4 items-center mb-8">
					<UserAvatarStack />
					<p className="text-lg font-semibold text-[#A7A7C7]">
						1000+ active users
					</p>
				</div>
				<div className="flex gap-4">
					<Button variant="primary">Start Earning</Button>
					<Button variant="secondary">Get AI</Button>
				</div>
			</div>
			<div className="relative flex max-sm:mt-16">
				<Image
					src={LeftPenny}
					className="absolute bottom-[-64px] left-[-66%] z-10 w-[277px] max-sm:w-[150px]"
					alt="Left Penny"
					width={277}
					height={277}
				/>
				<div className="relative bg-gradient-to-r from-[#C093FF] via-[#FFA9EC] to-[#FFC65B] flex items-center justify-center h-[332px] max-sm:h-[200px] rounded-[30px] w-[332px] max-sm:w-[200px]">
					<div className="absolute left-[-10%] max-sm:left-[-25%] max-sm:p-2 p-4 bg-white rounded-3xl shadow-[0px_4px_40px_rgba(0,0,0,0.25)]">
						{HeroItems.map((item, index) => (
							<HeroItem key={index} {...item} />
						))}
					</div>
					<div className="absolute -top-5 max-sm:-top-10 p-5 w-56 max-sm:w-[150px] bg-white rounded-3xl max-sm:right-[-50px] right-[-100px] shadow-[0px_4px_40px_rgba(0,0,0,0.25)]">
						<NewTag />
						<DescLines />
						<img
							src="https://cdn.builder.io/api/v1/image/assets/TEMP/67ae0cdf8bffb0f65ba4329d56beb36d17775d67"
							alt="Coin"
							className="block mx-auto my-0 h-[80px] w-[80px] max-sm:h-[40px] max-sm:w-[40px]"
						/>
						<div className="flex gap-2 items-center justify-center">
							<PSymbol />
							<p className="mx-0 my-2 text-2xl font-extrabold text-center max-sm:text-sm">
								1,000 P
							</p>
						</div>
						<Button variant="primary" className="bg-[#8771EF] max-sm:text-xs max-sm:h-1 mx-auto my-0 h-2 w-4/5">
							GET
						</Button>
					</div>
					<div className="absolute max-sm:top-45 max-sm:text-base top-72 max-sm:h-10 h-16 text-2xl font-extrabold text-violet-500 bg-white rounded-3xl shadow-[0px_4px_40px_rgba(0,0,0,0.25)] max-sm:w-[130px] w-[163px] flex items-center justify-center">
						+ 10,000 P
					</div>
				</div>
				<Image src={RightPenny} className="absolute z-10 max-sm:right-[-45%] right-[-63%] max-sm:top-[-110px] top-[-127px] max-sm:w-[150px]" alt="Right Penny" width={216} height={216} />
			</div>
		</section>
	);
};

export default HeroSection;
