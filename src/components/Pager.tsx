import { Suspense, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Route } from '../routes';
import { Spinner } from './Spinner';

export function Pager({ protected: routeProtected, element }: Route) {
  const navigate = useNavigate();
  const { pathname, search } = useLocation();

  // TODO: Implement login
  useEffect(() => {
    if (routeProtected /* && isGuestUser */) {
      navigate('/', { state: { next: pathname + search } });
    }
  }, [pathname, search]);

  return <Suspense fallback={<Spinner />}>{element}</Suspense>;
}
