import { useReducer } from "react";
import { Button } from "reactstrap";

// The optional payload property MAY be any type of value. It represents the payload (полезная нагрузка) of the action. Any information about the action that is not the type or status of the action should be part of the payload field.

const initialState = 0;
const reducer = (state, action) => {
  // action is an object = {type: 'case description', payload:'action info in return'}
  switch (action.type) {
    case "decrement":
      return state - action.payload;
    case "reset":
      return 0;
    case "increment":
      return state + action.payload;
    default:
      return state;
  }
};

export const AdvancedCounter = () => {
  const [counter, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="counter">
      <h3>Advanced Counter</h3>
      <h1 style={{ color: "tomato", fontWeight: "bold" }}>{counter}</h1>

      <Button onClick={() => dispatch({ type: "decrement", payload: 10 })}>
        Decrement
      </Button>

      <Button onClick={() => dispatch({ type: "reset" })}>Reset</Button>

      <Button onClick={() => dispatch({ type: "increment", payload: 10 })}>
        Increment
      </Button>
    </div>
  );
};
