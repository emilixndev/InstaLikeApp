import { Instalike } from '@jmetterrothan/instalike';
import { useEffect } from 'react';
import { ClipLoader } from 'react-spinners';

import Card from '../component/Card';
import Menu from '../component/Menu';
import Suggestion from '../component/Suggestion';
import Status from '../enums/status';
import useAppDispatch from '../hooks/useAppDispatch';
import useFeed from '../hooks/useFeedItems';
import usePost from '../hooks/usePostItems';
import useSuggestion from '../hooks/useSuggestionItems';
import { fetchFeedUserAsync } from '../redux/feed/thunks';
import { setPost } from '../redux/post/action';
import { fetchSuggestionAsync } from '../redux/suggestion/thunks';

const FeedView = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchFeedUserAsync());
  }, []);

  useEffect(() => {
    dispatch(fetchSuggestionAsync());
  }, []);

  const feedItems = useFeed().items;
  const status = useFeed().status;
  const suggestion = useSuggestion().data;
  return (
    <>
      <Menu></Menu>
      {status !== Status.LOADED ? (
        <ClipLoader color="#2C53F0" cssOverride={{ margin: 'auto', display: 'block' }} />
      ) : (
        <>
          {suggestion && (
            <div className="mx-auto mt-8 mb-16 px-4 max-w-[640px] flex">
              {suggestion.map((user, key) => {
                return <Suggestion user={user} key={key}></Suggestion>;
              })}
            </div>
          )}
          {feedItems &&
            feedItems.map((item: Instalike.Post) => {
              return (
                <Card
                  post={item}
                  key={item.id}
                  postid={item.id}
                  username={item.owner.userName}
                  img={item.resources[0]}
                  likes={item.likesCount}
                  location={item.location}
                  caption={item.caption}
                  isLiked={item.viewerHasLiked}
                  previewdComments={item.previewComments}
                  date={item.createdAt}
                  canCommment={false}
                  inFeed={true}
                ></Card>
              );
            })}
        </>
      )}
    </>
  );
};

export default FeedView;
