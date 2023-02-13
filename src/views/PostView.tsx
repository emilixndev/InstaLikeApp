import { Navigate, useParams } from 'react-router-dom';

import Card from '../component/Card';
import Menu from '../component/Menu';

const usePostId = () => {
  const { id } = useParams();
  return id ? parseInt(id, 10) : -1;
};

const PostView = () => {
  const id = usePostId();

  if (id === -1) {
    return <Navigate to="feed" />;
  }

  return (
    <>
      <Menu />
      PostView #{id}
      {/*<Card postid={id} username={'test'} img={'rtest'} likes={2} isLiked={true} />*/}
    </>
  );
};

export default PostView;
