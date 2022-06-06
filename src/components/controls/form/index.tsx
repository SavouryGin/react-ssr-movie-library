import Button from 'components/controls/button';
import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import style from './style.module.scss';
import { FormContextProps, FormInput, FormProps, MultiSelectOption } from 'types/controls';

export const FormContext = React.createContext({} as FormContextProps);

const Form = ({ className, onSubmit, inputs, initialValues, passValues, ...rest }: FormProps) => {
  const formClass = classNames({ [`${className}`]: !!className });
  const [formValues, setFormValues] = useState(initialValues);
  const [formKey, setFormKey] = useState(0);

  const onChangeInput = (e: React.ChangeEvent<FormInput>) => {
    const isCheckbox = e.target instanceof HTMLInputElement && e.target.type == 'checkbox';
    const name = e.target.name;
    const value = isCheckbox ? (e.target as HTMLInputElement).checked : e.target.value;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const onChangeMultiSelect = (name: string, options: MultiSelectOption[]) => {
    setFormValues({
      ...formValues,
      [name]: options,
    });
  };

  const resetValues = () => {
    setFormValues({ ...initialValues });
    // Rerender form after reset
    setFormKey(formKey + 1);
  };

  useEffect(() => {
    if (passValues) {
      passValues(formValues);
    }
  }, [formValues]);

  return (
    <form className={formClass} aria-label='form' action={rest.action || '/'} onSubmit={onSubmit} onReset={resetValues} key={formKey}>
      <FormContext.Provider
        value={{
          formValues,
          onChangeInput,
          onChangeMultiSelect,
        }}
      >
        {inputs}
      </FormContext.Provider>
      <div className={style.buttons}>
        {rest.hasResetButton && <Button text='Reset' view='secondary' type='reset' />}
        <Button type='submit' isDisabled={!!rest.isSubmitDisabled} text={rest.submitButtonText} />
      </div>
    </form>
  );
};

export default Form;
