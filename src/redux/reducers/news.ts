import { actionTypes, NewsActions } from '../actions/typedef';
import { NewsStateType } from './typedef';

const initialState: NewsStateType = {
	latestNews: [],
	popularNews: [],
};

export const news = (state = initialState, action: NewsActions) => {
	switch (action.type) {
		case actionTypes.SET_LATEST_NEWS:
			return {
				...state,
				latestNews: [...state.latestNews, ...action.payload],
			};

		case actionTypes.SET_POPULAR_NEWS:
			return {
				...state,
				popularNews: [...state.popularNews, ...action.payload],
			};
		default:
			return state;
	}
};
