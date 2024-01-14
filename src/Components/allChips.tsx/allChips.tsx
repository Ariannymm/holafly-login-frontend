import React from 'react';
import Chip from './chips/ChipsBase';

interface AllChipsProps {
    handleFilter: (status: string) => void;
}

const AllChips: React.FC<AllChipsProps> = ({ handleFilter }) => {
    return (
        <div className="flex gap-1 md:gap-4">
            <Chip onClick={() => handleFilter("All")} className="focus:bg-gray-200">All</Chip>
            <Chip onClick={() => handleFilter("Active")} className="focus:bg-green-300">Active</Chip>
            <Chip onClick={() => handleFilter("Pending")} className="focus:bg-orange-300">Pending</Chip>
            <Chip onClick={() => handleFilter("Expired")} className="focus:bg-red-300">Expired</Chip>
        </div>
    );
};

export default AllChips;