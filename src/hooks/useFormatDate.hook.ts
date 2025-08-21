import dayjs from 'dayjs';
import { useCallback } from 'react';

import { UseFormatDate } from '../interfaces';

const DEFAULT_DATE = dayjs(0).format('DD-MM-YYYY');

export const useFormatDate: () => UseFormatDate = (): UseFormatDate => {
  const formatDate: (timestamp: number, pattern: string) => string = useCallback((timestamp: number, pattern: string): string => {
    if (!dayjs(timestamp).isValid()) return DEFAULT_DATE;

    return timestamp.toString().length === 10 ? dayjs(timestamp * 1000).format(pattern) : dayjs(timestamp).format(pattern);
  }, [])

  return { formatDate };
}