import { useMediaQuery } from '@mui/material';
import { Menu } from 'lucide-react';
import { JSX, useState } from 'react';

import { Breakpoint } from '../../enums';
import { MenuOption } from '../../interfaces';
import { SideMenu } from '../sideMenu/sideMenu.component';

import { BurgerButton, Logo, Option, OptionsWrapper, StyledLink, Wrapper } from './navbar.styled';
import { NavbarProps } from './navbar.types';

export const Navbar: React.FC<NavbarProps> = (props: NavbarProps): JSX.Element => {
  const { className, logo, options }: NavbarProps = props;
  const isSmallDesktop: boolean = useMediaQuery(Breakpoint.SmallDesktop);
  const [isSideMenuOpen, setSideMenuOpen] = useState<boolean>(false);

  const handleClosing: () => void = (): void => {
    setSideMenuOpen(false);
  };

  return (
    <>
      <Wrapper className={className}>
        <Logo alt='logo' src={logo} />
        {isSmallDesktop ? (
          <OptionsWrapper>
            {options.map((option: MenuOption): JSX.Element => (
              <Option $isActive={option.isActive}>
                <StyledLink to={option.path}>
                  {option.label}
                </StyledLink>
              </Option>
            ))}
          </OptionsWrapper>
        ) : (
          <BurgerButton onClick={() => setSideMenuOpen(true)}>
            <Menu />
          </BurgerButton>
        )}
      </Wrapper>
      <SideMenu isOpen={isSideMenuOpen} closeHandler={handleClosing} options={options} />
    </>
  );
};
