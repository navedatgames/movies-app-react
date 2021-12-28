import React from "react"
import {BrowserRouter, Route ,Link,Routes } from "react-router-dom"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Quote from "./pages/Quote"
const App = ()=>{
    return(
        <div>
           
        <BrowserRouter>

            <Routes>
                <Route path = "/login" element = {<Login/>} />
                <Route path = "/signup" element = {<Signup/>}/>
                <Route path = "/quote" element = {<Quote/>}/>
            </Routes>
        </BrowserRouter>
        </div>
    )
}
export default App