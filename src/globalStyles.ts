import * as React from 'react';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles: React.NamedExoticComponent<{}> = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    background-color: red;
  }
`;
