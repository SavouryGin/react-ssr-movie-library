import React from "react";

import "./styles.scss";

// Stateless functional component
const Button = ({ type, text, onClick, ...rest }) => {
  const buttonText = text || "Button";
  const buttonType = type || "button";

  return (
    <button
      className="button"
      type={buttonType}
      onClick={onClick}
      title={rest.title}
      disabled={rest.isDisabled}
    >
      {buttonText}
    </button>
  );
};

export default Button;
