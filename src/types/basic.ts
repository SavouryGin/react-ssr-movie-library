export type CommonProps = {
  className?: string;
  id?: string;
};

export type ModalWindowProps = CommonProps & {
  isOpened: boolean;
  onClose: () => void;
  title: string;
  content?: React.ReactElement;
};
