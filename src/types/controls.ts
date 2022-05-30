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
