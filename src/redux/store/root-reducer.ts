import { news } from './../reducers/news';
import { counter } from './../reducers/counter';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
	counter,
	news
});
