import { styled } from 'styled-components';

import { Color } from '../../enums';
import { StyledComponent } from '../../types';

export const Wrapper: StyledComponent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${Color.Gray100};
`;

export const ContentWrapper: StyledComponent = styled.main`
  width: 100%;
  max-width: 1280px;
  padding: 40px 80px;
  height: 1000px;
  margin: 0 auto;
`;
