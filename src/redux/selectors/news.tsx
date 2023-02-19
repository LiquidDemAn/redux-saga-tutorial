import { AppState } from '../store/typedef';

export const getLatestNews = (state: AppState) => state.news.latestNews;
export const getPopularNews = (state: AppState) => state.news.popularNews;
export const getLatestNewsError = (state: AppState) =>
	state.news.latestNewsError;
export const getPopularNewsError = (state: AppState) =>
	state.news.popularNewsError;
