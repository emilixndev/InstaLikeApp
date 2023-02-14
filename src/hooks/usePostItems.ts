import { selectPost, statutPost } from '../redux/post/selectors';
import useAppSelector from './useAppSelector';

const usePost = () => {
  const items = useAppSelector(selectPost);
  const status = useAppSelector(statutPost);

  return { items, status };
};

export default usePost;
