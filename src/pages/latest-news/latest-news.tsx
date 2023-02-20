import { News } from '../../components/news';
import {
	getIsLoading,
	getLatestNews,
	getLatestNewsError,
} from '../../redux/selectors/news';
import { useAppSelector } from '../../redux/store/hooks';

export const LatestNews = () => {
	const latestNews = useAppSelector(getLatestNews);
	const latestNewsError = useAppSelector(getLatestNewsError);
	const isLoading = useAppSelector(getIsLoading);

	if (isLoading) {
		return <h3>Loading...</h3>;
	}

	return (
		<div>
			<News news={latestNews} error={latestNewsError} title='Latest News' />
		</div>
	);
};
