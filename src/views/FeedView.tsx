import { Instalike } from '@jmetterrothan/instalike';
import { useEffect } from 'react';
import { ClipLoader } from 'react-spinners';

import Card from '../component/Card';
import Menu from '../component/Menu';
import Status from '../enums/status';
import useAppDispatch from '../hooks/useAppDispatch';
import useFeed from '../hooks/useFeedItems';
import { fetchFeedUserAsync } from '../redux/feed/thunks';

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
            feedItems.map((items: Instalike.Post) => {
              return (
                <Card
                  username={items.owner.userName}
                  img={items.resources[0]}
                  likes={items.likesCount}
                  location={items.location}
                  caption={items.caption}
                  isLiked={items.viewerHasLiked}
                ></Card>
              );
            })}
        </>
      )}

      {/*{console.log(feedItems)}*/}

      {/*<Card></Card>;*/}
      {/*<Card></Card>*/}
      {/*<Card></Card>*/}
    </>
  );
};

export default FeedView;
