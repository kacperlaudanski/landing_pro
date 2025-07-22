import { Path } from '../enums';

export interface NavbarOption {
  label: string;
  path: Path;
  isActive?: boolean;
}
