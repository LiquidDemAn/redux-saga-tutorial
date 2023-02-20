import { put, call, select, takeLatest } from '@redux-saga/core/effects';
import { getLatestNews, getPopularNews } from './../api/api';
import { actionTypes } from '../actions/typedef';
import {
	setLatestNews,
	setLatestNewsError,
	setLoading,
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

export function* watchNewsSaga(): Generator<any> {
	yield put(setLoading(true));

	const path = yield select(({ news }) => news.location.pathname);

	if (path === '/popular-news') {
		yield call(handlePopularNews);
	}

	if (path === '/latest-news') {
		yield call(handleLatestNews);
	}

	yield put(setLoading(false));
}

export function* rootSaga() {
	yield takeLatest(actionTypes.CHANGE_LOCATION, watchNewsSaga);
}
