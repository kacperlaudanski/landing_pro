import { createBrowserRouter } from 'react-router';

import { LandingFrame } from '../layouts';

import { Main } from './main/main';

export const mainRouter = createBrowserRouter([
  {
    path: '/',
    element: <LandingFrame />,
    children: [
      { index: true, element: <Main /> },
    ]
  }
]);