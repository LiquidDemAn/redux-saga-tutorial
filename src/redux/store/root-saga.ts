import { takeEvery, put, call, fork } from '@redux-saga/core/effects';
import { getLatestNews, getPopularNews } from './../api/api';
import { actionTypes } from '../actions/typedef';
import {
	setLatestNewsAction,
	setLatestNewsError,
	setPopularNews,
	setPopularNewsError,
} from './../actions/actions-creator';

export function* handleLatestNews(): Generator<any> {
	try {
		const data: any = yield call(getLatestNews, 'react');
		yield put(setLatestNewsAction(data.hits));
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

export function* handleNews(): Generator<any> {
	yield fork(handleLatestNews);
	yield fork(handlePopularNews);
}

export function* watchClickSaga() {
	yield takeEvery(actionTypes.GET_NEWS, handleNews);
}

export function* rootSaga() {
	yield watchClickSaga();
}
