import React,{useState} from 'react'

const App = () => {
  const [n, setN] = useState(300);

  return (
    <>
      <h2>Number: {n}</h2>
      <button onClick={() => setN(n + 1)}>+</button>
      <button onClick={() => setN(n - 1)}>-</button>
    </>
  );

}

export default App;