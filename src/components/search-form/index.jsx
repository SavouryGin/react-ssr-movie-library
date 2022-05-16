import React from "react";
import FormContext from "../context";

class SearchForm extends React.Component {
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
        aria-label="form"
        action={this.props.action || "/"}
        onSubmit={this.onSubmit}
      >
        <FormContext.Provider
          value={{
            formValues: this.state.formValues,
            onChangeFormInput: this.onChangeFormInput,
          }}
        >
          {this.props.inputs}
        </FormContext.Provider>
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default SearchForm;
