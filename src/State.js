// import React, {useState} from "react";
// import {Link} from "react-router-dom";
// import "./App.css"

// // import UseNumber from "./hooks/UseNumber"

// const State = () =>{
//   // const [value, IncrementHandle, DecrementHandle, ResetHandle] =  UseNumber(0, 5)
//   const [value, setValue] = useState(0)

//   function IncrementHandle(event){
//     event.preventDefault();
//     setValue(prev =>
//     {
//       return prev + 1
//     })
//   }

//   function DecrementHandle(event){
//     event.preventDefault();
//     setValue(prev =>
//     {
//       return prev - 1
//     })
//   }

//   function ResetHandle(event){
//     event.preventDefault();
//     setValue(prev =>
//     { return 0})
//   }



//   return(
//     <div>
//         <Link to="/">Go to Home</Link>
//         <Link to="/custom-counter">Link to custom hook counter</Link>
//         <Link to="/useReducer-counter">Link to useReducer hook counter</Link>
//         <Link to="/Error">Click me</Link>
//         <h1>useState-hook-counter: {value}</h1>
//         <button onClick={IncrementHandle}>Increment</button>
//         <button onClick={DecrementHandle}>Decrement</button>
//         <button onClick={ResetHandle}>Reset</button>
//     </div>
//   )
// }

// export default State;