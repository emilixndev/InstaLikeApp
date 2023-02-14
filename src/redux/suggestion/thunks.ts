import { failureFeedAction, loadFeedAction, setUserFEED, sucessFeedAction } from '../feed/action';
import { AppThunkAction } from '../types';
import { setSuggestionAction } from './action';

export const fetchSuggestionAsync = (): AppThunkAction<Promise<void>> => {
  return async (dispatch, getState, api) => {
    try {
      const { data } = await api.users.me.followSuggestions.fetch({ amount: 5 });
      dispatch(setSuggestionAction(data));
    } catch (e) {
      // on relance l'exception pour qu'elle soit visible dans la console et traitée ailleurs
      throw e;
    }
  };
};
