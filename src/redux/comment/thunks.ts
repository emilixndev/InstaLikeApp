import { AppThunkAction } from '../types';
import {
  loadMoreCommentAction,
  setCommentListAction,
  setCommentsCursorAction,
  setMorePageCommentAction,
} from './action';

export const fetchCommentAsync = (idPost: number, cursor: any): AppThunkAction<Promise<void>> => {
  return async (dispatch, getState, api) => {
    try {
      const { data } = await api.posts.find(idPost).comments.fetch({ cursor: cursor, amount: 3 });
      console.log(cursor);
      if (cursor !== null) {
        dispatch(loadMoreCommentAction(data.items));
      }
      if (cursor === null) {
        dispatch(setCommentListAction(data.items));
      }
      dispatch(setMorePageCommentAction(data.hasMorePages));
      dispatch(setCommentsCursorAction(data.nextCursor));
    } catch (e) {
      // on relance l'exception pour qu'elle soit visible dans la console et traitée ailleurs
      throw e;
    }
  };
};
