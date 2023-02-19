import {
	actionTypes,
	IncreaseCount,
	DecreaseCount,
	GetLatestNews,
	SetLatestNews,
	News,
} from './typedef';

export const increaseCount = (): IncreaseCount => ({
	type: actionTypes.INCREASE_COUNT,
});

export const decreaseCount = (): DecreaseCount => ({
	type: actionTypes.DECREASE_COUNT,
});

export const getLatestNewsAction = (): GetLatestNews => ({
	type: actionTypes.GET_LATEST_NEWS,
});

export const setLatestNewsAction = (payload: News[]): SetLatestNews => ({
	type: actionTypes.SET_LATEST_NEWS,
	payload,
});
