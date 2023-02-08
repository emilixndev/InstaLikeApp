import { RootState } from '../store';

export const selectFeedItems = (state: RootState) => state.feed.items;
