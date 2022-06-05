import Label from '../label';
import React, { useState } from 'react';
import classNames from 'classnames';
import style from './style.module.scss';
import { MultiSelect } from 'react-multi-select-component';
import { MultiSelectProps } from 'types/controls';

const CustomMultiSelect = ({ className, label, name, options, ...rest }: MultiSelectProps) => {
  const selectClass = classNames(style.select, { [`${className}`]: !!className });
  const id = rest.id || `multi_select_input_${name}`;
  const [selected, setSelected] = useState([]);

  return (
    <div className={selectClass}>
      {label && <Label inputId={id} labelText={label} />}
      <MultiSelect options={options} value={selected} onChange={setSelected} labelledBy={rest.placeholder || 'Select'} />
    </div>
  );
};

export default CustomMultiSelect;
