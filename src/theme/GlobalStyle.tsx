// src/theme/GlobalStyle.tsx
import { createGlobalStyle } from 'styled-components';
import { ThemeType } from './index';

export const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&display=swap');

  body {
    margin: 0;
    padding: 0;
    font-family: ${props => props.theme.fonts.body};
    background: ${props => props.theme.colors.light};
    color: ${props => props.theme.colors.dark500};
  }
`;
