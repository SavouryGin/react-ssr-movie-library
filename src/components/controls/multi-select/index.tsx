import ErrorLabel from '../error-label';
import Label from '../label';
import React, { useMemo, useState } from 'react';
import classNames from 'classnames';
import style from './style.module.scss';
import { MultiSelect } from 'react-multi-select-component';
import { MultiSelectOption, MultiSelectProps } from 'types/controls';

const CustomMultiSelect = ({ className, label, options, defaultOptions, meta, input, ...rest }: MultiSelectProps) => {
  const [selected, setSelected] = useState<MultiSelectOption[]>(defaultOptions || []);

  const selectClass = classNames(style.select, { [className as string]: !!className });
  const id = useMemo(() => rest.id || `multi_select_input_${input.name}`, [rest.id]);

  const onChange = (values: MultiSelectOption[]) => {
    setSelected(values);
    input.onChange(values);
  };

  return (
    <div className={selectClass}>
      {label && <Label inputId={id} labelText={label} labelId={id} />}
      <MultiSelect options={options} value={selected} onChange={onChange} labelledBy={id} />
      <ErrorLabel message={meta.touched && meta.error} />
    </div>
  );
};

export default CustomMultiSelect;
