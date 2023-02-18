import { Instalike } from '@jmetterrothan/instalike';

import { AppAction } from '../types';
import {
  DELETE_ONE_COMMENT,
  LOAD_MORE_COMMENT,
  POST_NEW_COMMENT,
  SET_COMMENTS,
  SET_COMMENTS_CURSOR,
  SET_MORE_PAGE_COMMENT,
} from './constant';

export type setCommentsAction = AppAction<typeof SET_COMMENTS, Instalike.Comment[]>;
export type setCommentsCursorAction = AppAction<typeof SET_COMMENTS_CURSOR, any>;
export type loadMoreCommentAction = AppAction<typeof LOAD_MORE_COMMENT, Instalike.Comment[]>;
export type setMorePageCommentAction = AppAction<typeof SET_MORE_PAGE_COMMENT, boolean>;
export type postNewCommentAction = AppAction<typeof POST_NEW_COMMENT, Instalike.Comment>;
export type deleteOneCommentAction = AppAction<typeof DELETE_ONE_COMMENT, Instalike.Comment>;

export type CommentAction =
  | setCommentsAction
  | setCommentsCursorAction
  | loadMoreCommentAction
  | setMorePageCommentAction
  | postNewCommentAction
  | deleteOneCommentAction;

export const setCommentListAction = (data: Instalike.Comment[]): CommentAction => ({
  type: SET_COMMENTS,
  payload: data,
});

export const setCommentsCursorAction = (data: any): setCommentsCursorAction => ({
  type: SET_COMMENTS_CURSOR,
  payload: data,
});

export const loadMoreCommentAction = (data: Instalike.Comment[]): loadMoreCommentAction => ({
  type: LOAD_MORE_COMMENT,
  payload: data,
});

export const setMorePageCommentAction = (data: boolean): setMorePageCommentAction => ({
  type: SET_MORE_PAGE_COMMENT,
  payload: data,
});

export const postNewCommentAction = (data: Instalike.Comment): postNewCommentAction => ({
  type: POST_NEW_COMMENT,
  payload: data,
});
export const deleteOneCommentAction = (data: Instalike.Comment): deleteOneCommentAction => ({
  type: DELETE_ONE_COMMENT,
  payload: data,
});
