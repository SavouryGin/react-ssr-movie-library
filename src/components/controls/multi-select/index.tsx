import Label from '../label';
import React, { useContext, useEffect, useMemo, useState } from 'react';
import classNames from 'classnames';
import style from './style.module.scss';
import { FormContext } from '../form';
import { MultiSelect } from 'react-multi-select-component';
import { MultiSelectOption, MultiSelectProps } from 'types/controls';

const CustomMultiSelect = ({ className, label, name, options, ...rest }: MultiSelectProps) => {
  const formContext = useContext(FormContext);
  const [selected, setSelected] = useState<MultiSelectOption[]>(rest.defaultOptions || []);

  const { onChangeMultiSelect } = formContext;
  const selectClass = classNames(style.select, { [className as string]: !!className });
  const id = useMemo(() => rest.id || `multi_select_input_${name}`, [rest.id]);

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
