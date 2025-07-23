import styled from 'styled-components';
import { Color } from '../../enums';

import { StyledComponent } from '../../types';
import { SideMenuBaseProps } from './sideMenu.types';

export const Wrapper: StyledComponent<SideMenuBaseProps> = styled.aside<SideMenuBaseProps>`
  width: 300px;
  height: 100svh;
  position: fixed;
  top: 0;
  left: ${({ $isOpen }: SideMenuBaseProps): string => $isOpen ? '0' : '-100%'};
  background-color: ${Color.White};
  transition: left 0.3s ease;
  display: flex;
  flex-direction: column;
  -webkit-box-shadow: 3px 3px 26px 0px rgba(66, 68, 90, 1);
  -moz-box-shadow: 3px 3px 26px 0px rgba(66, 68, 90, 1);
  box-shadow: 3px 3px 26px 0px rgba(66, 68, 90, 1);
`;

export const OptionsContainer: StyledComponent = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0;
`;

export const Option: StyledComponent = styled.li`
  width: 100%;
  height: 54px;
  border-top: 1px solid ${Color.Gray200};
  display: flex;
  align-items: center;
  justify-content: center;

  &:last-child {
    border-bottom: 1px solid ${Color.Gray200};
  }
`;

export const OptionButton: StyledComponent = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background: none;
  border: none;
`;

// TODO: move to separate component - IconButton
export const CloseButton: StyledComponent = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  background: none;
  border: none;
`;