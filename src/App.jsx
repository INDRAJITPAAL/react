import React, { useEffect, useMemo, useState } from "react";
import { use } from "react";
function App() {


  const [visibility, setVisiblity] = useState(true);

  useEffect(() => {
    let clock = setInterval(() => {
      setVisiblity((prev) => !prev);
    }, 5000);
    return function () {
      console.log("unMount in visility")
      clearInterval(clock);
    }

  }, [])

  return (
    <>
      <h1>hii there start</h1>
      {visibility && <Counter />}
      <h1>hii there last</h1>
    </>
  )
}



function Counter() {
  const [count, setCount] = useState(0);
  console.log("count");
  useEffect(() => {
    let clock = setInterval(() => {
      console.log("counter interval");
      setCount(prev => prev + 1);
    }, 1000)

    return function () {
      console.log("unMount in counter")
      clearInterval(clock);
    }

  }, []);

  return (
    <>

      <h1> count is :  {count}</h1>

    </>
  )
}



export default App
