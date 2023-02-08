import { Link, redirect } from 'react-router-dom';

import useAppDispatch from '../hooks/useAppDispatch';
import useIsAuth from '../hooks/useIsAuth';
import { loginAsync, logoutAsync } from '../redux/auth/thunks';

const Menu = () => {
  const isAuth = useIsAuth();
  const dispatch = useAppDispatch();

  return (
    <>
      <nav className="bg-white px-2 sm:px-4 py-2.5  fixed w-full z-20 top-0 left-0 border-b border-gray-200 ">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <div className="flex items-center font-['Billabong'] text-5xl">Instalike</div>
          <div className="flex md:order-2"></div>
          <div className=" justify-between hidden w-full md:flex md:w-auto " id="navbar-sticky">
            <ul className="flex flex-col p-4 mt-4 border border-gray-100   md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  ">
              <li>
                <div
                  className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                  aria-current="page"
                >
                  <Link to="feed">Home</Link>
                </div>
              </li>

              <div className="block py-2 pl-3 pr-4 text-gray-700 rounded md:p-0   ">
                <li>
                  <Link to="discover">Discover</Link>
                </li>
              </div>

              <div className="block py-2 pl-3 pr-4 text-gray-700 rounded md:p-0   ">
                <li>{/*<Link to="post/1">Post 1</Link>*/}Account</li>
              </div>

              <div className="block py-2 pl-3 pr-4 text-gray-700 rounded md:p-0   ">
                <li>
                  {!isAuth && (
                    <button
                      type="button"
                      onClick={() => {
                        redirect('/login');
                      }}
                    >
                      Login
                    </button>
                  )}

                  {isAuth && (
                    <button
                      type="button"
                      onClick={() => {
                        dispatch(logoutAsync());
                      }}
                    >
                      Logout
                    </button>
                  )}
                </li>
              </div>
            </ul>
          </div>
        </div>
      </nav>
      <div className="mt-20"></div>
    </>
  );
};

export default Menu;
