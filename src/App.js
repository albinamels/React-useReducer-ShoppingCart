import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Counter } from "./components/Counter";
import { AdvancedCounter } from "./components/AdvancedCounter";
import { ShoppingList } from "./components/ShoppingList";

function App() {
  return (
    <div className="App">
      <Counter />
      <AdvancedCounter />
      <ShoppingList />
    </div>
  );
}

export default App;
