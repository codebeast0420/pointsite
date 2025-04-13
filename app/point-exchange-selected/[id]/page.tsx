"use client";
import React from "react";
import { useParams } from "next/navigation";
import Header from "@/components/layout/Header";
import { BackButton } from "../components/BackButton";
import { GiftCardSelector } from "../components/GiftCardSelector";
import { ExchangeDetails } from "../components/ExchangeDetail";
import { ExchangeProcedure } from "../components/ExchangeProcedure";
import Footer from "@/components/layout/Footer";
import { Layout } from "@/components/layout/Layout";
import { PaymentCardImg } from "@/constants/constants";

type PaymentMethodId = keyof typeof PaymentCardImg;

const GiftCardExchange: React.FC = () => {
	const { id } = useParams();
	return (
		<Layout>
			<div className="px-12 max-md:px-2 w-full max-w-[1440px] max-md:max-w-[991px]">
				<Header />
				<main className="pl-20 max-md:pl-5 pr-10 max-md:pr-5">
					<BackButton className="max-md:ml-5"/>
					<GiftCardSelector id={id as PaymentMethodId} />
					<div className="py-0 max-md:px-5 max-md:py-0">
						<ExchangeDetails />
						<ExchangeProcedure />
					</div>
				</main>
			</div>
			<Footer />
		</Layout>
	);
};

export default GiftCardExchange;
