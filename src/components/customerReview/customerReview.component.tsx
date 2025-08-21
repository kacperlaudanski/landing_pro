import { Rating } from '@mui/material';
import { JSX } from 'react';

import { useFormatDate } from '../../hooks';
import { UseFormatDate } from '../../interfaces';

import { Details, Review, ReviewDetailContainer, Wrapper } from './customerReview.styled';

import { CustomerReviewProps } from './customerReview.types';

export const CustomerReview: React.FC<CustomerReviewProps> = (props: CustomerReviewProps): JSX.Element => {
  const { className, customer, date, review }: CustomerReviewProps = props;
  const { formatDate }: UseFormatDate = useFormatDate();

  return (
    <Wrapper className={className}>
      <Review>
        {review}
      </Review>
      <ReviewDetailContainer>
        <Rating defaultValue={5} readOnly />
        <Details>
          {customer} - {formatDate(date, 'DD.MM.YYYY')}
        </Details>
      </ReviewDetailContainer>
    </Wrapper>
  )
}
