export enum actionTypes {
	SET_LATEST_NEWS = 'SET_LATEST_NEWS',
	SET_POPULAR_NEWS = 'SET_POPULAR_NEWS',
	SET_LATEST_NEWS_ERROR = 'SET_LATEST_NEWS_ERROR',
	SET_POPULAR_NEWS_ERROR = 'SET_POPULAR_NEWS_ERROR',
	SET_LOCATION = 'SET_LOCATION',
	LOCATION_CHANGE = 'LOCATION_CHANGE',
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

export type NewsActions =
	| SetLocation
	| SetLatestNews
	| SetPopularNews
	| SetLatestNewsError
	| SetPopularNewsError;
