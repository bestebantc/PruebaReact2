import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import OurTeam from "../pages/OurTeam";
import Gallery from "../pages/Gallery";
import Login from "../pages/Login";
import ErrorPage from "../pages/ErrorPage";

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="team" element={<OurTeam/>}/>
                <Route path="gallery" element={<Gallery/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="*" element={<ErrorPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;