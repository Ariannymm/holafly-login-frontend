import React from "react";

interface BadgeStatusProps {
  cardData: {
    status: string;
    flag: string;
};
}

const statuses: { [key: string]: string } = {
  Active: "bg-green-100",
  Pending: "bg-orange-200",
  Expired: "bg-red-200",
};

const BadgeStatus: React.FC<BadgeStatusProps> = ({ cardData }) => {
  const { status, flag } = cardData;

  const bgClass = statuses[status];

  return (
    <div className={`flex items-center w-20 rounded-xl ${bgClass}`}>
        <img
            className="w-5 h-5 md:w-6 md:h-6  rounded-xl"
            src={flag} alt="Flag"
        />
        <p className="text-xs text-gray-600 mr-auto ml-auto">{status}</p>
    </div>
  );
};

export default BadgeStatus;