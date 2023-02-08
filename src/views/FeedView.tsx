import { Instalike } from '@jmetterrothan/instalike';
import { useEffect } from 'react';
import { ClipLoader } from 'react-spinners';

import Card from '../component/Card';
import Menu from '../component/Menu';
import Status from '../enums/status';
import useAppDispatch from '../hooks/useAppDispatch';
import useFeed from '../hooks/useFeedItems';
import { fetchFeedUserAsync, likepostAsync, unlikePostAsync } from '../redux/feed/thunks';

const FeedView = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchFeedUserAsync());
  }, []);

  const feedItems = useFeed().items;
  const status = useFeed().status;

  return (
    <>
      <Menu></Menu>
      {status !== Status.LOADED ? (
        <ClipLoader color="#2C53F0" cssOverride={{ margin: 'auto', display: 'block' }} />
      ) : (
        <>
          {feedItems &&
            feedItems.map((item: Instalike.Post) => {
              return (
                <Card
                  key={item.id}
                  postid={item.id}
                  username={item.owner.userName}
                  img={item.resources[0]}
                  likes={item.likesCount}
                  location={item.location}
                  caption={item.caption}
                  isLiked={item.viewerHasLiked}
                ></Card>
              );
            })}
        </>
      )}
    </>
  );
};

export default FeedView;
