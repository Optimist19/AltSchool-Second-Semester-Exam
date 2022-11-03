// import React from "react";
function setValue(value){
	console.log(typeof value)
	return Number(value)
  }
  
  export default function CustomReducer(initialState = 0, action){
	if(action === "Increment") return initialState + 1;
	else if(action.type === "name") {
	  return setValue(action.payload)
	}
	else if(action === "Decrement") return initialState - 1
	else if(action === "Reset") return 0;
	else return initialState;
  }
  