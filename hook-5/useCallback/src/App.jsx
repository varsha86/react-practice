import React, { useState, useCallback, memo } from "react";

const Child = memo(function Child({ giveChoco }) {
  console.log("Child re-rendered");
  return <button onClick={giveChoco}>Eat Chocolate</button>;
});

function Parent() {
  const [count, setCount] = useState(5);

  const giveChoco = useCallback (() => {
    alert("Choco was Chocolaty");
  }, []);
    
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <Child giveChoco={giveChoco} />
    </div>
  );
}

export default Parent;