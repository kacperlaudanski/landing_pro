import { Bandage, Briefcase, Lightbulb } from 'lucide-react';

import { CustomerReviewData, FeatureCardData } from '../../interfaces';

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

export const customerReviewData: CustomerReviewData[] = [
  {
    customer: 'David William',
    date: 1756665326,
    review: 'Lorem ipsum dolor sit amet consectetur. Malesuada et ut vitae eget. Leo viverra fringilla faucibus proin lacinia ornare amet. Aliquam mi eros dapibus pulvinar morbi aenean. Sit in donec quisque turpis. Tortor aliquam auctor elementum sodales porttitor viverra.',
  },
  {
    customer: 'Emma Turner',
    date: 1758738926,
    review: 'Amet non dolor pellentesque feugiat ac nec ac in. Dictumst turpis natoque eget suscipit arcu. Eu nunc quis consectetur iaculis sit et. Ipsum mattis eleifend arcu faucibus netus neque tellus amet. Accumsan enim cursus nulla tellus felis vitae.',
  },
  {
    customer: 'Rachel Bryan',
    date: 1724524526,
    review: 'Adipiscing dictum adipiscing arcu venenatis dolor adipiscing. Iaculis mauris tellus morbi nisl suspendisse egestas augue at. In tortor tristique quisque faucibus dui.  Fusce lacus dignissim vel integer sagittis. Aliquam in cras eget et turpis. Auctor purus hendrerit sit.',
  },
  {
    customer: 'Emma Collins',
    date: 1753382126,
    review: 'Lorem ipsum dolor sit amet consectetur. Malesuada et ut vitae eget. Leo viverra fringilla faucibus proin lacinia ornare amet. Aliquam mi eros dapibus pulvinar morbi aenean. Sit in donec quisque turpis. Tortor aliquam auctor elementum sodales porttitor viverra.',
  },
  {
    customer: 'Michael Turner',
    date: 1753382126,
    review: 'Amet non dolor pellentesque feugiat ac nec ac in. Dictumst turpis natoque eget suscipit arcu. Eu nunc quis consectetur iaculis sit et. Ipsum mattis eleifend arcu faucibus netus neque tellus amet. Accumsan enim cursus nulla tellus felis vitae.',
  },
  {
    customer: 'Sophia Reynolds',
    date: 1724524526,
    review: 'Adipiscing dictum adipiscing arcu venenatis dolor adipiscing. Iaculis mauris tellus morbi nisl suspendisse egestas augue at. In tortor tristique quisque faucibus dui.  Fusce lacus dignissim vel integer sagittis. Aliquam in cras eget et turpis. Auctor purus hendrerit sit.',
  },
]