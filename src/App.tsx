import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/home';
import { PopularNews } from './pages/popular-news';
import { LatestNews } from './pages/latest-news';
import { Layout } from './components/layout';

function App() {

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
