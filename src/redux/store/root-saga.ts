import { getLatestNews } from './../api/api';
import { takeEvery } from '@redux-saga/core/effects';
import { GET_LATEST_NEWS } from '../constants';

export function* workerSaga(): Generator<unknown> {
	const data = yield getLatestNews();
	console.log(data);
}

export function* watchClickSaga() {
	yield takeEvery(GET_LATEST_NEWS, workerSaga);
}

export function* rootSaga() {
	yield watchClickSaga();
}
