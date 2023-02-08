import { selectFeedItems } from '../redux/feed/selectors';
import useAppSelector from './useAppSelector';

const useFeedItems = () => {
  return useAppSelector(selectFeedItems);
};

export default useFeedItems;
