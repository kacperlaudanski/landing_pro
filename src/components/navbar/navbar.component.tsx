import { useMediaQuery } from '@mui/material';
import { Menu } from 'lucide-react';
import { JSX } from 'react';
import { Breakpoint } from '../../enums';

import { NavbarOption } from '../interfaces';

import { BurgerButton, Logo, Option, OptionsWrapper, StyledLink, Wrapper } from './navbar.styled';
import { NavbarProps } from './navbar.types';

export const Navbar: React.FC<NavbarProps> = (props: NavbarProps): JSX.Element => {
  const { className, logo, options }: NavbarProps = props;
  const isSmallDesktop: boolean = useMediaQuery(Breakpoint.SmallDesktop);

  return (
    <Wrapper className={className}>
      <Logo alt='logo' src={logo} />
      {!!isSmallDesktop ? (
        <OptionsWrapper>
          {options.map((option: NavbarOption): JSX.Element => (
            <Option $isActive={option.isActive}>
              <StyledLink to={option.path}>
                {option.label}
              </StyledLink>
            </Option>
          ))}
        </OptionsWrapper>
      ) : (
        <BurgerButton>
          <Menu />
        </BurgerButton>
      )}
    </Wrapper>
  );
};
