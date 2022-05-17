import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

// Stateless functional component
const Button = ({ type, text, onClick, className, ...rest }) => {
  const buttonText = text || "Button";
  const buttonType = type || "button";
  const buttonClassName = className ? `button ${className}` : "button";

  return (
    <button
      className={buttonClassName}
      type={buttonType}
      onClick={onClick}
      title={rest.title}
      disabled={rest.isDisabled}
    >
      {buttonText}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  title: PropTypes.string,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
