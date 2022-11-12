import React, { useState } from "react";
import "./Counter.css";

function Counter() {
   const [arr, setArr] = useState([])

   function addPlus(){
    setArr(prevArr => ([...prevArr, "+"]))
   }

   function addMinus(){
    setArr(prevArr => [...prevArr, "-"])
   }


  return (
    <div>
      <button onClick={addMinus}>-</button>
      <button onClick={addPlus}>+</button>
      <div>{arr.toString()}</div>
    </div>
  );
}

export default Counter;
