// In AppPage.tsx

import { FC, lazy, ReactElement, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Row from 'src/layout/components/Row';
import CircularPageLoader from 'src/shared/page-loader/CircularPageLoader';

const Header = lazy(() => import('src/shared/header/components/Header'));
const Footer = lazy(() => import('src/shared/footer/components/Footer'));

const AppPage: FC = (): ReactElement => {
  return (
    <div>
      <Suspense fallback={<CircularPageLoader />}>
        <Header />
        <Outlet />
        <Row marginTop={'2rem'}>
          <Footer />
        </Row>{' '}
      </Suspense>
    </div>
  );
};

export default AppPage;
