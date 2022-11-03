import {useState}  from "react";


function UseCustom(initialValue = 0, digit){
  const [value, setValue] = useState(initialValue);
  function IncrementHandle(event){
    event.preventDefault();
    setValue(prev => prev + digit)
  }
  function OnChangeHandle(event){
    event.preventDefault();
    let num = Number(event.target.value)
    setValue(num)
    console.log(event.target.value)  
  }

  function DecrementHandle(event){
    event.preventDefault();
    setValue(prev => prev - digit)
  }

  function ResetHandle(event){
    event.preventDefault();
    setValue(0)
  }
  return [value, OnChangeHandle, IncrementHandle, DecrementHandle, ResetHandle]
}

export default UseCustom;
