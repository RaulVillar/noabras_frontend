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
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <Link to="/">
          <img className="navbar-brand logo" src={logo} style={{width:"50vw"}}alt="logo" />
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav " style={{marginleft:"0vw"}}>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-white"
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Menu
              </a>
              <ul className="dropdown-menu bg-dark">
                  <Link to="/leyendas" >
                <li className="dropdown-item text-white">
                    Experiencias paranormales
                </li>
                  </Link>
                  <Link to="/historias" >
                <li className="dropdown-item text-white">
                    Tus historias
                </li>
                  </Link>
                  <Link to="/psicofonias"  >
                <li className="dropdown-item text-white">
                    
                
                    Psicofonías
                </li>
                  </Link>
              </ul>
            </li>
          </ul>
          <div className="d-flex" role="search">
            <input
              className="form-control me-2"
              placeholder="Search"
              type="text"
              value={searchTerm}
              onChange={handleSearchTermChange}
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success"
              type="button"
              onClick={handleSearchClick}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
