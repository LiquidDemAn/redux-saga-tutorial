import {
	actionTypes,
	IncreaseCount,
	DecreaseCount,
	SetLatestNews,
	NewsType,
	SetPopularNews,
} from './typedef';

export const increaseCount = (): IncreaseCount => ({
	type: actionTypes.INCREASE_COUNT,
});

export const decreaseCount = (): DecreaseCount => ({
	type: actionTypes.DECREASE_COUNT,
});

export const setLatestNewsAction = (payload: NewsType[]): SetLatestNews => ({
	type: actionTypes.SET_LATEST_NEWS,
	payload,
});

export const setPopularNews = (payload: NewsType[]): SetPopularNews => ({
	type: actionTypes.SET_POPULAR_NEWS,
	payload,
});

export const getNews = () => ({
	type: actionTypes.GET_NEWS,
});
