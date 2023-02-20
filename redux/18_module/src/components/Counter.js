import classes from './Counter.module.css';
import  {useDispatch, useSelector} from 'react-redux';
import { counterActions } from '../store/counter';
const Counter = () => {

  const counter = useSelector((state) => state.counter.counter);//here we are accessing the reducers individually
  const toggleVisible = useSelector((state) => state.counter.showCounter);
  const dispatch = useDispatch();
  ///console.log(toggleVisible);
  const toggleCounterHandler = () => {
      dispatch(counterActions.toggleCounter());
  };
  const IncrementHandler = () => {
    dispatch(counterActions.increment());
  }
  const DecrementHandler = () => {
    dispatch(counterActions.decrement());
  }
  //console.log(toggleVisible);
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {toggleVisible && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={IncrementHandler}>Increment</button>
        <button onClick={DecrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
