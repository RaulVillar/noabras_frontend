import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import HTTPService from "../../service/HTTPService";
import logo from "../../assets/logo.png";

function Navbar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const httpService = HTTPService();




  const handleSearchTermChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    if (term) {
      searchAPI(term);
    } else {
      resetResults();
    }
  };

  const searchAPI = async (term) => {
    const data = await httpService.getAllData();
    const filteredResults = data.filter((item) =>
      item.theme.toLowerCase().includes(term.toLowerCase())
    );
    setResults(filteredResults);
    setShowResults(true);
  };

  const resetResults = () => {
    setResults([]);
    setShowResults(false);
  };

  const handleSearchClick = () => {
    searchAPI(searchTerm);
  };

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
              value={searchTerm}
              onChange={handleSearchTermChange}
              aria-label="Search" />
            <button className="btn btn-outline-success"
              type="button"
              onClick={handleSearchClick}>Search</button>
          </form>
        </div>
      </div>
    </nav >
  );
}

export default Navbar;
