import { Instalike } from '@jmetterrothan/instalike';
import { Reducer } from 'redux';

import Status from '../../enums/status';
import { PostAction } from './action';
import {
  ADD_LIKE_POST,
  ADD_ONE_COUNTER_COMMENT,
  DELETE_LIKE_POST,
  REMOVE_ONE_COUNTER_COMMENT,
  REQUEST_POST_FAILURE,
  REQUEST_POST_START,
  REQUEST_POST_SUCCESS,
  SET_POST,
} from './constant';

type PostState = {
  data: Instalike.Post;
  loaded: Status;
  comments: Instalike.Comment[];
};

const intialState: PostState = {
  data: {
    id: -1,
    caption: '',
    accessibilityCaption: '',
    location: '',
    resources: [],
    hasCommentsDisabled: false,
    likesCount: 0,
    previewLikes: [],
    commentsCount: 0,
    previewComments: [],
    viewerHasLiked: false,
    resourceType: 'Post',
    createdAt: '',
    owner: {
      resourceType: 'User',
      userName: '',
      firstName: '',
      lastName: '',
      id: -1,
      createdAt: '',
      fullName: '',
      avatar: '',
      email: '',
      biography: '',
      followersCount: -1,
      followingCount: -1,
      postsCount: -1,
      isFollowedByViewer: false,
      isViewer: false,
      updatedAt: '',
    },
  },
  loaded: Status.UNLOADED,
  comments: [],
};

const postReducer: Reducer<PostState, PostAction> = (state = intialState, action) => {
  switch (action.type) {
    case SET_POST:
      return { ...state, data: action.payload };
    case REQUEST_POST_SUCCESS:
      return { ...state, loaded: Status.LOADED };
    case REQUEST_POST_START:
      return { ...state, loaded: Status.LOADING };
    case REQUEST_POST_FAILURE:
      return { ...state, loaded: Status.FAILED };

    case ADD_LIKE_POST:
      return { ...state, data: { ...state.data, likesCount: state.data.likesCount + 1, viewerHasLiked: true } };
    case DELETE_LIKE_POST:
      return { ...state, data: { ...state.data, likesCount: state.data.likesCount - 1, viewerHasLiked: false } };

    case ADD_ONE_COUNTER_COMMENT:
      return { ...state, data: { ...state.data, commentsCount: state.data.commentsCount + 1 } };
    case REMOVE_ONE_COUNTER_COMMENT:
      return { ...state, data: { ...state.data, commentsCount: state.data.commentsCount - 1 } };

    default:
      return state;
  }
};

export default postReducer;
