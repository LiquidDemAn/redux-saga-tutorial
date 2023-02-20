import {
	actionTypes,
	SetLatestNews,
	NewsType,
	SetPopularNews,
	SetPopularNewsError,
	SetLatestNewsError,
} from './typedef';

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

/*ERRORS */
export const setPopularNewsError = (payload: string): SetPopularNewsError => ({
	type: actionTypes.SET_POPULAR_NEWS_ERROR,
	payload,
});

export const setLatestNewsError = (payload: string): SetLatestNewsError => ({
	type: actionTypes.SET_LATEST_NEWS_ERROR,
	payload,
});
