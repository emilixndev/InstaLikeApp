import { useEffect } from 'react';
import { Link, Navigate, Route, Routes } from 'react-router-dom';

import './App.css';
import AuthGuard from './component/AuthGuard';
import useAppDispatch from './hooks/useAppDispatch';
import useAuthInterceptors from './hooks/useAuthInterceptors';
import useIsAuth from './hooks/useIsAuth';
import './i18n';
import { loginAsync, logoutAsync } from './redux/auth/thunks';
import DiscoverView from './views/DiscoverView';
import FeedView from './views/FeedView';
import LoginView from './views/LoginView';
import PostView from './views/PostView';

function App() {
  useAuthInterceptors();
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
      <Routes>
        <Route path="login" element={<LoginView />}></Route>
        <Route element={<AuthGuard />}>
          <Route path="feed" index element={<FeedView />}></Route>
          <Route path="discover" element={<DiscoverView />}></Route>
          <Route path="post/:id" element={<PostView />}></Route>
        </Route>
        <Route path="*" element={<Navigate to="feed" />} />
      </Routes>
    </>
  );
}

export default App;
