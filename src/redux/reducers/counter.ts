import { actionTypes, CounterActions } from '../actions/typedef';
import { CounterStateType } from './typedef';

const initialState: CounterStateType = {
	count: 0,
};

export const counter = (state = initialState, { type }: CounterActions) => {
	switch (type) {
		case actionTypes.INCREASE_COUNT:
			return { ...state, count: state.count + 1 };
		case actionTypes.DECREASE_COUNT:
			return { ...state, count: state.count - 1 };
		default:
			return state;
	}
};
