import { ButtonView } from 'enums/button-view';
import { CommonProps } from './basic';
import { FieldRenderProps } from 'react-final-form';
import { Icon } from 'enums/icon';
import { SortOrder } from 'enums/params';

export type InputHandlersProps = {
  onChange?: (event: React.ChangeEvent<FormInput>) => void;
  onBlur?: () => void;
  onFocus?: () => void;
  error?: string;
};

export type SelectEntity = {
  option: string;
  value: string | number;
  params?: SortParams;
  [key: string]: unknown;
};

export type SortParams = {
  sortBy: string;
  sortOrder: SortOrder;
};

export type FormValues = { [key: string]: unknown };

export type FormInput = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

export type FormContextProps = {
  formValues: FormValues;
  onChangeInput: (e: React.ChangeEvent<FormInput>) => void;
  onChangeMultiSelect?: (name: string, options: MultiSelectOption[]) => void;
};

export type FormProps = CommonProps & {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  inputs: React.ReactElement;
  initialValues: FormValues;
  action?: string;
  isSubmitDisabled?: boolean;
  passValues?: (values: FormValues) => void;
  submitButtonText?: string;
  hasResetButton?: boolean;
};

export type ButtonProps = CommonProps & {
  type?: 'button' | 'submit' | 'reset';
  text?: string;
  title?: string;
  isDisabled?: boolean;
  onClick?: () => void;
  view?: ButtonView;
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

export type TextInputProps = CommonProps & {
  label?: string;
  defaultInputValue?: string;
  placeholder?: string;
  isDisabled?: boolean;
  isRequired?: boolean;
  isReadOnly?: boolean;
  isInvalid?: boolean;
  isAutocomplete?: boolean;
  maxLength?: number;
  minLength?: number;
} & FieldRenderProps<string, HTMLInputElement, string>;

export type NumericInputProps = CommonProps &
  InputHandlersProps & {
    label?: string;
    max?: number;
    min?: number;
    step?: number;
    placeholder?: string;
    defaultInputValue?: number;
    isDisabled?: boolean;
    isRequired?: boolean;
    isReadOnly?: boolean;
    isInvalid?: boolean;
  } & FieldRenderProps<number, HTMLInputElement, number>;

export type MultiSelectOption = {
  value: any;
  label: string;
  key?: string;
  disabled?: boolean;
};

export type MultiSelectProps = CommonProps & {
  options: MultiSelectOption[];
  defaultOptions?: MultiSelectOption[];
  placeholder?: string;
  label?: string;
} & FieldRenderProps<any, HTMLElement, any>;

export type LabelProps = CommonProps & {
  inputId: string;
  labelText: string;
};

export type TextAreaProps = TextInputProps;

export type DatePickerProps = CommonProps & {
  label?: string;
  max?: string;
  min?: string;
  step?: number;
  placeholder?: string;
  defaultInputValue?: string;
  isDisabled?: boolean;
  isRequired?: boolean;
  isReadOnly?: boolean;
  isInvalid?: boolean;
  value?: string;
} & FieldRenderProps<string, HTMLInputElement, string>;
