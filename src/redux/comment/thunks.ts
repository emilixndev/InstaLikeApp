import { Instalike } from '@jmetterrothan/instalike';

import { addOneCounterCommentAction, removeOneCommentCounterPostAction } from '../post/action';
import { AppThunkAction } from '../types';
import {
  deleteOneCommentAction,
  loadMoreCommentAction,
  postNewCommentAction,
  setCommentListAction,
  setCommentsCursorAction,
  setMorePageCommentAction,
} from './action';

export const fetchCommentAsync = (idPost: number, cursor: any): AppThunkAction<Promise<void>> => {
  return async (dispatch, getState, api) => {
    try {
      const { data } = await api.posts.find(idPost).comments.fetch({ cursor: cursor, amount: 3 });
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

export const postNewCommentAsync = (comment: string, postId: number): AppThunkAction<Promise<void>> => {
  return async (dispatch, getState, api) => {
    try {
      const { data } = await api.posts.find(postId).comments.create({ text: comment, mentions: [] });
      dispatch(postNewCommentAction(data));
      dispatch(addOneCounterCommentAction());
    } catch (e) {
      throw e;
    }
  };
};

export const deleteOneCommentPostAsync = (comment: Instalike.Comment): AppThunkAction<Promise<void>> => {
  return async (dispatch, getState, api) => {
    try {
      await api.posts.find(comment.postId).comments.find(comment.id).delete();
      dispatch(deleteOneCommentAction(comment));
      dispatch(removeOneCommentCounterPostAction());
    } catch (e) {
      throw e;
    }
  };
};
