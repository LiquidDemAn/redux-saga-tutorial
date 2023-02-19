import { setLatestNewsAction } from './../actions/actions-creator';
import { takeEvery, put, call } from '@redux-saga/core/effects';
import { getLatestNews } from './../api/api';
import { actionTypes } from '../actions/typedef';

export function* handleLatestNews(): Generator<any> {
	try {
		const data: any = yield call(getLatestNews, 'react');
		yield put(setLatestNewsAction(data.hits));
	} catch (error) {
		console.log(error);
	}
}

export function* watchClickSaga() {
	yield takeEvery(actionTypes.GET_LATEST_NEWS, handleLatestNews);
}

export function* rootSaga() {
	yield watchClickSaga();
}
