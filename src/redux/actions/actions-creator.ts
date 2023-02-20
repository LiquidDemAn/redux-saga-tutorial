import {
	actionTypes,
	SetLatestNews,
	NewsType,
	SetPopularNews,
	SetPopularNewsError,
	SetLatestNewsError,
	SetLoading,
	LocationType,
	ChangeLocation,
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

export const setLocation = (payload: LocationType) => ({
	type: actionTypes.SET_LOCATION,
	payload,
});

export const changeLocation = (): ChangeLocation => ({
	type: actionTypes.CHANGE_LOCATION,
});

export const setLoading = (payload: boolean): SetLoading => ({
	type: actionTypes.SET_LOADER_DATA,
	payload,
});
