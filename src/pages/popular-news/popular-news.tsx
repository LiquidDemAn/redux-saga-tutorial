import React, { useEffect } from 'react';
import { News } from '../../components/news';
import { loadPopularNews } from '../../redux/actions/actions-creator';
import {
	getPopularNews,
	getPopularNewsError,
} from '../../redux/selectors/news';
import { useAppSelector, useAppDispatch } from '../../redux/store/hooks';

export const PopularNews = () => {
	const dispatch = useAppDispatch();

	const popularNews = useAppSelector(getPopularNews);
	const popularNewsError = useAppSelector(getPopularNewsError);

	useEffect(() => {
		dispatch(loadPopularNews());
	}, [dispatch]);

	return (
		<div>
			<News news={popularNews} error={popularNewsError} title='Popular News' />
		</div>
	);
};
