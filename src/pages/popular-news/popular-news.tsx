import { News } from '../../components/news';
import {
	getPopularNews,
	getPopularNewsError,
} from '../../redux/selectors/news';
import { useAppSelector } from '../../redux/store/hooks';

export const PopularNews = () => {
	const popularNews = useAppSelector(getPopularNews);
	const popularNewsError = useAppSelector(getPopularNewsError);

	return (
		<div>
			<News news={popularNews} error={popularNewsError} title='Popular News' />
		</div>
	);
};
