import { News } from '../../components/news';
import { getLatestNews, getLatestNewsError } from '../../redux/selectors/news';
import { useAppSelector, useAppDispatch } from '../../redux/store/hooks';

export const LatestNews = () => {
	const latestNews = useAppSelector(getLatestNews);

	const latestNewsError = useAppSelector(getLatestNewsError);

	const dispatch = useAppDispatch();

	return (
		<div>
			<News news={latestNews} error={latestNewsError} title='Latest News' />
		</div>
	);
};
