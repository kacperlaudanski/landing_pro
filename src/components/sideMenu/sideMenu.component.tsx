import { X } from 'lucide-react';
import { JSX } from 'react';

import { NavbarOption } from '../../interfaces';

import { CloseButton, Option, OptionButton, OptionsContainer, Wrapper } from './sideMenu.styled';
import { SideMenuProps } from './sideMenu.types';

export const SideMenu: React.FC<SideMenuProps> = (props: SideMenuProps): JSX.Element => {
  const { className, options, isOpen, closeHandler }: SideMenuProps = props;

  return (
    <Wrapper $isOpen={isOpen} className={className}>
      <CloseButton onClick={closeHandler}>
        <X />
      </CloseButton>
      <OptionsContainer>
      {options.map(({ label, path, icon: Icon }: NavbarOption): JSX.Element => (
          <Option>
            <OptionButton>
              {Icon && <Icon />}
              {label}
            </OptionButton>
          </Option>
        ))}
      </OptionsContainer>
    </Wrapper>
  );
};
