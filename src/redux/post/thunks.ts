import { Instalike } from '@jmetterrothan/instalike';

import { fetchFeedUserAsync } from '../feed/thunks';
import { AppThunkAction } from '../types';
import {
  addLikeToPostAction,
  deleteLikeToPostAction,
  failurePostAction,
  followUserPostAction,
  loadPostAction,
  setPost,
  sucessPostAction,
  unfollowUserPostAction,
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

export const addPostAsync = (
  resources: File[],
  location: string,
  caption: string,
  accessibilityCaption: string,
  hasCommentsDisabled: boolean
): AppThunkAction<Promise<void>> => {
  return async (dispatch, getState, api) => {
    try {
      const { data } = await api.posts.create({
        resources: resources,
        location: location,
        accessibilityCaption: accessibilityCaption,
        caption: caption,
        hasCommentsDisabled: hasCommentsDisabled,
      });
      dispatch(setPost(data));
    } catch (e) {
      throw e;
    }
  };
};

export const unfollowUserPostAsync = (userId: number): AppThunkAction<Promise<void>> => {
  return async (dispatch, getState, api) => {
    try {
      await api.users.me.followers.unfollow(userId);
      dispatch(unfollowUserPostAction());
    } catch (e) {
      throw e;
    }
  };
};

export const followUserPostAsync = (userId: number): AppThunkAction<Promise<void>> => {
  return async (dispatch, getState, api) => {
    try {
      await api.users.me.followers.follow(userId);
      dispatch(followUserPostAction());
    } catch (e) {
      throw e;
    }
  };
};
