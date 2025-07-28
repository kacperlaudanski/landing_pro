import { MenuOption } from '../../interfaces';

export interface NavbarProps {
  logo: string;
  options: MenuOption[];
  className?: string;
}

export interface OptionBaseProps {
  $isActive: boolean;
}