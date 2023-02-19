import { actionTypes } from './typedef';

export const increaseCount = () => ({
	type: actionTypes.INCREASE_COUNT,
});

export const decreaseCount = () => ({
	type: actionTypes.DECREASE_COUNT,
});

export const getLatestNewsAction = () => ({
	type: actionTypes.GET_LATEST_NEWS,
});

export const setLatestNewsAction = (payload: []) => ({
	type: actionTypes.SET_LATEST_NEWS,
	payload,
});
