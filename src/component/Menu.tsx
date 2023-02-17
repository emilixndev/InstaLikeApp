import { useRef } from 'react';
import { AiOutlineHome, BiCompass, FiLogOut, IoMdAddCircleOutline, RiAccountCircleLine } from 'react-icons/all';
import { Link, redirect } from 'react-router-dom';

import useAppDispatch from '../hooks/useAppDispatch';
import useIsAuth from '../hooks/useIsAuth';
import { logoutAsync } from '../redux/auth/thunks';

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
                <div className="block py-2 pl-3 pr-4 text-white rounded text-black md:p-0 " aria-current="page">
                  <Link to="/feed">
                    <AiOutlineHome size={30}></AiOutlineHome>
                  </Link>
                </div>
              </li>

              <div className="block py-2 pl-3 pr-4 text-black rounded md:p-0   ">
                <li>
                  <Link to="/discover">
                    <BiCompass size={30}> </BiCompass>
                  </Link>
                </li>
              </div>

              <div className="block py-2 pl-3 pr-4 text-black rounded md:p-0   ">
                <li>
                  {/*<Link to="post/1">Post 1</Link>*/}

                  <Link to="/addPost">
                    <IoMdAddCircleOutline size={30}></IoMdAddCircleOutline>
                  </Link>
                </li>
              </div>
              <div className="block py-2 pl-3 pr-4 text-black rounded md:p-0   ">
                <li>
                  {/*<Link to="post/1">Post 1</Link>*/}
                  <RiAccountCircleLine size={30}></RiAccountCircleLine>
                </li>
              </div>

              <div className="block py-2 pl-3 pr-4 text-black rounded md:p-0   ">
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
                      <FiLogOut size={28}></FiLogOut>
                    </button>
                  )}
                </li>
              </div>
            </ul>
          </div>
        </div>
      </nav>
      <div className="mt-24"></div>
    </>
  );
};

export default Menu;
