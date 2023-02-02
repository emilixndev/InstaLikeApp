import { useDispatch } from 'react-redux';

import { AppThunkDispatch } from '../redux/types';

const useAppDispatch = () => {
  return useDispatch<AppThunkDispatch>();
};

export default useAppDispatch;
