import { store } from 'store';

export type CommonProps = {
  className?: string;
  id?: string;
};

export type ModalWindowProps = CommonProps & {
  isOpened: boolean;
  onClose: () => void;
  title: string;
  element: HTMLDivElement | null;
  content?: React.ReactElement;
};

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type SpinnerProps = CommonProps & {
  size?: number;
};
