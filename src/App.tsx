
import './App.css';
import './i18n'
import {Link, Navigate, Route, Routes} from "react-router-dom";
import LoginView from "./views/LoginView";
import FeedView from "./views/FeedView";
import DiscoverView from "./views/DiscoverView";
import PostView from "./views/PostView";


function App() {
  return(
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
        </ul>
  <Routes>
    <Route path="login" element={<LoginView/>}></Route>
    <Route path="feed" index element={<FeedView/>}></Route>
    <Route path="discover" element={<DiscoverView/>}></Route>
    <Route path="post/:id" element={<PostView/>}></Route>
    <Route path="*" element={<Navigate to="feed"/>}/>
  </Routes>
      </>)
}

export default App;
