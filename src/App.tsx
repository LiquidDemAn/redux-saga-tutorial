import { decreaseCount, increaseCount } from './redux/actions/actions-creator';
import { useAppSelector, useAppDispatch } from './redux/store/hooks';

function App() {
	const count = useAppSelector((state) => state.counter.count);
	const dispatch = useAppDispatch();

	const handleIncrease = () => {
		dispatch(increaseCount());
	};

	const handleDecrease = () => {
		dispatch(decreaseCount());
	};

	return (
		<div>
			<button onClick={handleIncrease}>+1</button>
			<button onClick={handleDecrease}>-1</button>
			<h1>{count}</h1>
		</div>
	);
}

export default App;
