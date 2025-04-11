import Step1Img from "@/assets/images/Group 1000004591.png";
import Step2Img from "@/assets/images/Group 1000004588.png";
import Step3Img from "@/assets/images/Group 1000004587.png";
import Step4Img from "@/assets/images/Group 1000004592.png";
import Step5Img from "@/assets/images/Group 1000004593.png";
import Step6Img from "@/assets/images/Group 1000004596.png";
import Redemption1 from "@/assets/images/redemption1.png";
import Redemption2 from "@/assets/images/redemption2.png";
import Redemption3 from "@/assets/images/redemption3.png";

export const FAQs = [
	{
		title: "What is Raku Earn?",
		description: "Raku Earn is a point-earning platform where you can complete surveys and exchange points for real rewards. It comes with a built-in AI assistant that fills out surveys for you automatically."
	},
	{
		title: "How do I get started?",
		description: "Create an account on the Raku Earn point site, then create a Raku Earn AI dashboard account. Next, install the Raku Earn Chrome extension, enter your user details, and you're ready to start using the automation feature."
	},
	{
		title: "Do I need to fill out surveys myself?",
		description: "No. Our AI tool can auto-fill surveys for you. Just make sure your profile information is complete in the Raku Earn AI dashboard."
	},
	{
		title: "Can I use the AI on other sites?",
		description: "No. Raku Earn AI only works within the official Raku Earn point site. It does not support other external point sites."
	},
	{
		title: "How does this actually work?",
		description: "Raku Earn AI works as an in-browser automation tool. This means it operates directly on your device, not on a remote server. To keep it running properly, make sure your survey list page is open and your computer stays powered on. If you close the tab or shut down your device, the AI will stop working."
	},
	{
		title: "Is Raku Earn free to use?",
		description: "Yes. Creating an account and using the AI tool is completely free."
	},
	{
		title: "How can I redeem my points?",
		description: "Go to the 'Point Exchange' page and choose your payout method (e.g., PayPay, bank transfer, or gift cards). Click apply and you will receive your payout within 12 hours."
	},
	{
		title: "The AI didn't work. What should I do?",
		description: "Some forms may have unique layouts or CAPTCHAs that cause issues. Please report it to us (info@rakuearn.com), and we'll continue improving the AI's accuracy."
	},
]

export const howToUseSteps = [
	{
		number: 1,
		title: "Sign in & install extension",
		description:
			"Sign up in seconds and add our Chrome extension to get started.",
		image: Step1Img
	},
	{
		number: 2,
		title: "Fill your details",
		description: "Input your details so the AI can auto-fill surveys accurately.",
		image: Step2Img
	},
	{
		number: 3,
		title: "Turn on the Raku Earn AI",
		description: "Open the extension within survey list page and activate the AI.",
		image: Step3Img
	},
	{
		number: 4,
		title: "Start earning points ",
		description: "Sit back and let AI automatically earn you points.",
		image: Step4Img
	},
	{
		number: 5,
		title: "Track your progress",
		description: "Check the AI performance from your dashboard.",
		image: Step5Img
	},
	{
		number: 6,
		title: "Exchange your points",
		description: "Redeem your points for real cash or digital rewards anytime.",
		image: Step6Img
	},
];

export const redemptionSteps = [
	{
		number: 1,
		title: "Open the exchange page",
		description: "Head to Point Exchange page.",
		image: Redemption1,
	},
	{
		number: 2,
		title: "Choose your payout option",
		description: "Select from PayPay, bank transfer, gift cards, and more.",
		image: Redemption2,
	},
	{
		number: 3,
		title: "Confirm and wait for payout",
		description: "Submit your request, your rewards will be on the way shortly.",
		image: Redemption3,
	},
];

interface RedemptionOption {
	icon: string;
	title: string;
}

