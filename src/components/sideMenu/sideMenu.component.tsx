import { X } from 'lucide-react';
import { JSX } from 'react';
import { NavigateFunction, useNavigate } from 'react-router';

import { MenuOption } from '../../interfaces';

import { CloseButton, Option, OptionButton, OptionsContainer, Wrapper } from './sideMenu.styled';
import { SideMenuProps } from './sideMenu.types';

export const SideMenu: React.FC<SideMenuProps> = (props: SideMenuProps): JSX.Element => {
  const { className, options, isOpen, closeHandler }: SideMenuProps = props;
  const navigate: NavigateFunction = useNavigate();

  return (
    <Wrapper $isOpen={isOpen} className={className}>
      <CloseButton onClick={closeHandler}>
        <X />
      </CloseButton>
      <OptionsContainer>
        {options.map(({ label, path, icon: Icon }: MenuOption): JSX.Element => (
          <Option>
            <OptionButton onClick={(): Promise<void> | void => navigate(path)}>
              {Icon && <Icon />}
              {label}
            </OptionButton>
          </Option>
        ))}
      </OptionsContainer>
    </Wrapper>
  );
};
