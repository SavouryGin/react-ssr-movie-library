import Label from '../label';
import React, { useContext, useMemo, useState } from 'react';
import classNames from 'classnames';
import style from './style.module.scss';
import { FormContext } from '../form';
import { FormContextProps, MultiSelectOption, MultiSelectProps } from 'types/controls';
import { MultiSelect } from 'react-multi-select-component';

const CustomMultiSelect = ({ className, label, name, options, defaultOptions, onSelect, ...rest }: MultiSelectProps) => {
  const formContext = useContext<FormContextProps>(FormContext);
  const [selected, setSelected] = useState<MultiSelectOption[]>(defaultOptions || []);

  const { onChangeMultiSelect } = formContext;
  const selectClass = classNames(style.select, { [className as string]: !!className });
  const id = useMemo(() => rest.id || `multi_select_input_${name}`, [rest.id]);

  const onChange = (values: MultiSelectOption[]) => {
    setSelected(values);
    if (onChangeMultiSelect) {
      onChangeMultiSelect(name, values);
    }
    if (onSelect) {
      onSelect(values);
    }
  };

  return (
    <div className={selectClass}>
      {label && <Label inputId={id} labelText={label} />}
      <MultiSelect options={options} value={selected} onChange={onChange} labelledBy={rest.placeholder || 'Select'} />
    </div>
  );
};

export default CustomMultiSelect;
