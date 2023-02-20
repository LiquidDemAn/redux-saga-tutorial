export enum actionTypes {
	LOAD_LATEST_NEWS = 'LOAD_LATEST_NEWS',
	LOAD_POPULAR_NEWS = 'LOAD_POPULAR_NEWS',
	SET_LATEST_NEWS = 'SET_LATEST_NEWS',
	SET_POPULAR_NEWS = 'SET_POPULAR_NEWS',
	SET_LATEST_NEWS_ERROR = 'SET_LATEST_NEWS_ERROR',
	SET_POPULAR_NEWS_ERROR = 'SET_POPULAR_NEWS_ERROR',
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
export type LoadLatestNews = {
	type: typeof actionTypes.LOAD_LATEST_NEWS;
};

export type LoadPopularNews = {
	type: typeof actionTypes.LOAD_POPULAR_NEWS;
};

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

export type NewsActions =
	| SetLatestNews
	| SetPopularNews
	| SetLatestNewsError
	| SetPopularNewsError;
