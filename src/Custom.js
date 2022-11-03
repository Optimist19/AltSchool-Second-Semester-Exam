import React from "react";
import {Link} from "react-router-dom"
import UseCustom from "./hooks/UseCustom.js"
import "./App.css"
import {Helmet} from "react-helmet-async";

const Custom = () =>{
  const [value, OnChangeHandle, IncrementHandle, DecrementHandle, ResetHandle] =  UseCustom(0, 12)

  return(
    <div>
      <Helmet>
        <title>My Custom-Counter</title>
        <meta name="description" content="Custom-Counter"/>
        <link rel="canonical" href="/custom-counter" />
      </Helmet>
      <div className="link-container">
        <Link className="link" to="/">Go to Home</Link>
        {/* <br/> */}
        {/* <Link to="/useState-counter">Link to useState hook counter</Link> */}
        <Link className="link" to="/useReducer-counter">useReducer counter</Link>
        <Link className="link" to="/CustomReducer-counter">CustomReducer counter</Link>
        <Link className="link" to="/Error">Click me</Link>
      </div>
      <h1>custom-Hook-counter: {value}</h1>
      <h1 className="count">{value}</h1>
        <input onChange={OnChangeHandle} type="number" placeholder="number" />
      <div className="button-container">
        <button onClick={IncrementHandle}>Increment</button>
        <button onClick={DecrementHandle}>Decrement</button>
        <button onClick={ResetHandle}>Reset</button>
      </div>
    </div>
  )
}
export default Custom;