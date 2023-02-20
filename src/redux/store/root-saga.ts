import { takeEvery, put, call, fork, all } from '@redux-saga/core/effects';
import { getLatestNews, getPopularNews } from './../api/api';
import { actionTypes } from '../actions/typedef';
import {
	setLatestNews,
	setLatestNewsError,
	setPopularNews,
	setPopularNewsError,
} from './../actions/actions-creator';

export function* handleLatestNews(): Generator<any> {
	try {
		const data: any = yield call(getLatestNews, 'react');
		yield put(setLatestNews(data.hits));
	} catch (error) {
		console.log(error);
		yield put(setLatestNewsError('Error fetching latest news'));
	}
}

export function* handlePopularNews(): Generator<any> {
	try {
		const data: any = yield call(getPopularNews);
		yield put(setPopularNews(data.hits));
	} catch (error) {
		console.log(error);
		yield put(setPopularNewsError('Error fetching popular news'));
	}
}

export function* watchPopularNews(): Generator<any> {
	yield takeEvery(actionTypes.LOAD_POPULAR_NEWS, handlePopularNews);
}

export function* watchClickSaga() {
	yield takeEvery(actionTypes.LOAD_LATEST_NEWS, handleLatestNews);
}

export function* rootSaga() {
	yield all([fork(watchPopularNews), fork(watchClickSaga)]);
}
