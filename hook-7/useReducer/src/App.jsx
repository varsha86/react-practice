import React, { useReducer, useEffect } from "react";

function reducer(state, action){
  switch (action.type) {
    case "Red":
      return {color: "Red"};
    case "Yellow":
      return {color: "Yellow"};
    case "Green":
      return {color: "Green"};
    default:
      return state;
  }
}

function TrafficColor() {
  const [state, dispatch] = useReducer(reducer, {color: "Red"});

  useEffect(() => {
    console.log("Traffic light change to:" +state.color);
  }, [state.color]);
  
  return (
    <div style={{textAlign: "center"}}>
    <h1>{state.color}</h1>
    <button onClick={() => dispatch({type: "Red"})}>Red</button>
    <button onClick={() => dispatch({type: "Yellow"})}>Yellow</button>
    <button onClick={() => dispatch({type: "Green"})}>Green</button>
    </div>
  );
};

export default TrafficColor;
