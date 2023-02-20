export enum actionTypes {
	SET_LATEST_NEWS = 'SET_LATEST_NEWS',
	SET_POPULAR_NEWS = 'SET_POPULAR_NEWS',
	SET_LATEST_NEWS_ERROR = 'SET_LATEST_NEWS_ERROR',
	SET_POPULAR_NEWS_ERROR = 'SET_POPULAR_NEWS_ERROR',
	SET_LOCATION = 'SET_LOCATION',
	CHANGE_LOCATION = 'CHANGE_LOCATION',
	SET_LOADER_DATA = 'SET_LOADER_DATA',
}

export type NewsType = {
	created_at: Date;
	title: string;
	url: string;
	author: string;
	_tags: string[];
	objectID: string;
	points: number;
	num_comments: number;
};

export type LocationType = {
	pathname: string;
};

/*ACTIONS TYPES */

export type SetLatestNews = {
	type: typeof actionTypes.SET_LATEST_NEWS;
	payload: NewsType[];
};

export type SetPopularNews = {
	type: typeof actionTypes.SET_POPULAR_NEWS;
	payload: NewsType[];
};

export type SetLatestNewsError = {
	type: typeof actionTypes.SET_LATEST_NEWS_ERROR;
	payload: string;
};

export type SetPopularNewsError = {
	type: typeof actionTypes.SET_POPULAR_NEWS_ERROR;
	payload: string;
};

export type SetLocation = {
	type: typeof actionTypes.SET_LOCATION;
	payload: LocationType;
};

export type SetLoading = {
	type: typeof actionTypes.SET_LOADER_DATA;
	payload: boolean;
};

export type ChangeLocation = {
	type: typeof actionTypes.CHANGE_LOCATION;
};

export type NewsActions =
	| SetLoading
	| SetLocation
	| SetLatestNews
	| SetPopularNews
	| SetLatestNewsError
	| SetPopularNewsError;
