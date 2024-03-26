import { ReactElement } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import AppRouter from './AppRoutes';
import ScrollToTopButton from './shared/scroll-top/TopButton';
import { theme } from './theme';
import { GlobalStyle } from './theme/GlobalStyle';

const App: React.FC = (): ReactElement => {
  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <ThemeProvider theme={theme}>
        <GlobalStyle theme={theme} />
        <BrowserRouter>
          <AppRouter />
          <ScrollToTopButton />
        </BrowserRouter>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default App;
