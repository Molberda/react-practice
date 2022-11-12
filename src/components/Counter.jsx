import React, { useState } from "react";
import './Counter.css'

function Counter() {
    const [cart, setCart] = useState({item:'apple', quantity:0})

function addApple() {
    setCart(prevCart => ({
        ...prevCart,
        quantity: prevCart.quantity + 1,
    }))
}

function subApple() {
    setCart(prevCart => ({
        ...prevCart,
        quantity: prevCart.quantity - 1,
    }))
}
  return (
    <div className="counter">
      <button onClick={subApple}>-</button>
      <h1>{cart.quantity}{cart.item}</h1>
      <button onClick={addApple} >+</button>
    </div>
  );
}

export default Counter;
