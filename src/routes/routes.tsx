import { createBrowserRouter } from 'react-router';

import { Path } from '../enums';
import { LandingFrame } from '../layouts';

export const mainRouter = createBrowserRouter([
  {
    path: '/',
    element: <LandingFrame />,
    children: [
      { index: true, element: <div /> },
    ]
  }
]);