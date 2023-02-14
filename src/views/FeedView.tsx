import { Instalike } from '@jmetterrothan/instalike';
import { useEffect } from 'react';
import { ClipLoader } from 'react-spinners';

import Card from '../component/Card';
import PreviewComment from '../component/Comment/PreviewComment';
import Menu from '../component/Menu';
import Suggestion from '../component/Suggestion';
import Status from '../enums/status';
import useAppDispatch from '../hooks/useAppDispatch';
import useFeed from '../hooks/useFeedItems';
import useSuggestion from '../hooks/useSuggestionItems';
import { fetchFeedUserAsync, likepostAsync, unlikePostAsync } from '../redux/feed/thunks';
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
            <div className="flex items-center justify-center p-5">
              {suggestion.map((user) => {
                return <Suggestion username={user.userName}></Suggestion>;
              })}
            </div>
          )}
          {feedItems &&
            feedItems.map((item: Instalike.Post) => {
              return (
                <>
                  <Card
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
                  ></Card>
                </>
              );
            })}
        </>
      )}
    </>
  );
};

export default FeedView;
