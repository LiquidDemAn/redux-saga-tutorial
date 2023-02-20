import { Route, Routes, useLocation } from 'react-router-dom';
import { Home } from './pages/home';
import { PopularNews } from './pages/popular-news';
import { LatestNews } from './pages/latest-news';
import { Layout } from './components/layout';

import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './redux/store/hooks';
import { changeLocation, setLocation } from './redux/actions/actions-creator';
import { getPathname } from './redux/selectors/news';

function App() {
	const location = useLocation();
	const dispatch = useAppDispatch();
	const pathname = useAppSelector(getPathname);

	useEffect(() => {
		dispatch(setLocation(location));
	}, [location, dispatch]);

	useEffect(() => {
		if (pathname) {
			dispatch(changeLocation());
		}
	}, [pathname, dispatch]);

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
