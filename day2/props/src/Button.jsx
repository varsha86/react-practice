import React from 'react'

function Button({ text, color, onClick }) {
  return (
    <>
      <button
       style={{
        backgroundColor: color, 
        color: "#83b5c4ff", 
        padding: "10px 20px", 
        border: "auto", 
        borderRadius: "5px", 
        marginRight: "10px"
        }}
    >
        {text}
      </button>
    </>
  );
}

export default Button