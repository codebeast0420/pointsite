import React from "react";
import { CategoryTitle } from "@/components/comps/CategoryTitle";
import PaymentMethodCard from "./PaymentMethodCard";
import { PaymentCardImg } from "@/constants/constants";
import { useRouter } from "next/navigation";
interface PaymentSectionProps {
	selectedPaymentMethod: string;
	onPaymentMethodChange: (method: string) => void;
}


export const PaymentSection: React.FC<PaymentSectionProps> = ({
	selectedPaymentMethod,
	onPaymentMethodChange,
}) => {
	const router = useRouter();
	return (
		<div className="flex flex-col mb-60 gap-4 mt-20" aria-label="Payment section">
			<CategoryTitle title="Select exchange option" aria-label="Payment section title" />
			<div className="flex gap-10 justify-around max-sm:gap-5 px-10" aria-label="Payment section content">
				<div className="grid grid-cols-5 max-md:grid-cols-3 max-sm:grid-cols-1 gap-5 self-center mt-8 w-full text-base font-bold text-center text-black max-md:max-w-full">
					{Object.values(PaymentCardImg).map((paymentMethod) => (
						<PaymentMethodCard
							key={paymentMethod.title}
							iconUrl={paymentMethod.icon.src}
							title={paymentMethod.title}
							onClick={() => {
								router.push(`/point-exchange-selected/${paymentMethod.id}`);
							}}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

