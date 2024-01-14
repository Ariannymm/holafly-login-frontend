import React from "react";
import ButtonBase from "../../buttons/ButtonBase";
import BadgeStatus from "../../badgeStatus/badgeStatus";
import Comsumption from "../../comsumption/Comsumption";

interface CardProps {
    cardData: {
        status: string;
        plan: string;
        dateStart: string,
        dateEnd: string,
        comsumption: {
            totalComsumption: number;
        };
        flag: string;
        country: string;
    };
}

const Card: React.FC<CardProps> = ({ cardData }) => {
    const { status, plan, dateStart, dateEnd, country } = cardData;

    return (
        <div className="w-60 h-64 px-6 py-8 shadow-xl shadow-gray-300 rounded-xl flex flex-col justify-between gap-2">
            <div className="flex justify-between gap-3 mb-2">
                <div className="flex flex-col gap-3">
                    <BadgeStatus cardData={cardData}/>
                    <h2 className="font-medium text-sm text-gray-700">{country}</h2>
                    {status === "Expired" && (
                        <p className="text-gray-500 font-medium text-sm">{dateStart} / {dateEnd}</p>
                    )}
                    <p className="text-gray-400 font-medium text-xs">{plan}</p>
                </div>
                <Comsumption cardData={cardData}/>
            </div>
            <div className="flex flex-col gap-1">
            {status === "Active" && (
                <>
                    <ButtonBase className='bg-white hover:bg-gray-50 border border-neutral-300 hover:border-neutral-400 text-gray-500 hover:text-gray-600'>View details</ButtonBase>
                    <ButtonBase className='bg-green-300 hover:bg-green-400 text-white'>Add more data</ButtonBase>
                </>
            )}
            {status === "Pending" && (
            <ButtonBase className="bg-gradient-to-r from-red-400 to-red-500 hover:from-red-500 hover:to-red-600 text-white">View details and install</ButtonBase>
            )}
            </div>
        </div>
      );
};

export default Card;