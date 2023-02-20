import { Header } from './components/header';
import { News } from './components/news';
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
		<>
			<Header />
			{/* <main>{children}</main> */}
		</>
	);
}

export default App;
