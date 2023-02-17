import { combineReducers } from 'redux';

const test = (state = {}, action: any) => {
	return state;
};

export const rootReducer = combineReducers({
	test,
});
