import { useReducer } from "react";
import { Button } from "reactstrap";

const initialState = 0;
const reducer = (state, action) => {
  // switch -> sophisticated search mechanism, O(log n), syntactical readability
  switch (action) {
    case "decrement":
      return state - 1; // behaves like setState()
    case "reset":
      return 0;
    case "increment":
      return state + 1;
    default:
      return state;
  }
};

export const Counter = () => {
  const [counter, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="counter">
      <h1 style={{ color: "tomato", fontWeight: "bold" }}>{counter}</h1>

      <Button onClick={() => dispatch("decrement")}>Decrement</Button>
      <Button onClick={() => dispatch("reset")}>Reset</Button>
      <Button onClick={() => dispatch("increment")}>Increment</Button>

      {/* onClick invokes dispatch method of useReducer hook, dispatch lets reducer function know which action is being performed (search for action case in switch) */}
    </div>
  );
};

{
  /*
export const Counter = () => {
  // useState hook is extra feature that allows to create state inside functional component
  // useState hook returns an array [initial value of state, individual set function]
  // state = {counter: 0}
  // setState({counter: this.state.counter + 1})

  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };
  const reset = () => {
    setCounter(0);
  };

  return (
    <div className="counter my-3">
      <h1>{counter}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={reset}>Reset</button>
      <button onClick={decrement}>Decrement</button>

      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <button onClick={() => setCounter(0)}>Reset</button>
      <button onClick={() => setCounter(counter - 1)}>Decrement</button> 
      <hr />
    </div>
  );
};
*/
}
