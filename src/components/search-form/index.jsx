import React from "react";
import PropTypes from "prop-types";
import FormContext from "../form-context";
import Button from "../button";

// Class component extending React.PureComponent
class SearchForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { formValues: props.initialValues };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeFormInput = this.onChangeFormInput.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.passValues(this.state.formValues);
  }

  onChangeFormInput(e) {
    const isCheckbox =
      e.target instanceof HTMLInputElement && e.target.type === "checkbox";
    const name = e.target.name;
    const value = isCheckbox ? e.target.checked : e.target.value;
    this.setState((prevState) => ({
      formValues: { ...prevState.formValues, [name]: value },
    }));
  }

  render() {
    return (
      <form
        className="search-form"
        action={this.props.action || "/"}
        onSubmit={this.onSubmit}
      >
        <FormContext.Provider
          value={{
            formValues: this.state.formValues,
            onChangeFormInput: this.onChangeFormInput,
          }}
        >
          {this.props.formChildren}
        </FormContext.Provider>
        <Button
          type="submit"
          text="Search"
          isDisabled={this.props.isSubmitDisabled}
        />
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
