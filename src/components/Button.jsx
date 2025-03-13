import React from "react";
import "../css/Button.css";

const Button = ({ text, icon, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="py-3 px-5 d-flex justify-content-center gap-3 w-100"
    >
      {icon && <img src={icon} alt="button icon" />}
      <span>{text}</span>
    </button>
  );
};

export default Button;
