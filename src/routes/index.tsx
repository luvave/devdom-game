import { lazy } from 'react';
import { O } from 'ts-toolbelt';
import { MainLayout } from '../layouts/MainLayout';

type RoutePath = O.AtLeast<{ path: string; index: boolean }, 'path' | 'index'>;

type RouteLayout = O.Merge<
Pick<RoutePath, 'path'>,
{ element: JSX.Element; protected?: boolean }
>;

export type Route = O.Merge<RoutePath, RouteLayout>;

export type RouteGroup = {
  layout: O.AtLeast<RouteLayout, 'path' | 'element'>;
  routes: Route[];
};

// Lazy load the routes to improve performance
const Home = lazy(() => import('../views/Home'));

const routes: RouteGroup[] = [
  {
    layout: { path: '/', element: <MainLayout /> },
    routes: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
];

export default routes;
