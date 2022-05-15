import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  isDisabled: PropTypes.bool,
  isReadOnly: PropTypes.bool,
  isAutocomplete: PropTypes.bool,
  maxLength: PropTypes.number,
  minLength: PropTypes.number,
};

// Functional stateless component
function TextInput({ name, label, placeholder = "Type here...", ...rest }) {
  const autocompleteValue = rest.isAutocomplete ? "on" : "off";
  const inputId = `text-input-${name}`;

  return (
    <div className="text-input">
      <label className="text-input__label" htmlFor={inputId}>
        {label}
      </label>
      <input
        type="text"
        className="text-input__field"
        id={inputId}
        name={name}
        placeholder={placeholder}
        onChange={rest.onChange}
        onBlur={rest.onBlur}
        onFocus={rest.onFocus}
        disabled={rest.isDisabled}
        readOnly={rest.isReadOnly}
        maxLength={rest.maxLength}
        minLength={rest.minLength}
        autoComplete={autocompleteValue}
      />
    </div>
  );
}

export default TextInput;
