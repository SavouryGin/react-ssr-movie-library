import Label from '../label';
import React, { useContext, useEffect, useState } from 'react';
import classNames from 'classnames';
import style from './style.module.scss';
import { FormContext } from '../form';
import { MultiSelect } from 'react-multi-select-component';
import { MultiSelectOption, MultiSelectProps } from 'types/controls';

const CustomMultiSelect = ({ className, label, name, options, ...rest }: MultiSelectProps) => {
  const selectClass = classNames(style.select, { [`${className}`]: !!className });
  const id = rest.id || `multi_select_input_${name}`;
  const formContext = useContext(FormContext);
  const { onChangeMultiSelect } = formContext;
  const [selected, setSelected] = useState<MultiSelectOption[]>(rest.defaultOptions || []);

  useEffect(() => {
    if (onChangeMultiSelect) {
      onChangeMultiSelect(name, selected);
    }
  }, [selected]);

  return (
    <div className={selectClass}>
      {label && <Label inputId={id} labelText={label} />}
      <MultiSelect options={options} value={selected} onChange={setSelected} labelledBy={rest.placeholder || 'Select'} />
    </div>
  );
};

export default CustomMultiSelect;
