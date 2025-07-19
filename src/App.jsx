import ErrorBaundary from "./ErrorBaundary"

import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom"

export default function App() {

    return <>
        <BrowserRouter>

            <Routes>

                <Route path="/" element={<Layout />} >
                    <Route path="/home" element={"landing page"} />
                    <Route path="/contact" element={"contact  page"} />
                    <Route path="/about" element={"about  page"} />
                    <Route path="*" element={"page not found"} />
                </Route>
            </Routes>

        </BrowserRouter>
    </>

}


function Layout() {


    return (<>
        <h1> <Link to="/contact">contact</Link> &nbsp;
            <Link to="/home">home</Link> &nbsp;
            <Link to="/about">about</Link> &nbsp;</h1>
        <br />
        <Outlet />
        <h1>footer</h1>

    </>)

}