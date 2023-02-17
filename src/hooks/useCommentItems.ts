import { selectComments } from '../redux/comment/selectors';
import useAppSelector from './useAppSelector';

const useComments = () => {
  const data = useAppSelector(selectComments);

  return { data };
};

export default useComments;
