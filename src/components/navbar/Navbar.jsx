import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import React, { useState } from 'react';
import "./Navbar.css"
import HTTPService from '../../service/HTTPService'

function Navbar() {
  const [value, setValue] = useState("");
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const httpService = HTTPService();

  const onChange = (event) => {
    const searchTerm = event.target.value;
    setValue(searchTerm);
    if (searchTerm.length > 0) {
      searchAPI(searchTerm);
    } else {
      setResults([]);
      setShowResults(false);
    }
  };

  const searchAPI = async (searchTerm) => {
    const data = await httpService.getAllData();
    const results = data.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setResults(results);
    setShowResults(true);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <Link to="/">
            <img className="logo" src={logo} alt="logo" />
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
                  <Link to="/leyendas">
                    <li>
                      <p className="dropdown-item text-white">
                        Experiencias paranormales
                      </p>
                    </li>
                  </Link>
                  <Link to="/historias">
                    <li>
                      <p className="dropdown-item text-white"> Tus historias</p>
                    </li>
                  </Link>
                  <Link to="/psicofonias">
                    <li>
                      <p className="dropdown-item text-white">Psicofonías</p>
                    </li>
                  </Link>
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                placeholder="Search"
                type="text"
                value={value}
                onChange={onChange}
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success"
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  searchAPI(value);
                }}
              >
                Search
              </button>
              {showResults && (
                <div className="dropdown">
                  {results.map((item) => (
                    <div className="dropdown-row" key={item.id}>
                      {item.title}
                    </div>
                  ))}
                </div>
              )}
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar
