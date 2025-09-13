import React, { useActionState } from 'react'
import { useState, useMemo } from 'react'

const App = () => {
  const [num, setNum] = useState(9)
  
  const slowCalculation = (num) => {
    console.log("Calculating...");
    let result = 1
    for (let i = 1; i <= num; i++){
      result *=i;
    }
    return result;
  };

  const answer = useMemo(() => slowCalculation(num), [num]);

  return (
    <div>
      <h2>Number of {num}= {answer}</h2>
      <button onClick={() => setNum(num + 1)}>CLick to Calculate</button>
    </div>
  );
}

export default App
