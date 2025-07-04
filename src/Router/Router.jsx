import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "../views/Home.jsx";
import Login from "../views/Login.jsx";
import Registro from "../views/Register.jsx";


const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path = "/*" element={<Home/>}/>
                <Route path = "/home" element={<Home/>}/>
                <Route path = "/login" element={<Login/>}/>
                <Route path = "/registro" element={<Registro/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export {Router}