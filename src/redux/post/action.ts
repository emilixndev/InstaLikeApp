import { Instalike } from '@jmetterrothan/instalike';

import { DeleteCommentFeedAction } from '../feed/action';
import { AppAction } from '../types';
import {
  DELETE_COMMENT,
  POST_COMMENT,
  REQUEST_POST_FAILURE,
  REQUEST_POST_START,
  REQUEST_POST_SUCCESS,
  SET_POST,
} from './constant';

export type setPostAction = AppAction<typeof SET_POST, Instalike.Post>;

export type LoadPostStartAction = AppAction<typeof REQUEST_POST_START>;
export type LoadPostEndSucessAction = AppAction<typeof REQUEST_POST_SUCCESS>;
export type LoadPostEndFailureAction = AppAction<typeof REQUEST_POST_FAILURE>;

export type deletePostCommentAction = AppAction<typeof DELETE_COMMENT>;
export type postCommentAction = AppAction<typeof POST_COMMENT, Instalike.Comment>;

export type PostAction =
  | setPostAction
  | LoadPostStartAction
  | LoadPostEndSucessAction
  | LoadPostEndFailureAction
  | deletePostCommentAction
  | postCommentAction;

export const setPost = (data: Instalike.Post): setPostAction => ({
  type: SET_POST,
  payload: data,
});

export const loadPostAction = (): LoadPostStartAction => ({
  type: REQUEST_POST_START,
  payload: undefined,
});

export const sucessPostAction = (): LoadPostEndSucessAction => ({
  type: REQUEST_POST_SUCCESS,
  payload: undefined,
});

export const failurePostAction = (): LoadPostEndFailureAction => ({
  type: REQUEST_POST_FAILURE,
  payload: undefined,
});
export const postCommentAction = (data: Instalike.Comment): postCommentAction => ({
  type: POST_COMMENT,
  payload: data,
});

export const deleteCommmentAction = (id: number): deletePostCommentAction => ({
  type: DELETE_COMMENT,
  payload: id,
});