export const RedemptionOptions: RedemptionOption[] = [
	{ icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a78f319276fc58a8b12544a443d0eee2d8512a89", title: "Bank Transfer" },
	{ icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e9dfd132c73fa272965be834ab54b75830d886ef", title: "Amazon" },
	{ icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e6a28d88640d3adade107f7d116324ff65f0f679", title: "Apple Store" },
	{ icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f0570a2fecc2ea7487a08aa6620088fd00b0c6f4", title: "Google Play" },
	{ icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a22db23b7f6de0aee8c7b5f2c141537631c22889", title: "PayPay" },
];

export const PaymentCardImg = {
	bankTransfer: { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a78f319276fc58a8b12544a443d0eee2d8512a89", title: "Bank Transfer", id: "bankTransfer" },
	amazon: { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e9dfd132c73fa272965be834ab54b75830d886ef", title: "Amazon", id: "amazon" },
	apple: { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e6a28d88640d3adade107f7d116324ff65f0f679", title: "Apple Store", id: "apple" },
	googlePlay: { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f0570a2fecc2ea7487a08aa6620088fd00b0c6f4", title: "Google Play", id: "googlePlay" },
	payPay: { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a22db23b7f6de0aee8c7b5f2c141537631c22889", title: "PayPay", id: "payPay" },
};

export const ExchangeDetails = [
	{
		title: "Exchange rate",
		content: "1 Point = 1 Yen",
		rounded: "rounded-tl-3xl",
		className: "border-b border-solid border-b-zinc-300",
	},
	{
		title: "Exchange delivery",
		content: "~12 hours",
		rounded: "",
		className: "border-b border-solid border-b-zinc-300",
	},
	{
		title: "Exchange fee",
		content: "0 Yen",
		rounded: "rounded-bl-3xl",
		className: "",
	},
];

export const ExchangeProcedure = [
	{
		title: "Step 1",
		description: "Select the exchange option and the amount you’d like to redeem.",
		rounded: "rounded-tl-3xl",
		className: "border-b border-solid border-b-zinc-300",
	},
	{
		title: "Step 2",
		description: "Confirm your selection and then click Apply.",
		rounded: "",
		className: "border-b border-solid border-b-zinc-300",
	},
	{
		title: "Step 3",
		description: "A URL to obtain your digital gift will be sent to the email address registered.",
		rounded: "",
		className: "border-b border-solid border-b-zinc-300",
	},
	{
		title: "Step 4",
		description: "Click the URL in the email to access and claim your digital gift.",
		rounded: "rounded-bl-3xl",
		className: "",
	},
];

export const HistoryItems = [
	{
		title:
			"Survey title will go here as you can see the max length if there is more",
		points: 1000,
		date: "4/9/2024",
		imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/aa11d8c4fd8d99e7062aea7428f8d8d69a69465a",
	},
	{
		title:
			"Survey title will go here as you can see the max length if there is more",
		points: 1000,
		date: "4/9/2024",
		imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/aa11d8c4fd8d99e7062aea7428f8d8d69a69465a",
	},
	{
		title:
			"Survey title will go here as you can see the max length if there is more",
		points: 1000,
		date: "4/9/2024",
		imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/aa11d8c4fd8d99e7062aea7428f8d8d69a69465a",
	},
	{
		title:
			"Survey title will go here as you can see the max length if there is more",
		points: 1000,
		date: "4/9/2024",
		imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/aa11d8c4fd8d99e7062aea7428f8d8d69a69465a",
	},
];

export interface ExchangeHistoryItem {	
	image: string;
	title: string;
	amount: string;
	status: "pending" | "complete" | "declined";
	date: string;
}
export const ExchangeHistoryItems: ExchangeHistoryItem[] = [
	{
		image: PaymentCardImg.amazon.icon,
		title: "Amazon gift card",
		amount: "1,000 yen",
		status: "pending",
		date: "4/9/2024",
	},
	{
		image: PaymentCardImg.googlePlay.icon,
		title: "Google play gift card",
		amount: "300 yen",
		status: "complete",
		date: "4/9/2024",
	},
	{
		image: PaymentCardImg.googlePlay.icon,
		title: "Google play gift card",
		amount: "300 yen",
		status: "declined",
		date: "4/9/2024",
	},
];

export const HeaderLinks =[
	{title: "How it Works", href: "/how-it-works"},
	{title: "Survey List", href: "/survey-list"},
	{title: "Point Exchange", href: "/point-exchange"},
	// {title: "My Account", href: "/me"}
]