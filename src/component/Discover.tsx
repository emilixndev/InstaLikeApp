import { useEffect, useState } from 'react';
import { AiFillHeart, FaCommentDots } from 'react-icons/all';
import { Navigate } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';

import Status from '../enums/status';
import useAppDispatch from '../hooks/useAppDispatch';
import useFeed from '../hooks/useFeedItems';
import { fetchDiscoverAsync } from '../redux/feed/thunks';
import Menu from './Menu';

const Discover = () => {
  const dispatch = useAppDispatch();
  const [selectedPost, setSelectedPost] = useState(0);
  const [redirect, setRedirect] = useState(false);
  const feed = useFeed().items;
  const status = useFeed().status;
  useEffect(() => {
    dispatch(fetchDiscoverAsync());
  }, []);

  return (
    <>
      {redirect && <Navigate to={'/post/' + selectedPost} replace={true} />};
      {status !== Status.LOADED ? (
        <ClipLoader color="#2C53F0" cssOverride={{ margin: 'auto', display: 'block' }} />
      ) : (
        <div className="grid grid-cols-3 gap-4pt-4 w-[70%] m-auto ">
          {feed &&
            feed.map((post, key) => {
              return (
                <div className=" text-center px-4 py-2 m-2 ">
                  <button
                    onClick={() => {
                      setSelectedPost(post.id);
                      setRedirect(true);
                    }}
                  >
                    <div className="relative overflow-hidden bg-no-repeat bg-cover max-w-xs group">
                      <img className="object-cover  w-96 h-96 rounded-3xl  " src={post.resources[0].src} />

                      <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 group-hover:opacity-30 transition duration-400 ease-in-out bg-black rounded-3xl"></div>
                      <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full  overflow-hidden text-white opacity-0 group-hover:opacity-100 transition duration-400 ease-in-out  rounded-3xl">
                        <div className="text-white flex justify-center h-full items-center">
                          <div className="p-3 flex">
                            <AiFillHeart size={30} className="mr-3"></AiFillHeart>
                            {post.likesCount}
                          </div>
                          <div className="p-3 flex ">
                            <FaCommentDots size={30} className="mr-3"></FaCommentDots>
                            {post.commentsCount}
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              );
            })}
        </div>
      )}
    </>
  );
};
export default Discover;
