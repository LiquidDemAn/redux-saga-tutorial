import { actionTypes } from '../actions/typedef';

const initialState = {
	count: 0,
};

export const counter = (state = initialState, { type }: { type: string }) => {
	switch (type) {
		case actionTypes.INCREASE_COUNT:
			return { ...state, count: state.count + 1 };
		case actionTypes.DECREASE_COUNT:
			return { ...state, count: state.count - 1 };
		default:
			return state;
	}
};
