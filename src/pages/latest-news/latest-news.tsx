import { News } from '../../components/news';
import { getLatestNews, getLatestNewsError } from '../../redux/selectors/news';
import { useAppSelector, useAppDispatch } from '../../redux/store/hooks';

export const LatestNews = () => {
	const dispatch = useAppDispatch();

	const latestNews = useAppSelector(getLatestNews);
	const latestNewsError = useAppSelector(getLatestNewsError);

	return (
		<div>
			<News news={latestNews} error={latestNewsError} title='Latest News' />
		</div>
	);
};
