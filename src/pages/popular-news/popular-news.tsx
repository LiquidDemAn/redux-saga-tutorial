import { News } from '../../components/news';
import {
	getPopularNews,
	getPopularNewsError,
	getIsLoading,
} from '../../redux/selectors/news';
import { useAppSelector } from '../../redux/store/hooks';

export const PopularNews = () => {
	const popularNews = useAppSelector(getPopularNews);
	const popularNewsError = useAppSelector(getPopularNewsError);
	const isLoading = useAppSelector(getIsLoading);

	if (isLoading) {
		return <h3>Loading...</h3>;
	}

	return (
		<div>
			<News news={popularNews} error={popularNewsError} title='Popular News' />
		</div>
	);
};
