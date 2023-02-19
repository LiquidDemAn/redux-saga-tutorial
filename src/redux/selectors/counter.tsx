import { AppState } from '../store/typedef';

export const getCount = (state: AppState) => state.counter.count;
