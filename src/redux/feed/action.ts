import { Instalike } from '@jmetterrothan/instalike';

import { AppAction } from '../types';

export const SET_FEED = 'FEED/SET_USER_FEED';

export type SetFeedUserAction = AppAction<typeof SET_FEED, Instalike.Post[]>;

export type FeedAction = SetFeedUserAction;

export const setUserFEED = (data: Instalike.Post[]): SetFeedUserAction => ({
  type: SET_FEED,
  payload: data,
});
