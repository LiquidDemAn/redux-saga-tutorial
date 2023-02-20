import News from './components/news/news';
import { getNews } from './redux/actions/actions-creator';
import {
	getLatestNews,
	getPopularNews,
	getLatestNewsError,
	getPopularNewsError,
} from './redux/selectors/news';
import { useAppSelector, useAppDispatch } from './redux/store/hooks';

function App() {
	const latestNews = useAppSelector(getLatestNews);
	const popularNews = useAppSelector(getPopularNews);

	const latestNewsError = useAppSelector(getLatestNewsError);
	const popularNewsError = useAppSelector(getPopularNewsError);

	const dispatch = useAppDispatch();

	const handleNews = () => {
		dispatch(getNews());
	};

	return (
		<div>
			<button onClick={handleNews}>Get News</button>
			{latestNewsError && <p>{latestNewsError}</p>}
			{popularNewsError && <p>{popularNewsError}</p>}
			{!latestNewsError && <News news={latestNews} title='Latest News' />}
			{!popularNewsError && <News news={popularNews} title='Popular News' />}
		</div>
	);
}

export default App;
