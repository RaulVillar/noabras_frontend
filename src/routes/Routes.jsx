import React from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../views/home/Home";
import Histories from "../views/histories/Histories";
import MyLegends from "../views/legends/MyLegends";
import Psychophonie from "../views/psychophonie/Psychophonie";


const Router = () => {
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/leyendas" element={<MyLegends />}></Route>    
                <Route path="/historias" element={<Histories />}></Route>
                <Route path="/psicofonias" element={<Psychophonie />}></Route>      
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
