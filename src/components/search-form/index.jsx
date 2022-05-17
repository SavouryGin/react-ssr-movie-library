import React from "react";
import PropTypes from "prop-types";
import FormContext from "../form-context";
import Button from "../button";
import "./styles.scss";

// Class component extending React.PureComponent
class SearchForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { formValues: props.initialValues };
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.passValues(this.state.formValues);
  };

  onChangeFormInput = (e) => {
    const isCheckbox =
      e.target instanceof HTMLInputElement && e.target.type === "checkbox";
    const name = e.target.name;
    const value = isCheckbox ? e.target.checked : e.target.value;

    this.setState((prevState) => ({
      formValues: { ...prevState.formValues, [name]: value },
    }));
  };

  render() {
    const { action, isSubmitDisabled, formChildren } = this.props;

    return (
      <form
        className="search-form"
        action={action || "/"}
        onSubmit={this.onSubmit}
      >
        <FormContext.Provider
          value={{
            formValues: this.state.formValues,
            onChangeFormInput: this.onChangeFormInput,
          }}
        >
          {formChildren}
        </FormContext.Provider>
        <Button type="submit" text="Search" isDisabled={isSubmitDisabled} />
      </form>
    );
  }
}

SearchForm.propTypes = {
  initialValues: PropTypes.object.isRequired,
  formChildren: PropTypes.element.isRequired,
  passValues: PropTypes.func,
  action: PropTypes.string,
  isSubmitDisabled: PropTypes.bool,
};

export default SearchForm;
