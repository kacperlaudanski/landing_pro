import styled from 'styled-components';
import { Color } from '../../enums';

import { StyledComponent } from '../../types';
import { SideMenuBaseProps } from './sideMenu.types';

export const Wrapper: StyledComponent<SideMenuBaseProps> = styled.aside<SideMenuBaseProps>`
  width: 100%;
  height: 100svh;
  position: fixed;
  top: 0;
  left: ${({ $isOpen }: SideMenuBaseProps): string => $isOpen ? '0' : '-100%'};
  background-color: ${Color.White};
  transition: left 0.3s ease;
  display: flex;
`;

export const RightContainer: StyledComponent = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 30%;
  height: 100%;
`;

export const OptionsContainer: StyledComponent = styled.div`
  width: 70%;
  height: 100%;
  border-right: 1px solid ${Color.Blue200};
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