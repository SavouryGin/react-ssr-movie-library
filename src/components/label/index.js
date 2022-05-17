import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

// Functional component created with React.createElement()
const Label = (props) =>
  React.createElement(
    "label",
    { id: props.inputId, className: "label" },
    props.labelText
  );

Label.propTypes = {
  labelText: PropTypes.string.isRequired,
  inputId: PropTypes.string.isRequired,
};

export default Label;
