import { getNews } from './redux/actions/actions-creator';
import { useAppDispatch } from './redux/store/hooks';
import { Route, Routes } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Home } from './pages/home';
import { PopularNews } from './pages/popular-news';
import { LatestNews } from './pages/latest-news';
import { Layout } from './components/layout';

function App() {
	const history = createBrowserHistory();
	const dispatch = useAppDispatch();

	const handleNews = () => {
		dispatch(getNews());
	};

	return (
		<Routes>
			<Route element={<Layout />}>
				<Route path='/' element={<Home />} />
				<Route path='/popular-news' element={<PopularNews />} />
				<Route path='/latest-news' element={<LatestNews />} />
			</Route>
		</Routes>
	);
}

export default App;
