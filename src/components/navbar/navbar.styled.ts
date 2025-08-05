import { Link } from 'react-router';
import { styled } from 'styled-components';

import { Color } from '../../enums';
import { StyledComponent } from '../../types';

import { OptionBaseProps } from './navbar.types';

export const Wrapper: StyledComponent = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 90px;
  border-bottom: 1px solid ${Color.Gray200};
`;

export const Logo: StyledComponent = styled.img`
  width: 120px;
  height: 35px;
`;

export const OptionsWrapper: StyledComponent = styled.ul`
  display: flex;
  align-items: center;
  gap: 50px;
  font-family: 'Verdana';
`;

export const Option: StyledComponent<OptionBaseProps> = styled.li<OptionBaseProps>`
  display: flex;
  position: relative;
  color: ${({ $isActive }: OptionBaseProps): string => $isActive ? Color.Blue500 : Color.Gray700};

  &::after {
    width: 100%;
    position: absolute;
    bottom: -37px;
    content: '';
    border-bottom: 3px solid ${Color.Blue500};
    opacity: ${({ $isActive }: OptionBaseProps): string => $isActive ? '1' : '0'};
  }
`;

export const StyledLink: StyledComponent<typeof Link> = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

export const BurgerButton: StyledComponent = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  background: none;
  border: none;
`;
