import { Route, Routes } from 'react-router-dom';
import { Pager } from './components/Pager';
import routes from './routes';
import { NotFound } from './views/NotFound';

export const App = () => (
    <div className="min-h-screen w-full">
      <Routes>
        {routes.map((router, key) => (
          // eslint-disable-next-line react/no-array-index-key
          <Route key={key} {...router.layout}>
            {router.routes.map((route) => (
              <Route
                key={route.element.key}
                path={route.path}
                index={route.index}
                element={
                  <Pager protected={router.layout.protected} {...route} />
                }
              />
            ))}
          </Route>
        ))}

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
);
