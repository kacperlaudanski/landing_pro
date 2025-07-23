import { NavbarOption } from '../../interfaces';

export interface SideMenuProps {
  options: NavbarOption[];
  isOpen: boolean;
  closeHandler: () => void;
  className?: string;
}

export interface SideMenuBaseProps {
  $isOpen: boolean;
}