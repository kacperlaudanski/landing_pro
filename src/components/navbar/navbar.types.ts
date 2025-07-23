import { NavbarOption } from '../../interfaces';

export interface NavbarProps {
  logo: string;
  options: NavbarOption[];
  className?: string;
}

export interface OptionBaseProps {
  $isActive: boolean;
}