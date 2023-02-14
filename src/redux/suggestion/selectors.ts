import { RootState } from '../store';

export const selectSuggestion = (state: RootState) => state.suggestion.data;
