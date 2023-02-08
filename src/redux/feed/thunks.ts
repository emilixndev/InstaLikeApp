import type { AppThunkAction } from '../types';
import { failureFeedAction, loadFeedAction, setUserFEED, sucessFeedAction } from './action';

export const fetchFeedUserAsync = (): AppThunkAction<Promise<void>> => {
  return async (dispatch, getState, api) => {
    dispatch(loadFeedAction());

    try {
      const { data } = await api.users.me.feed.fetch({ cursor: null });
      dispatch(setUserFEED(data.items));

      dispatch(sucessFeedAction());
    } catch (e) {
      dispatch(failureFeedAction());

      // on relance l'exception pour qu'elle soit visible dans la console et traitée ailleurs
      throw e;
    }
  };
};
