import React from "react";
import PropTypes from "prop-types";
import Label from "../label";
import FormContext from "../form-context";
import "./styles.scss";

// Class component extending standard React.Component
class TextInput extends React.Component {
  static contextType = FormContext;

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {
      value: props.defaultValue || "",
    };
  }

  onChange(e) {
    this.setState({ value: e.target.value });
    const { onChangeFormInput } = this.context;
    if (this.props.onChange) this.props.onChange();
    if (onChangeFormInput) onChangeFormInput(e);
  }

  render() {
    const { label, name, placeholder, className, ...rest } = this.props;
    const autocompleteValue = rest.isAutocomplete ? "on" : "off";
    const inputId = `text-input-${name}`;
    const containerClassName = className
      ? `text-input ${className}`
      : "text-input";

    return (
      <div className={containerClassName}>
        <Label labelText={label} inputId={inputId} />
        <input
          type="text"
          className="text-input__field"
          id={inputId}
          name={name}
          placeholder={placeholder}
          value={this.state.value}
          onChange={this.onChange}
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
}

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  onChangeFormInput: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  isDisabled: PropTypes.bool,
  isReadOnly: PropTypes.bool,
  isAutocomplete: PropTypes.bool,
  maxLength: PropTypes.number,
  minLength: PropTypes.number,
};

export default TextInput;
