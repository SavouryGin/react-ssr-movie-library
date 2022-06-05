import { CommonProps } from './basic';
import { Icon } from 'enums/icon';

export type InputHandlersProps = {
  onChange?: () => void;
  onBlur?: () => void;
  onFocus?: () => void;
};

export type SelectEntity = {
  option: string;
  value: string | number;
  [key: string]: unknown;
};

export type FormValues = { [key: string]: unknown };

export type FormInput = HTMLInputElement | HTMLSelectElement;

export type FormContextProps = {
  formValues: FormValues;
  onChangeInput: (e: React.ChangeEvent<FormInput>) => void;
};

export type FormProps = CommonProps & {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  inputs: React.ReactElement;
  initialValues: FormValues;
  action?: string;
  isSubmitDisabled?: boolean;
  passValues?: (values: FormValues) => void;
  submitButtonText?: string;
};

export type ButtonProps = CommonProps & {
  type?: 'button' | 'submit' | 'reset';
  text?: string;
  title?: string;
  isDisabled?: boolean;
  onClick?: () => void;
  view?: 'primary' | 'secondary' | 'only icon';
  icon?: Icon;
};

export type SelectProps = CommonProps &
  InputHandlersProps & {
    name: string;
    options: SelectEntity[];
    label?: string;
    defaultOption?: SelectEntity;
    isRequired?: boolean;
    isDisabled?: boolean;
    formId?: string;
    passOption?: (option: SelectEntity) => void;
  };

export type TextInputProps = CommonProps &
  InputHandlersProps & {
    name: string;
    label?: string;
    defaultValue?: string;
    placeholder?: string;
    isDisabled?: boolean;
    isRequired?: boolean;
    isReadOnly?: boolean;
    isInvalid?: boolean;
    isAutocomplete?: boolean;
    maxLength?: number;
    minLength?: number;
    value?: string;
  };
