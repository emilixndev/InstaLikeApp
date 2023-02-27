import { Instalike } from '@jmetterrothan/instalike';

import instalikeApi from '../../instalikeApi';
import { AppAction } from '../types';
import {
  FOLLOW_USER_FEED,
  LIKE_POST_FEED,
  REQUEST_FEED_FAILURE,
  REQUEST_FEED_START,
  REQUEST_FEED_SUCCESS,
  SET_FEED,
  UNFOLLOW_USER_FEED,
  UNLIKE_POST_FEED,
} from './constant';

export type SetFeedUserAction = AppAction<typeof SET_FEED, Instalike.Post[]>;
export type LoadFeedStartAction = AppAction<typeof REQUEST_FEED_START>;
export type LoadFeedEndSucessAction = AppAction<typeof REQUEST_FEED_SUCCESS>;
export type LoadFeedEndFailureAction = AppAction<typeof REQUEST_FEED_FAILURE>;
export type SetLikeFeedAction = AppAction<typeof LIKE_POST_FEED>;
export type SetUnlikeFeedAction = AppAction<typeof UNLIKE_POST_FEED>;
export type unfollowUserFeedAction = AppAction<typeof UNFOLLOW_USER_FEED>;
export type followUserFeedAction = AppAction<typeof FOLLOW_USER_FEED>;

export type FeedAction =
  | SetFeedUserAction
  | LoadFeedStartAction
  | LoadFeedEndFailureAction
  | LoadFeedEndSucessAction
  | SetUnlikeFeedAction
  | SetLikeFeedAction
  | unfollowUserFeedAction
  | followUserFeedAction;

export const setUserFEED = (data: Instalike.Post[]): SetFeedUserAction => ({
  type: SET_FEED,
  payload: data,
});

export const loadFeedAction = (): LoadFeedStartAction => ({
  type: REQUEST_FEED_START,
  payload: undefined,
});

export const sucessFeedAction = (): LoadFeedEndSucessAction => ({
  type: REQUEST_FEED_SUCCESS,
  payload: undefined,
});

export const failureFeedAction = (): LoadFeedEndFailureAction => ({
  type: REQUEST_FEED_FAILURE,
  payload: undefined,
});

export const likePostFeedAction = (data: number): SetLikeFeedAction => ({
  type: LIKE_POST_FEED,
  payload: data,
});
export const unlikePostFeedAction = (data: number): SetUnlikeFeedAction => ({
  type: UNLIKE_POST_FEED,
  payload: data,
});

export const unfollowUserFeedAction = (data: number): unfollowUserFeedAction => ({
  type: UNFOLLOW_USER_FEED,
  payload: data,
});
export const followUserFeedAction = (data: number): followUserFeedAction => ({
  type: FOLLOW_USER_FEED,
  payload: data,
});
