import { Bandage, Briefcase, Lightbulb } from 'lucide-react';

import { FeatureCardData } from '../../interfaces';

export const benefitsData: FeatureCardData[] = [
  {
    headline: '100% high quality product',
    supportingText: 'We have option of pick up in store',
    icon: Lightbulb,
  },
  {
    headline: 'Free shipping charge',
    supportingText: 'Inside City delivery within 5 days',
    icon: Briefcase,
  },
  {
    headline: 'Money back guarantee',
    supportingText: 'We will take return in some cases',
    icon: Bandage,
  },
];