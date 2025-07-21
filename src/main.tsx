import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';

import { GlobalStyles } from './globalStyles';

import { mainRouter } from './routes';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyles />
    <RouterProvider router={mainRouter} />
  </StrictMode>,
);
