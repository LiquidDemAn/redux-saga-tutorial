import { actionTypes, NewsActions } from '../actions/typedef';
import { NewsStateType } from './typedef';

const initialState: NewsStateType = {
	latestNews: [],
	popularNews: [],
	latestNewsError: '',
	popularNewsError: '',
	isLoading: false,
};

export const news = (state = initialState, action: NewsActions) => {
	switch (action.type) {
		case actionTypes.SET_LATEST_NEWS:
			return {
				...state,
				latestNews: action.payload,
			};

		case actionTypes.SET_POPULAR_NEWS:
			return {
				...state,
				popularNews: action.payload,
			};

		case actionTypes.SET_LATEST_NEWS_ERROR:
			return {
				...state,
				latestNewsError: action.payload,
			};

		case actionTypes.SET_POPULAR_NEWS_ERROR:
			return {
				...state,
				popularNewsError: action.payload,
			};

		case actionTypes.SET_LOCATION:
			return {
				...state,
				location: action.payload,
			};

		case actionTypes.SET_LOADER_DATA:
			return {
				...state,
				isLoading: action.payload,
			};
		default:
			return state;
	}
};
