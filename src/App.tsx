import { Navigate, Route, Routes } from 'react-router-dom';

import './App.css';
import AuthGuard from './component/AuthGuard';
import useAuthInterceptors from './hooks/useAuthInterceptors';
import './i18n';
import AddPostView from './views/AddPostView';
import DiscoverView from './views/DiscoverView';
import FeedView from './views/FeedView';
import LoginView from './views/LoginView';
import PostView from './views/PostView';

function App() {
  useAuthInterceptors();
  return (
    <>
      <Routes>
        <Route path="login" element={<LoginView />}></Route>
        <Route element={<AuthGuard />}>
          <Route path="feed" index element={<FeedView />}></Route>
          <Route path="discover" element={<DiscoverView />}></Route>
          <Route path="addPost" element={<AddPostView />}></Route>
          <Route path="post/:id" element={<PostView />}></Route>
        </Route>
        <Route path="*" element={<Navigate to="feed" />} />
      </Routes>
    </>
  );
}

export default App;
