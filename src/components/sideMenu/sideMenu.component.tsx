import { X } from 'lucide-react';
import { JSX } from 'react';
import { CloseButton, OptionsContainer, RightContainer, Wrapper } from './sideMenu.styled';
import { SideMenuProps } from './sideMenu.types';

export const SideMenu: React.FC<SideMenuProps> = (props: SideMenuProps): JSX.Element => {
  const { className, options, isOpen, closeHandler }: SideMenuProps = props;

  return (
    <Wrapper $isOpen={isOpen} className={className}>
      <OptionsContainer>

      </OptionsContainer>
      <RightContainer>
        <CloseButton onClick={closeHandler}>
          <X />
        </CloseButton>
      </RightContainer>
    </Wrapper>
  );
};
