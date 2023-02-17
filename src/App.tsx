import { useAppSelector } from './redux/hooks';

function App() {
	const store = useAppSelector((store) => store);

	console.log(store);

	return <h1>Hello</h1>;
}

export default App;
