import { selectFeedItems, statusFeed } from '../redux/feed/selectors';
import { selectSuggestion } from '../redux/suggestion/selectors';
import useAppSelector from './useAppSelector';

const useSuggestion = () => {
  const data = useAppSelector(selectSuggestion);

  return { data };
};

export default useSuggestion;
