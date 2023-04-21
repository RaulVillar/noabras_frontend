import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Footer.css"


function Footer() {

  return (
    <div className="main-footer fixed-bottom" >
      <footer className="bg-dark text-center text-white ">
        <div className="container p-4 pb-0">
          <section className="mb-4">

            <a className="btn btn-outline-light btn-floating m-1" href="http://www.twitter.com" role="button">
              <i className="fab fa-twitter"></i>
            </a>

            <a className="btn btn-outline-light btn-floating m-1" href="http://www.google.com" role="button">
              <i className="fab fa-google"></i>
            </a>

            <a className="btn btn-outline-light btn-floating m-1" href="http://www.instagram.com" role="button">
              <i className="fab fa-instagram"></i>
            </a>

            <a className="btn btn-outline-light btn-floating m-1" href="http://www.linkedin.com" role="button">
              <i className="fab fa-linkedin-in"></i>
            </a>

            <a className="btn btn-outline-light btn-floating m-1" href="http://www.github.com" role="button">
              <i className="fab fa-github"></i>
            </a>

          </section>
        </div>

        <div className="text-center p-3">
          © 2023 Copyright
        </div>

      </footer>
    </div>
  )
}

export default Footer