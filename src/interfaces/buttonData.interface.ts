import { ButtonTheme } from '../enums';

export interface ButtonData {
  label: string;
  onClick: () => void;
  theme: ButtonTheme;
}
