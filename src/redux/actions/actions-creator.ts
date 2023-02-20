import {
	actionTypes,
	SetLatestNews,
	NewsType,
	SetPopularNews,
	SetPopularNewsError,
	SetLatestNewsError,
	LoadLatestNews,
	LoadPopularNews,
} from './typedef';

/*LATEST NEWS */
export const loadLatestNews = (): LoadLatestNews => ({
	type: actionTypes.LOAD_LATEST_NEWS,
});

export const setLatestNews = (payload: NewsType[]): SetLatestNews => ({
	type: actionTypes.SET_LATEST_NEWS,
	payload,
});

export const setLatestNewsError = (payload: string): SetLatestNewsError => ({
	type: actionTypes.SET_LATEST_NEWS_ERROR,
	payload,
});

/*POPULAR NEWS */
export const loadPopularNews = (): LoadPopularNews => ({
	type: actionTypes.LOAD_POPULAR_NEWS,
});

export const setPopularNews = (payload: NewsType[]): SetPopularNews => ({
	type: actionTypes.SET_POPULAR_NEWS,
	payload,
});

export const setPopularNewsError = (payload: string): SetPopularNewsError => ({
	type: actionTypes.SET_POPULAR_NEWS_ERROR,
	payload,
});
