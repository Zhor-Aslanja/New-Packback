import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "../components/pages/Home";
import Logo from "../components/logo/Logo";
import "../index.js"



export default function AppRouter(){
    return(
        <BrowserRouter>
        <nav className="w-full bg-red-950 text-white flex justify-between items-center px-8 py-4 box-border">
            <Logo />
            <ul>
                <li><Link to="/">Home</Link></li>
            </ul>
        </nav>
         <Routes>
            <Route exact path="/" element={< Home />} />
         </Routes>
        </BrowserRouter>
    )

}