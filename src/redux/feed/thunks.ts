import { Instalike } from '@jmetterrothan/instalike';
import { data } from 'autoprefixer';

import type { AppThunkAction } from '../types';
import {
  deleteCommentFeedAction,
  failureFeedAction,
  likePostFeedAction,
  loadFeedAction,
  setUserFEED,
  sucessFeedAction,
  unlikePostFeedAction,
} from './action';

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

export const likepostAsync = (postId: number): AppThunkAction<Promise<void>> => {
  return async (dispatch, getState, api) => {
    try {
      await api.posts.find(postId).like();
      dispatch(likePostFeedAction(postId));
    } catch (e) {
      throw e;
    }
  };
};

export const unlikePostAsync = (postId: number): AppThunkAction<Promise<void>> => {
  return async (dispatch, getState, api) => {
    try {
      await api.posts.find(postId).unlike();
      dispatch(unlikePostFeedAction(postId));
    } catch (e) {
      throw e;
    }
  };
};

export const deleteCommentFeedAsync = (postId: number, commentId: number): AppThunkAction<Promise<void>> => {
  return async (dispatch, getState, api) => {
    try {
      await api.posts.find(postId).comments.find(commentId).delete();
      dispatch(deleteCommentFeedAction(commentId));
    } catch (e) {
      throw e;
    }
  };
};
