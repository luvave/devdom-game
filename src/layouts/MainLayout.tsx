import { Link, Outlet } from 'react-router-dom';
import { ThemeChanger } from '../components/ThemeChanger';
import { HomeRoute } from '../constants/routes';
import mainLogo from '../images/main-logo.png';

export const MainLayout = () => (
    <>
      <div className="navbar z-20 border-b border-b-base-200 bg-base-100 mb-3">
        <div className="flex-none">
          <div className="w-11">
            <img className="object-cover main-logo" src={mainLogo} alt="main-logo" />
          </div>
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
