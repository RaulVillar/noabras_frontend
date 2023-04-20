import React from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../views/home/Home";
import Histories from "../views/histories/Histories";
import MyLegends from "../views/legends/MyLegends";
import FormEdit from "../views/formEdit/FormEdit";
import Psychophonie from "../views/psychophonie/Psychophonie";
import Login from "../views/login/Login";
 import Register from "../views/register/Register";



const Router = () => {
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/leyendas" element={<MyLegends />}></Route>    
                <Route path="/historias" element={<Histories />}></Route>
                <Route path="/edit/:id" element={<FormEdit />}></Route> 
                <Route path="/psicofonias" element={<Psychophonie />}></Route>
                <Route path="/login" element={<Login />}></Route> 
                <Route path="/register" element={<Register />}></Route>     
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
