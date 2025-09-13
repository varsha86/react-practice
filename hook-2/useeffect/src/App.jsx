import React from "react"
import { useState } from "react"
import { useEffect } from "react"

const App = () => {
  const [num1, setNum1] = useState(300)
  const [num2, setNum2] = useState(3000)

  useEffect(() => {
    setNum1(500);
    console.log("from useEffect");

    return () => {
      setNum1(300);
      console.log("memory cleaned");
    };
  }, [num1, num2]);
  return (
    <div>
      <h2>Number: {num1}</h2>
      <button onClick={() => setNum1((curr) => curr +1)}>Add</button>
      <h2>Number: {num2}</h2>
      <button onClick={() => setNum2((curr) => curr +1)}>Add</button>
    </div>
  );
};

export default App