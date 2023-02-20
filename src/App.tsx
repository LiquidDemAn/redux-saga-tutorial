import { Header } from './components/header';
import { getNews } from './redux/actions/actions-creator';
import { useAppDispatch } from './redux/store/hooks';

function App() {
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
