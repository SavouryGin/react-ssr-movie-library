import Button from 'components/controls/button';
import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { FormContextProps, FormInput, FormProps } from 'types/controls';

export const FormContext = React.createContext({} as FormContextProps);

const Form = ({ className, onSubmit, inputs, initialValues, passValues, ...rest }: FormProps) => {
  const formClass = classNames('form', { [`${className}`]: !!className });
  const [formValues, setFormValues] = useState(initialValues);

  const onChangeInput = (e: React.ChangeEvent<FormInput>) => {
    const isCheckbox = e.target instanceof HTMLInputElement && e.target.type == 'checkbox';
    const name = e.target.name;
    const value = isCheckbox ? (e.target as HTMLInputElement).checked : e.target.value;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  useEffect(() => {
    if (passValues) {
      passValues(formValues);
    }
  }, [formValues]);

  return (
    <form className={formClass} aria-label='form' action={rest.action || '/'} onSubmit={onSubmit}>
      <FormContext.Provider
        value={{
          formValues,
          onChangeInput,
        }}
      >
        {inputs}
      </FormContext.Provider>
      <Button type='submit' isDisabled={!!rest.isSubmitDisabled} text={rest.submitButtonText} />
    </form>
  );
};

export default Form;
