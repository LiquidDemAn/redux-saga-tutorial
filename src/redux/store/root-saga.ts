import { setLatestNewsAction } from './../actions/actions-creator';
import { takeEvery, put, call } from '@redux-saga/core/effects';
import { getLatestNews } from './../api/api';
import { GET_LATEST_NEWS } from '../constants';

export function* handleLatestNews(): Generator<any> {
	try {
		const data: any = yield call(getLatestNews, 'react');
		yield put(setLatestNewsAction(data.hits));
	} catch (error) {}
}

export function* watchClickSaga() {
	yield takeEvery(GET_LATEST_NEWS, handleLatestNews);
}

export function* rootSaga() {
	yield watchClickSaga();
}
