import { Link } from 'react-router-dom';

import useAppDispatch from '../hooks/useAppDispatch';
import useIsAuth from '../hooks/useIsAuth';
import { loginAsync, logoutAsync } from '../redux/auth/thunks';

const Menu = () => {
  const isAuth = useIsAuth();
  const dispatch = useAppDispatch();

  return (
    <>
      <ul>
        <li>
          <Link to="feed">Feed</Link>
        </li>
        <li>
          <Link to="discover">Discover</Link>
        </li>
        <li>
          <Link to="post/1">Post 1</Link>
        </li>
        {/*{!isAuth &&  IF SA AFFICHE */}
        {!isAuth && (
          <button
            type="button"
            onClick={() => {
              dispatch(loginAsync('emilien.muckensturm@etu.unistra.fr', 'DWEB2023'));
            }}
          >
            LOGIN
          </button>
        )}

        {isAuth && (
          <button
            type="button"
            onClick={() => {
              dispatch(logoutAsync());
            }}
          >
            LOGOUT
          </button>
        )}
      </ul>
    </>
  );
};

export default Menu;
