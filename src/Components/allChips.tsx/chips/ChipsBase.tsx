import React from "react";

interface ChipProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Chip: React.FC<ChipProps> = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`w-16 md:w-24 p-1 rounded-2xl text-xs md:text-sm font-medium bg-neutral-50 border border-neutral-300 hover:border-neutral-400 focus:border-none focus:text-white text-neutral-500 hover:text-gray-600 ${className}`}
    >
      {children}
    </button>
  );
};

export default Chip;