import React, {useReducer} from "react";
import CustomReducer from "./hooks/Reducer"
import "./App.css"
import {Link} from "react-router-dom"
import { Helmet } from 'react-helmet-async';



export default function Reduce() {

  const [count, dispatch] = useReducer(CustomReducer, 0)


  function OnchangeHandle(event){
    dispatch({type: "name", payload: event.target.value})
    event.preventDefault();
    console.log(event.target.value)
    // setValue(count.event.target)
  }

  return (
    <div>
      <Helmet>
        <title>useReducer-Counter-Hook</title>
        <meta name="description" content="Reducer counter" />
        <link rel="canonical" href="/useReducer-counter" />
      </Helmet>
      <div className="link-container">
        <Link className="link" to="/">Go to Home</Link>
        {/* <Link to="/useState-counter">Link to custom hook counter</Link> */}
        <Link className="link" to="/custom-counter">Custom counter</Link>
        <Link className="link" to="/CustomReducer-counter">CustomReducer counter</Link>
        <Link className="link" to="/Error">Click me</Link>
      </div>
      <h1>useReducer-hook-counter:</h1>
      <h1 className="count">{count}</h1>
      <input onChange={OnchangeHandle} type="number" placeholder="number" />
      <div className="button-container">
        <button onClick={()=>dispatch("Increment")}>Increment</button>
        <button onClick={()=>dispatch("Decrement")}>Decrement</button>
        <button onClick={()=>dispatch("Reset")}>Reset</button>
      </div>
    </div>
  );
}