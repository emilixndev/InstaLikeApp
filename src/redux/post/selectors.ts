import { RootState } from '../store';

export const selectPost = (state: RootState) => state.post.data;

// export const commentPost = (state:RootState) => state.post.data?.previewComments

export const statutPost = (state: RootState) => state.post.loaded;
