import { actionTypes, NewsActions } from '../actions/typedef';
import { NewsType } from './typedef';

const initialState: NewsType = {
	latestNews: [],
};

export const news = (state = initialState, action: NewsActions) => {
	switch (action.type) {
		case actionTypes.SET_LATEST_NEWS:
			return {
				...state,
				latestNews: [...state.latestNews, ...action.payload],
			};
		default:
			return state;
	}
};
