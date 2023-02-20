export enum actionTypes {
	SET_LATEST_NEWS = 'SET_LATEST_NEWS',
	SET_POPULAR_NEWS = 'SET_POPULAR_NEWS',
	SET_LATEST_NEWS_ERROR = 'SET_LATEST_NEWS_ERROR',
	SET_POPULAR_NEWS_ERROR = 'SET_POPULAR_NEWS_ERROR',
	GET_NEWS = 'GET_NEWS',
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

/*ACTIONS TYPES */
export type SetLatestNews = {
	type: typeof actionTypes.SET_LATEST_NEWS;
	payload: NewsType[];
};

export type SetPopularNews = {
	type: typeof actionTypes.SET_POPULAR_NEWS;
	payload: NewsType[];
};

export type GetNews = {
	type: typeof actionTypes.GET_NEWS;
};

export type SetLatestNewsError = {
	type: typeof actionTypes.SET_LATEST_NEWS_ERROR;
	payload: string;
};

export type SetPopularNewsError = {
	type: typeof actionTypes.SET_POPULAR_NEWS_ERROR;
	payload: string;
};

export type NewsActions =
	| GetNews
	| SetLatestNews
	| SetPopularNews
	| SetLatestNewsError
	| SetPopularNewsError;
