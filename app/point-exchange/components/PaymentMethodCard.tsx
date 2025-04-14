import React from "react";

interface PaymentMethodCardProps {
  iconUrl: string;
  title: string;
  onClick?: () => void;
}

const PaymentMethodCard: React.FC<PaymentMethodCardProps> = ({
  iconUrl,
  title,
  onClick,
}) => {
  return (
    <div
      className="flex flex-col flex-1 px-11 pt-8 pb-5 rounded-3xl items-center bg-neutral-100 max-md:px-5 hover:bg-neutral-200 transition-colors cursor-pointer"
      onClick={onClick}
      aria-label="Payment method card"
    >
      <img
        src={iconUrl}
        alt={`${title} icon`}
        className="object-contain aspect-square w-[126px]"
        aria-label="Payment method card icon"
      />
      <div className="self-center mt-6" aria-label="Payment method card title">{title}</div>
    </div>
  );
};

export default PaymentMethodCard;