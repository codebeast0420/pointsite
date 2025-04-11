"use client";
import * as React from "react";
import { useState } from "react";
import Header from "@/components/layout/Header";
import { HeroSection } from "./components/HeroSection";
import { AboutPoints } from "../how-it-works/components/AboutPoints";
import Footer from "@/components/layout/Footer";
import { Layout } from "@/components/layout/Layout";
import { PaymentSection } from "./components/PaymentSection";

function PointExchange() {
	const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("bank");

	return (
		<Layout>
			<div className="px-12 max-md:px-2">
				<Header />
				<HeroSection />
				<PaymentSection
					selectedPaymentMethod={selectedPaymentMethod}
					onPaymentMethodChange={setSelectedPaymentMethod}
				/>
				<AboutPoints />
			</div>
				<Footer className="mt-30" />
		</Layout>
	);
}

export default PointExchange;
