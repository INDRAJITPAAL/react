import ErrorBaundary from "./ErrorBaundary"

import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom"
import { useState } from "react";
import { useRef } from "react";
//stop watch
export default function App() {

  let  userefFocus = useRef();

    function focus() {
        userefFocus .current.focus();
    }

    return <>
        <input type="text" ref={userefFocus } />
        <button onClick={focus} >focus</button>
    </>

}