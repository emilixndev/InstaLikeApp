import { AppThunkAction } from '../types';
import { failurePostAction, loadPostAction, setPost, sucessPostAction } from './action';

export const fetchPostAsync = (postid: number): AppThunkAction<Promise<void>> => {
  return async (dispatch, getState, api) => {
    dispatch(loadPostAction());

    try {
      const { data } = await api.posts.find(postid).fetch();
      dispatch(setPost(data));

      dispatch(sucessPostAction());
    } catch (e) {
      dispatch(failurePostAction());

      // on relance l'exception pour qu'elle soit visible dans la console et traitée ailleurs
      throw e;
    }
  };
};
