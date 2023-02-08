import { Instalike } from '@jmetterrothan/instalike';

import { AppAction } from '../types';
import { REQUEST_FEED_FAILURE, REQUEST_FEED_START, REQUEST_FEED_SUCCESS, SET_FEED } from './constant';

export type SetFeedUserAction = AppAction<typeof SET_FEED, Instalike.Post[]>;
export type LoadFeedStartAction = AppAction<typeof REQUEST_FEED_START>;
export type LoadFeedEndSucessAction = AppAction<typeof REQUEST_FEED_SUCCESS>;
export type LoadFeedEndFailureAction = AppAction<typeof REQUEST_FEED_FAILURE>;

export type FeedAction = SetFeedUserAction | LoadFeedStartAction | LoadFeedEndFailureAction | LoadFeedEndSucessAction;

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
