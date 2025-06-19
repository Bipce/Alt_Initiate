import React, { type ReactNode } from "react";

interface IProps {
  children: ReactNode;
  color?: string;
  onHandleOnClick?: () => void;
}

const DropDownButton: React.FC<IProps> = ({ children, color, onHandleOnClick }) => {
  return (
    <button onClick={onHandleOnClick}
            className={`cursor-pointer px-4 py-2 text-sm hover:bg-gray-700 rounded-md flex items-center gap-2 w-full ${color}`}>
      {children}</button>
  );
};

export default DropDownButton;