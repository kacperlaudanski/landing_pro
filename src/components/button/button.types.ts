import { ButtonTheme, ButtonType } from '../../enums';

export interface ButtonProps {
  label: string;
  onClick: () => void;
  theme: ButtonTheme;
  type: ButtonType;
  className?: string;
  fullWidth?: boolean;
}

export interface ButtonBaseProps {
  $fullWidth: boolean;
  $theme: ButtonTheme;
}
