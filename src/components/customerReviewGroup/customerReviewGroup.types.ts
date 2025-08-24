import { CustomerReviewData } from '../../interfaces';

export interface CustomerReviewGroupProps {
  items: CustomerReviewData[];
  itemsPerPage: number;
  className?: string;
}
