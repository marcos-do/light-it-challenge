import React from "react";
import "./PrimaryButton.css";

interface PrimaryButtonProps {
  children?: React.JSX.Element | string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ children, onClick, type }) => {
  return (
    <button type={type ?? "button"} className="primary-button" onClick={onClick}>
      {children}
    </button>
  );
};

export default PrimaryButton;
