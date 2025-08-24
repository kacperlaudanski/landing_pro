import { styled } from 'styled-components';

import { StyledComponent } from '../../types';

export const Wrapper: StyledComponent = styled.div``;

export const SwiperWrapper: StyledComponent = styled.div`
  position: relative;

  .swiper-wrapper {
    padding-bottom: 50px;
  }

  .swiper-pagination {
    position: absolute;
    display: flex;
    justify-content: center;
    gap: 8px;
  }
`;
