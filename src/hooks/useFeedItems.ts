import { selectFeedItems, statusFeed } from '../redux/feed/selectors';
import useAppSelector from './useAppSelector';

const useFeed = () => {
  const items = useAppSelector(selectFeedItems);
  const status = useAppSelector(statusFeed);

  return { items, status };
};

export default useFeed;
