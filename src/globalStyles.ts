import * as React from 'react';
import { createGlobalStyle } from 'styled-components';

import { Color } from './enums';

export const GlobalStyles: React.NamedExoticComponent<object> = createGlobalStyle`
  body {
    width: 100%;
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    background-color: ${Color.Gray100};
    overflow-x: hidden;
  }

  p {
    margin: 0;
    font-family: 'Poppins', sans-serif;
  }

  button {
    background: none;
    border: none;
    margin: none;
    padding: none;

    &:focus {
      border: none;
      outline: none;
    }
  }
`;
