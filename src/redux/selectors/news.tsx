import { AppState } from '../store/typedef';

export const getLatestNews = (state: AppState) => state.news.latestNews;
export const getPopularNews = (state: AppState) => state.news.popularNews;
