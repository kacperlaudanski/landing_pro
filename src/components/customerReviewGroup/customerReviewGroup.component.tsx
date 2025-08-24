import { JSX } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import { CustomerReviewData } from '../../interfaces';
import { CustomerReview } from '../customerReview/customerReview.component';

import { CustomerReviewGroupProps } from './customerReviewGroup.types';
import { SwiperWrapper, Wrapper } from './customerReviewGroup.styled';

export const CustomerReviewGroup: React.FC<CustomerReviewGroupProps> = (props: CustomerReviewGroupProps): JSX.Element => {
  const { className, items, itemsPerPage }: CustomerReviewGroupProps = props;

  return (
    <Wrapper className={className}>
      <SwiperWrapper>
        <Swiper
          autoplay={{
            delay: 2000,
            pauseOnMouseEnter: true,
          }}
          loop
          modules={[Autoplay, Pagination]}
          pagination={{
            clickable: false,
          }}
          spaceBetween={20}
          slidesPerView={itemsPerPage}
          swiperPaginationBottom={40}
        >
          {items.map((item: CustomerReviewData): JSX.Element => (
            <SwiperSlide key={item.customer}>
              <CustomerReview customer={item.customer} date={item.date} review={item.review} />
            </SwiperSlide>
          ))}
        </Swiper>
      </SwiperWrapper>
    </Wrapper>
  );
};
