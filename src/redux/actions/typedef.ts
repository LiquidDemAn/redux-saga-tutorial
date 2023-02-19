export enum actionTypes {
	INCREASE_COUNT = 'INCREASE_COUNT',
	DECREASE_COUNT = 'DECREASE_COUNT',
	GET_LATEST_NEWS = 'GET_LATEST_NEWS',
	SET_LATEST_NEWS = 'SET_LATEST_NEWS',
}

export type News = {
	created_at: Date;
	title: string;
	url: string;
	author: string;
	_tags: string[];
};

/*ACTIONS TYPES */
export type IncreaseCount = {
	type: typeof actionTypes.INCREASE_COUNT;
};

export type DecreaseCount = {
	type: typeof actionTypes.DECREASE_COUNT;
};

export type GetLatestNews = {
	type: typeof actionTypes.GET_LATEST_NEWS;
};

export type SetLatestNews = {
	type: typeof actionTypes.SET_LATEST_NEWS;
	payload: News[];
};

export type CounterActions = IncreaseCount | DecreaseCount;
export type NewsActions = GetLatestNews | SetLatestNews;
