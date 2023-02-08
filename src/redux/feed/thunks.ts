import type { AppThunkAction } from '../types';
import { setUserFEED } from './action';

export const fetchFeedUserAsync = (): AppThunkAction<Promise<void>> => {
  return async (dispatch, getState, api) => {
    // dispatch(loadReqStart());

    try {
      const { data } = await api.users.me.feed.fetch({ cursor: null });
      dispatch(setUserFEED(data.items));

      // dispatch(load(response.data));
      // dispatch(loadReqEndSuccess());
    } catch (e) {
      // dispatch(loadReqEndFailure());

      // on relance l'exception pour qu'elle soit visible dans la console et traitée ailleurs
      throw e;
    }
  };
};
