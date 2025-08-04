import { JSX } from 'react';

import { Wrapper } from './button.styled';
import { ButtonProps } from './button.types';

export const Button: React.FC<ButtonProps> = (props: ButtonProps): JSX.Element => {
  const { className, fullWidth, label, onClick, theme, type }: ButtonProps = props;

  return (
    <Wrapper $fullWidth={fullWidth} $theme={theme} className={className} onClick={onClick} type={type}>
      {label}
    </Wrapper>
  );
};
