import { ButtonTheme, ButtonType } from '../../enums';
import { ButtonData } from '../../interfaces';

export interface ButtonProps extends ButtonData {
  type: ButtonType;
  className?: string;
  fullWidth?: boolean;
}

export interface ButtonBaseProps {
  $fullWidth: boolean;
  $theme: ButtonTheme;
}
