import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "../components/pages/Home";
import Logo from "../components/logo/Logo";
import "../index.js"
import Posts from "../components/pages/Posts.js";
import PostDetails from "../components/pages/PostDetails.js";



export default function AppRouter(){
    return(
        <BrowserRouter>
        <nav className="w-full bg-red-950 text-white flex justify-between items-center px-8 py-4 box-border">
            <Logo />
            <ul className="flex justify-between items-center bg-white rounded-md p-2">
                <li className="text-red-950 hover: scale-110 hover:bg-red-950 hover:text-white px-1 h-full font-bold rounded-l-md transition-all"><Link to="/">Home</Link></li>
                <li className="text-red-950 hover: scale-110 hover:bg-red-950 hover:text-white px-1 h-full font-bold rounded-r-md transition-all"><Link to="/posts">Posts</Link></li>
            </ul>
        </nav>
         <Routes>
            <Route exact path="/" element={< Home />} />
            <Route exact path="/posts" element={< Posts />} />
            <Route exact path="/posts/:id" element={< PostDetails />} />
         </Routes>
        </BrowserRouter>
    )

}