import { Header } from './components/header';
import { getNews } from './redux/actions/actions-creator';
import { getPopularNews, getPopularNewsError } from './redux/selectors/news';
import { useAppSelector, useAppDispatch } from './redux/store/hooks';

function App() {
	const popularNews = useAppSelector(getPopularNews);

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
