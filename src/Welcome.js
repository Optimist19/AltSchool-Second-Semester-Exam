import React from "react";
import {Link} from "react-router-dom";
import "./App.css"
import { Helmet } from 'react-helmet-async';

const WelcomeCounterApp = () =>{
  return(
    <div>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="home counter" />
        <link rel="canonical" href="/" />
      </Helmet>
      <div className="link-container">
        {/* <Link to="/useState-counter">Link to useState hook counter</Link> */}
        <Link className="link" to="/custom-counter">Custom counter</Link>
        <Link className="link" to="/useReducer-counter">useReducer counter</Link>
        <Link className="link" to="/CustomReducer-counter">CustomReducer counter</Link>
        <Link className="link" to="/Error">Click me</Link>
      </div>
      <h1>Welcome to my Counter App</h1>
      <p>My Counter App is an application with three features, 
        which help us change our value either by increasing, decreasing
        or resetting the value  using the available buttons provided.
        The links we have are :
      </p>
      <li>Go to Home</li> 
      <li>useReducer counter</li> 
      <li>CustomReducer-Hook counter</li> 
      <li>custom counter</li> 
      <li>Click me link is to test error boundary</li> 
      
    </div>
  )
}

export default WelcomeCounterApp;