import React from "react";

interface ButtonBaseProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const ButtonBase: React.FC<ButtonBaseProps> = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full rounded-xl px-5 py-3 text-xs font-medium ${className}`}
    >
      {children}
    </button>
  );
};

export default ButtonBase;