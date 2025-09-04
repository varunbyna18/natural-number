import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(10); // default: first 10 numbers

  // Generate natural numbers [1 ... count]
  const numbers = Array.from({ length: count }, (_, i) => i + 1);

  return (
    <div className="container">
      <h1>Natural Numbers</h1>

      <div className="input-section">
        <label>How many numbers to display: </label>
        <input
          type="number"
          value={count}
          min="1"
          onChange={(e) => setCount(Number(e.target.value))}
        />
      </div>

      <div className="numbers">
        {numbers.join(", ")}
      </div>
    </div>
  );
}

export default App;
