import { useState} from "react";
import { Link } from "react-router-dom";

import React from "react";


import "./Navbar.css";
import HTTPService from "../../service/HTTPService";
import logo from "../../assets/logo.png";

function Navbar() {
  const [text, setText] = useState("")
  const httpService = HTTPService();


  function handleInputChange() {
    document.dispatchEvent(new CustomEvent('textChanged', { detail: text }));
  }
  function handleSearch(event) {
  setText(event.target.value)
  }


  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
      <div class="container-fluid">
        <Link to="/">
          <img class="navbar-brand" src={logo} alt="logo" style={{ width: "55vw" }}></img>
        </Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto me-5 mb-2 mb-lg-0">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle text-white" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Menu
              </a>
              <ul class="dropdown-menu bg-dark">
                <Link to="/leyendas">
                  <li><a class="dropdown-item text-white">Experiencias paranormales</a></li>
                </Link>
                <Link to="/historias">
                  <li><a class="dropdown-item text-white" >Tus historias</a></li>
                </Link>
                <Link to="/psicofonias">
                  <li><a class="dropdown-item text-white" >Psicofonías</a></li>
                </Link>
              </ul>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input class="form-control me-2" className="form-control me-2"
              placeholder="Search"
              type="text"             
              onChange={handleSearch}
              aria-label="Search" />
            <button className="btn btn-outline-success"
              type="button"
              onClick={handleInputChange}
              >Search</button>
          </form>
        </div>
      </div>
    </nav >
  );
}

export default Navbar;
