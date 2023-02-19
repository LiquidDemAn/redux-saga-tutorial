import News from './components/news/news';
import {
	decreaseCount,
	increaseCount,
	getNews,
} from './redux/actions/actions-creator';
import { getCount } from './redux/selectors/counter';
import { getLatestNews, getPopularNews } from './redux/selectors/news';
import { useAppSelector, useAppDispatch } from './redux/store/hooks';

function App() {
	const latestNews = useAppSelector(getLatestNews);
	const popularNews = useAppSelector(getPopularNews);

	const count = useAppSelector(getCount);
	const dispatch = useAppDispatch();

	const handleIncrease = () => {
		dispatch(increaseCount());
	};

	const handleDecrease = () => {
		dispatch(decreaseCount());
	};

	const handleNews = () => {
		dispatch(getNews());
	};

	return (
		<div>
			<button onClick={handleNews}>Get News</button>
			<News news={latestNews} title='Latest News' />
			<News news={popularNews} title='Popular News' />
		</div>
	);
}

export default App;
