import { Instalike } from '@jmetterrothan/instalike';

import { AppThunkAction } from '../types';
import {
  addLikeToPostAction,
  deleteCommmentAction,
  deleteLikeToPostAction,
  failurePostAction,
  loadPostAction,
  postCommentAction,
  setPost,
  sucessPostAction,
} from './action';

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

export const postCommentAsync = (comment: string, postId: number): AppThunkAction<Promise<void>> => {
  return async (dispatch, getState, api) => {
    try {
      const { data } = await api.posts.find(postId).comments.create({ text: comment, mentions: [] });
      dispatch(postCommentAction(data));
    } catch (e) {
      throw e;
    }
  };
};

export const deleteCommentPostAsync = (
  postId: number,
  commentId: number,
  key: number
): AppThunkAction<Promise<void>> => {
  return async (dispatch, getState, api) => {
    try {
      await api.posts.find(postId).comments.find(commentId).delete();
      dispatch(deleteCommmentAction(key));
    } catch (e) {
      throw e;
    }
  };
};

export const addLikePostAsync = (postId: number): AppThunkAction<Promise<void>> => {
  return async (dispatch, getState, api) => {
    try {
      await api.posts.find(postId).like();
      dispatch(addLikeToPostAction());
    } catch (e) {
      throw e;
    }
  };
};

export const deleteLikePostAsync = (postId: number): AppThunkAction<Promise<void>> => {
  return async (dispatch, getState, api) => {
    try {
      await api.posts.find(postId).unlike();
      dispatch(deleteLikeToPostAction());
    } catch (e) {
      throw e;
    }
  };
};
