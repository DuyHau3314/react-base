// In AppRouter.tsx or wherever your routing is defined

import { FC, lazy, Suspense } from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';

import Index from './features/index/Index';
import PostPage from './pages/PostPage';

const AppPage = lazy(() => import('src/pages/AppPage'));
const RecordPage = lazy(() => import('src/pages/RecordPage'));
const CircularPageLoader = lazy(() => import('./shared/page-loader/CircularPageLoader'));

const AppRouter: FC = () => {
  const routes: RouteObject[] = [
    {
      path: '/',
      element: (
        <Suspense fallback={<CircularPageLoader />}>
          <AppPage />
        </Suspense>
      ),
      children: [
        { index: true, element: <Index /> },
        {
          path: 'my-record',
          element: (
            <Suspense fallback={<CircularPageLoader />}>
              <RecordPage />
            </Suspense>
          )
        },
        {
          path: 'my-posts',
          element: (
            <Suspense fallback={<CircularPageLoader />}>
              <PostPage />
            </Suspense>
          )
        }
      ]
    }
  ];

  return useRoutes(routes);
};

export default AppRouter;
