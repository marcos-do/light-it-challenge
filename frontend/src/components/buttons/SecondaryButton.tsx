import React from "react";
import "./SecondaryButton.css";

interface SecondaryButtonProps {
  children?: React.JSX.Element | string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({ children, onClick, type }) => {
  return (
    <button type={type ?? "button"} className="secondary-button" onClick={onClick}>
      {children}
    </button>
  );
};

export default SecondaryButton;
