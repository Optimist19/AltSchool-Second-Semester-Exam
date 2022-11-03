import {useReducer} from "react";


export default function useCustomReducer(num){
  console.log(num)
  function setValue(value){
    console.log(typeof value)
    return Number(value)
  }
  
  function Reducer(initialState = 0, action){
    if(action === "Increment") return initialState + 1;
    else if(action.type === "name") {
      return setValue(action.payload)
    }
    else if(action === "Decrement") return initialState - 1
    else if(action === "Reset") return 0;
    else return initialState;
  }

  const [count, dispatch] = useReducer(Reducer, num)

  function OnchangeHandle(event){
    dispatch({type: "name", payload: event.target.value})
    event.preventDefault();
    console.log(event.target.value)
    // setValue(count.event.target)
  }
  return{count, dispatch, OnchangeHandle}
}