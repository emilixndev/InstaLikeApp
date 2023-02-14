import { useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';

import Card from '../component/Card';
import Menu from '../component/Menu';
import Status from '../enums/status';
import useAppDispatch from '../hooks/useAppDispatch';
import usePost from '../hooks/usePostItems';
import { fetchPostAsync } from '../redux/post/thunks';

const usePostId = () => {
  const { id } = useParams();
  return id ? parseInt(id, 10) : -1;
};

const PostView = () => {
  const dispatch = useAppDispatch();
  const id = usePostId();
  useEffect(() => {
    dispatch(fetchPostAsync(id));
  }, []);

  const postData = usePost().items;
  const postStatut = usePost().status;

  if (id === -1) {
    return <Navigate to="feed" />;
  }

  return (
    <>
      <Menu />
      {postStatut !== Status.LOADED ? (
        <ClipLoader color="#2C53F0" cssOverride={{ margin: 'auto', display: 'block' }} />
      ) : (
        <>
          {postData && (
            <Card
              postid={postData.id}
              username={postData.owner.userName}
              img={postData.resources[0]}
              likes={postData.likesCount}
              isLiked={postData.viewerHasLiked}
              previewdComments={postData.previewComments}
              date={postData.createdAt}
              caption={postData.caption}
              location={postData.location}
              canCommment={true}
            />
          )}
        </>
      )}
    </>
  );
};

export default PostView;
