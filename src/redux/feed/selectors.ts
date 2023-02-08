import { RootState } from '../store';

export const selectFeedItems = (state: RootState) => state.feed.items;
export const statusFeed = (state: RootState) => state.feed.status;
