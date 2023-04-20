import { useState } from "react";
import { Link } from "react-router-dom";
import React from "react";
import "./Navbar.css";
import HTTPService from "../../service/HTTPService";
import logo from "../../assets/logo.png";



function Navbar() {
  const [text, setText] = useState("")
  const httpService = HTTPService();


  function handleClickButton() {
    document.dispatchEvent(new CustomEvent('textChanged', { detail: text }));
  }
  function handleInputEvent(event) {
    setText(event.target.value)
  }


  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
      <div className="container-fluid">
        <Link to="/">
          <img className="navbar-brand" src={logo} alt="logo" style={{ width: "55vw" }}></img>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto me-5 mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a className="btn btn-dark" data-bs-toggle="dropdown" aria-expanded="false">Menu</a>
              <ul className="dropdown-menu bg-dark">
                <Link to="/leyendas">
                  <li><a className="dropdown-item text-white">Experiencias paranormales</a></li>
                </Link>
                <Link to="/historias">
                  <li><a className="dropdown-item text-white" >Tus historias</a></li>
                </Link>
                <Link to="/psicofonias">
                  <li><a className="dropdown-item text-white" >Psicofonías</a></li>
                </Link>
              </ul>
            </li>
          </ul>
          <a className="nav-item">
            <Link to="/login" className="btn btn-dark">Login</Link>
          </a>
          <a className="nav-item">
            <Link to="/register" className="btn btn-dark">Registro</Link>
          </a>
          <form className="d-flex ms-auto" role="search">
            <input className="form-control me-2" placeholder="Search" type="text" onChange={handleInputEvent} aria-label="Search" />
            <button className="btn btn-outline-success" type="button" onClick={handleClickButton}>Search</button>
          </form>
        </div>
      </div>
    </nav >
  );
}

export default Navbar;
