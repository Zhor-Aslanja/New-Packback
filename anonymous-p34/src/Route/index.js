import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../Components/Home";
import About from "../Components/About";
import Contact from "../Components/Contact";
import News from "../Components/News";

const AppRouter = () => {
    return(
        <Router>
            <nav > 
                <ul>
                    <li><Link to ="/">Home</Link></li>
                    <li><Link to ="/about">About</Link></li>
                    <li><Link to ="/contact">Contact</Link></li>
                    <li><Link to ="/news">News</Link></li>
                </ul>
            </nav>
`            <Routes>
                <Route path="/" exact element={<Home  />}></Route>
                <Route path="/about"  element={<About />}></Route>
                <Route path="/contact" element={<Contact  />}></Route>
                <Route path="/news" element={<News  />}></Route>
            </Routes>`
        </Router>
    );
};

export default AppRouter;