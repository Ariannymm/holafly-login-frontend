import React from "react";

interface ComsumptionProps {
  cardData: {
    status: string;
    plan: string;
    comsumption: {
      totalComsumption: number;
    };
  };
}

const statuses: { [key: string]: string } = {
  Active: "border-green-200",
  Pending: "border-red-200",
};

const Comsumption: React.FC<ComsumptionProps> = ({ cardData }) => {
  const {
    status,
    plan,
    comsumption,
  } = cardData;

  if (cardData && cardData.comsumption) {
    const comsumptionValue = (comsumption?.totalComsumption / 1000000).toFixed(1);
    const comsumptionValueDisplay = comsumptionValue.endsWith(".0")
    ? Math.floor(+comsumptionValue) 
    : comsumptionValue;
    const comsumptionTotal = plan?.match(/(\d+)GB/)?.[1] ?? 0;

    const bgClass = statuses[status];

    return (
      <div className={`bg-transparent rounded-full border-2 w-14 h-14 md:w-16 md:h-16 ml-2 lg:ml-3 flex flex-col items-center justify-center ${bgClass}`}>
        <span className="text-sm font-medium">{comsumptionValueDisplay} GB</span>
        <span className="text-xs font-medium">/ {comsumptionTotal}GB</span>
      </div>
    );
  } else {
    return (
      <div></div>
    );
  }
};

export default Comsumption;