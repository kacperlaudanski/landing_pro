import { Path } from '../enums';
import { MenuOption } from '../interfaces';

// TODO: change labels when translations system will be added + handle correct section highlight

export const useMenuOptions: () => MenuOption[] = (): MenuOption[] => {

  return [
    { label: 'Home', path: Path.Main, isActive: true },
    { label: 'About', path: Path.About },
    { label: 'Reviews', path: Path.Reviews },
    { label: 'Video', path: Path.Video },
    { label: 'Features', path: Path.Features },
    { label: 'Products', path: Path.Products },
    { label: 'Faqs', path: Path.Faqs },
  ]
};
