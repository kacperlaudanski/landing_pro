import { LucideIcon } from 'lucide-react';

import { Path } from '../enums';

export interface NavbarOption {
  label: string;
  path: Path;
  isActive?: boolean;
  icon?: LucideIcon;
}
