export * from './breakpoints';
export const theme = {
  colors: {
    light: '#FFFFFF',
    primary300: '#FFC107',
    primary400: '#FFB300',
    primary500: '#FFCC21',
    primary600: '#FF9800',
    secondary300: '#4DD0E1',
    dark900: '##2E2E2E',
    dark800: '#212121',
    dark700: '#414141',
    dark600: '#424242',
    dark500: '#616161',
    gray300: '#777777',
    gray400: '#BDBDBD',
    gray500: '#707070',
    primaryGradient: 'linear-gradient(45deg, #FFB74D 0%, #FFA726 100%)'
  },
  fonts: {
    body: 'Noto Sans CJK JP, Inter, sans-serif'
  }
};

export type ThemeType = typeof theme;
