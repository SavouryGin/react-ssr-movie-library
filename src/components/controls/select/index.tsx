import React, { useContext, useMemo, useState } from 'react';
import classNames from 'classnames';
import style from './style.module.scss';
import { FormContext } from 'components/controls/form';
import { FormContextProps, SelectEntity, SelectProps } from 'types/controls';

const Select = ({ options, className, name, defaultOption, onChange, passOption, ...rest }: SelectProps) => {
  const [selectedValue, setSelectedValue] = useState<SelectEntity | undefined>(defaultOption);
  const formContext = useContext<FormContextProps>(FormContext);

  const { onChangeInput } = formContext;
  const id = useMemo(() => rest.id || `select_${name}`, [rest.id]);
  const selectClass = classNames({ [className as string]: !!className });

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
      onChange(e);
    }
    if (passOption) {
      passOption(selected[0]);
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
        {...rest}
        name={name}
        id={id}
        value={selectedValue?.value}
        form={rest.formId}
        disabled={rest.isDisabled}
        required={rest.isRequired}
        className={style.field}
        onChange={onSelectChange}
      >
        {optionList}
      </select>
    </div>
  );
};

export default Select;
