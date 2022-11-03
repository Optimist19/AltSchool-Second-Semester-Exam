import React from 'react';
import useCustomReducer from './hooks/useCustomReducer';
import "./App.css"
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';


export default function CustomReducer() {
  const { count, dispatch, OnchangeHandle } = useCustomReducer(0);

  return (
    <div>
      <Helmet>
        <title>CustomReducer-Counter</title>
        <meta name="description" content="CustomReducer-Counter App" />
        <link rel="canonical" href="/CustomReducer-counter" />
      </Helmet>
      <div className="link-container">
        <Link className="link" to="/">
          Go to Home
        </Link>
        <Link className="link" to="/custom-counter">
          Custom counter
        </Link>
        <Link className="link" to="/useReducer-counter">
          useReducer counter
        </Link>
        <Link className="link" to="/Error">
          Click me
        </Link>
      </div>
      <h1>CustomReducer-Hook-counter:</h1>
      <h1 className="count">{count}</h1>
      <input onChange={OnchangeHandle} type="number" placeholder="setValue" />
      <div className="button-container">
        <button onClick={() => dispatch('Increment')}>Increment</button>
        <button onClick={() => dispatch('Decrement')}>Decrement</button>
        <button onClick={() => dispatch('Reset')}>Reset</button>
      </div>
      {/* <h1>Hello StackBlitz!</h1> */}
      {/* <Link to="/useState-hook-counter">Link to useState hook counter</Link> */}
      {/* <Link to="/custom-Hook-counter">Link to custom hook counter</Link> */}
    </div>
  );
}
