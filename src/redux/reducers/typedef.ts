import { NewsType } from '../actions/typedef';

export type NewsStateType = {
	latestNews: NewsType[];
	popularNews: NewsType[];
	latestNewsError: string;
	popularNewsError: string;
};
