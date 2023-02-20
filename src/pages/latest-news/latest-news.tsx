import { useEffect } from 'react';
import { News } from '../../components/news';
import { loadLatestNews } from '../../redux/actions/actions-creator';
import { getLatestNews, getLatestNewsError } from '../../redux/selectors/news';
import { useAppSelector, useAppDispatch } from '../../redux/store/hooks';

export const LatestNews = () => {
	const dispatch = useAppDispatch();

	const latestNews = useAppSelector(getLatestNews);
	const latestNewsError = useAppSelector(getLatestNewsError);

	useEffect(() => {
		dispatch(loadLatestNews());
	}, [dispatch]);

	return (
		<div>
			<News news={latestNews} error={latestNewsError} title='Latest News' />
		</div>
	);
};
