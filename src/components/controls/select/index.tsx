import React, { useContext, useState } from 'react';
import classNames from 'classnames';
import style from './style.module.scss';
import { FormContext } from 'components/controls/form';
import { SelectProps } from 'types/controls';

const Select = ({ options, className, name, defaultOption, onChange, ...rest }: SelectProps) => {
  const formContext = useContext(FormContext);
  const { onChangeInput } = formContext;
  const id = rest.id || `select_${name}`;
  const selectClass = classNames({ [`${className}`]: !!className });
  const [selectedValue, setSelectedValue] = useState(defaultOption);

  const optionList = options.map((item) => {
    return (
      <option value={item.value} key={`option-${item.value}`}>
        {item.option}
      </option>
    );
  });

  const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = options.filter((item) => item.value.toString() === e.target.value);
    setSelectedValue(selected[0]);

    if (onChangeInput) {
      onChangeInput(e);
    }
    if (onChange) {
      onChange();
    }
    if (rest.passOption) {
      rest.passOption(selected[0]);
    }
  };

  return (
    <div className={selectClass}>
      {rest.label && (
        <label className={style.label} htmlFor={id}>
          {rest.label}
        </label>
      )}
      <select
        name={name}
        id={id}
        value={selectedValue?.value}
        form={rest.formId}
        disabled={rest.isDisabled}
        required={rest.isRequired}
        className={style.field}
        onChange={onSelectChange}
        onBlur={rest.onBlur}
        onFocus={rest.onFocus}
      >
        {optionList}
      </select>
    </div>
  );
};

export default Select;
