import { NewsType, LocationType } from '../actions/typedef';

export type NewsStateType = {
	latestNews: NewsType[];
	popularNews: NewsType[];
	latestNewsError: string;
	popularNewsError: string;
	isLoading: boolean;
	location?: LocationType;
};
