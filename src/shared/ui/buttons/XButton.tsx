import React from "react";
import close from "../../../assets/images/icons/x.svg";

interface XButtonProps {
  onClick?: () => void;
  className?: string;
}

export const XButton: React.FC<XButtonProps> = ({ onClick, className }) => {
  return (
    <button className={className} onClick={onClick} autoFocus>
      <img src={close} alt="close" />
    </button>
  );
};
