import { Instalike } from '@jmetterrothan/instalike';
import { useEffect } from 'react';
import { render } from 'react-dom';

import Card from '../component/Card';
import Menu from '../component/Menu';
import useAppDispatch from '../hooks/useAppDispatch';
import useFeedItems from '../hooks/useFeedItems';
import { fetchFeedUserAsync } from '../redux/feed/thunks';

const FeedView = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchFeedUserAsync());
  }, []);

  const feedItems = useFeedItems();

  return (
    <>
      <Menu></Menu>
      {/*{console.log(feedItems)}*/}
      {feedItems &&
        feedItems.map((items: Instalike.Post) => {
          return (
            <Card
              username={items.owner.userName}
              img={items.resources[0]}
              likes={items.likesCount}
              location={items.location}
              caption={items.caption}
            ></Card>
          );
        })}
      {/*<Card></Card>;*/}
      {/*<Card></Card>*/}
      {/*<Card></Card>*/}
    </>
  );
};

export default FeedView;
