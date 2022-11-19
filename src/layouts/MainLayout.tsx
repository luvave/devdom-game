import { HiMenuAlt2 } from 'react-icons/hi';
import { Link, Outlet } from 'react-router-dom';
import { ThemeChanger } from '../components/ThemeChanger';
import { HomeRoute } from '../constants/routes';

export const MainLayout = () => (
    <>
      <div className="navbar z-20 border-b border-b-base-200 bg-base-100 mb-3">
        <div className="flex-none">
          {/* TODO: Fix */}
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label
            htmlFor="side-navbar-drawer-left"
            className="btn-ghost btn-primary drawer-button btn-circle btn"
          >
            <HiMenuAlt2 className="h-5 w-5" />
          </label>
        </div>
        <div className="flex-1">
          <Link className="ml-2 text-2xl font-bold" to={HomeRoute}>
            {import.meta.env.VITE_APP_NAME}
          </Link>
        </div>
        <div className="flex-none">
          <ThemeChanger />
        </div>
      </div>

      <Outlet />
    </>
);
