import { actionTypes } from '../actions/typedef';
import { NewsType } from './typedef';

const initialState: NewsType = {
	latestNews: [],
};

export const news = (
	state = initialState,
	{ type, payload }: { type: string; payload: [] }
) => {
	switch (type) {
		case actionTypes.SET_LATEST_NEWS:
			return {
				...state,
				latestNews: [...state.latestNews, ...payload],
			};
		default:
			return state;
	}
};
