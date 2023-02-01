
import './App.css';
import './i18n'
import {Navigate, Route, Routes} from "react-router-dom";
import LoginView from "./views/LoginView";
import FeedView from "./views/FeedView";
import DiscoverView from "./views/DiscoverView";
import PostView from "./views/PostView";


function App() {
  return(

  <Routes>
    <Route path="login" element={<LoginView/>}></Route>
    <Route path="feed" index element={<FeedView/>}></Route>
    <Route path="discover" element={<DiscoverView/>}></Route>
    <Route path="post/:id" element={<PostView/>}></Route>
    <Route path="*" element={<Navigate to="feed"/>}/>
  </Routes>
      )
}

export default App;
