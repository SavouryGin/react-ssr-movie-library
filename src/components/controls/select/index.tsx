import React, { useContext, useState } from 'react';
import classNames from 'classnames';
import { FormContext } from 'components/controls/form';
import { Guid } from 'guid-typescript';
import { SelectProps } from 'types/controls';
import './styles.scss';

const Select = ({ options, className, name, defaultOption, onChange, ...rest }: SelectProps) => {
  const formContext = useContext(FormContext);
  const { onChangeInput } = formContext;
  const id = rest.id || `select_${name}`;
  const selectClass = classNames('select', { [`${className}`]: !!className });
  const [selectedValue, setSelectedValue] = useState(defaultOption);

  const optionList = options.map((item) => {
    const key = Guid.create().toString();

    return (
      <option value={item.value} key={key}>
        {item.option}
      </option>
    );
  });

  const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = e.target.value;
    const selected = options.filter((item) => item.value.toString() === selectedOption);
    setSelectedValue(selected[0] || undefined);
    if (onChangeInput) {
      onChangeInput(e);
    }
    if (onChange) {
      onChange();
    }
  };

  return (
    <div className={selectClass}>
      {rest.label && <label className='select__label'>{rest.label}</label>}
      <select
        name={name}
        id={id}
        value={selectedValue?.value}
        form={rest.formId}
        disabled={rest.isDisabled}
        required={rest.isRequired}
        className={'select__field'}
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
