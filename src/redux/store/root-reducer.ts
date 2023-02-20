import { news } from './../reducers/news';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
	news,
});
