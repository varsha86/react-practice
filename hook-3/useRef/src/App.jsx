import React from "react";
import { useRef, useState } from "react";

function App() {
  const inputRef = useRef(0);
  const [Input, setInput] = useState("");

  const handleFocus = () => {
    inputRef.current.focus();
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <input ref={inputRef} value={Input} onChange={handleChange}/>
      <button onClick={handleFocus}>Click here</button>
      <h5>Your Name: {Input}</h5>
    </div>
  );
}

export default App;