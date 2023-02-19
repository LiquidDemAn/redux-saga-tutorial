import { NewsType } from '../actions/typedef';

export type CounterStateType = {
	count: number;
};

export type NewsStateType = {
	latestNews: NewsType[];
	popularNews: NewsType[];
};
