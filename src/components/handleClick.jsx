import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    // Zwiększ wartość licznika o 1
    setCount(count + 1);

    // Wywołaj inne funkcje lub wykonaj inne operacje
    doSomething();
    calculateTotal();
  };

  const doSomething = () => {
    // Implementacja funkcji doSomething
  };

  const calculateTotal = () => {
    // Implementacja funkcji calculateTotal
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};

export default App;
