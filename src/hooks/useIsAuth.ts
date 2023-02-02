import type { RootState } from '../redux/store';
import useAppSelector from './useAppSelector';

const selectIsAuth = (state: RootState) => state.auth.isAuth;

const useIsAuth = () => {
  return useAppSelector(selectIsAuth);
};

export default useIsAuth;
