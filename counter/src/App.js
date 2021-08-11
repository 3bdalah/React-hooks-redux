import React from "react";
import { useSelector ,useDispatch} from "react-redux";
import './App.css';
import { decrement, increment, incrementByAmount } from "./Redux/counter";

function App() {
  const  {count} = useSelector((state) => state.counter);
  const  dispatch = useDispatch();
  return (
    <div className="App">
      <h1> Counter : {count}</h1>
      <div className="ParentClck">
        <button onClick={() => dispatch(increment())}>Increament</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(incrementByAmount(10))}>Increament 10</button>
        <button onClick={() => dispatch(incrementByAmount(-10))}>Decreament 10</button>
      </div>
    </div>
  );
}

export default App;
