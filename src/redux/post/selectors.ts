import { RootState } from '../store';

export const selectPost = (state: RootState) => state.post.data;

export const statutPost = (state: RootState) => state.post.loaded;
