
import styled, { css, RuleSet } from 'styled-components';

import { ButtonTheme, Color } from '../../enums';
import { StyledComponent } from '../../types';

import { ButtonBaseProps } from './button.types';

const buttonTheme: { [ theme in ButtonTheme]: RuleSet } = {
  [ButtonTheme.PrimaryBlue]: css`
    background-color: ${Color.Blue500};
    color: ${Color.White};

    &:hover {
      background-color: ${Color.Blue700};
    }
  `,
  [ButtonTheme.SecondaryBlue]: css`
    background-color: ${Color.White};
    color: ${Color.Blue500};
    border: 1px solid ${Color.Blue500};

    &:hover {
      background-color: ${Color.Blue500};
      color: ${Color.White};
    }
  `,
};

export const Wrapper: StyledComponent<ButtonBaseProps> = styled.button<ButtonBaseProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 17px 34px;
  border-radius: 99px;
  border: none;
  cursor: pointer;
  transition: .3s linear;
  ${({ $theme }: ButtonBaseProps): RuleSet => buttonTheme[$theme]};
  ${({ $fullWidth }: ButtonBaseProps): string | false => !!$fullWidth && 'width: 100%'};
`;
