import {
	actionTypes,
	SetLatestNews,
	NewsType,
	SetPopularNews,
	SetPopularNewsError,
	SetLatestNewsError,
} from './typedef';

/*LATEST NEWS */

export const setLatestNews = (payload: NewsType[]): SetLatestNews => ({
	type: actionTypes.SET_LATEST_NEWS,
	payload,
});

export const setLatestNewsError = (payload: string): SetLatestNewsError => ({
	type: actionTypes.SET_LATEST_NEWS_ERROR,
	payload,
});

/*POPULAR NEWS */
export const setPopularNews = (payload: NewsType[]): SetPopularNews => ({
	type: actionTypes.SET_POPULAR_NEWS,
	payload,
});

export const setPopularNewsError = (payload: string): SetPopularNewsError => ({
	type: actionTypes.SET_POPULAR_NEWS_ERROR,
	payload,
});

export const setLocation = (payload: { pathname: string }) => ({
	type: actionTypes.SET_LOCATION,
	payload,
});

export const locationChange = () => ({
	type: actionTypes.LOCATION_CHANGE,
});
