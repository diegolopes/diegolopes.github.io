import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = () => (
  <>
  <header>
        <div className="container mt-3">
        <div className="row mb-5">
            <div className="col-md-6">
                <h1>Olá :) </h1>
                <p className="lead">
                    Sou um desenvolvedor, apaixonado por tecnologia e programação.
                    Sou Formado em Desenvolvimento Web pelo Instituto Federal de São Paulo,
                    atualmente cursando Análise e Desenvolvimento 
                    de Sistemas. 

                    <div className="techs mt-3">
                        <h4 >Minhas tecnologias e linguagens favoritas:</h4>
                        <i className="fab fa-2x fa-js"></i>
                        <i className="fab fa-2x fa-node-js"></i>
                        <i className="fab fa-2x fa-vuejs"></i>
                        <i className="fab fa-2x fa-laravel"></i>
                        <i className="fab fa-2x fa-react"></i>
                        <i className="fab fa-2x fa-php"></i>
                    </div>
                </p>
            </div>
            <div className="col-md-6 align-content-center d-flex justify-content-center">
                <div className="card profile-card pt-4">
                    <img src="https://avatars3.githubusercontent.com/u/27782408?s=460&v=4" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">Diego Lopes</h5>
                      <p className="card-text">
                          Entre em contato: <br />
                          <small className="card-text">d.lopes.caragua@gmail.com</small><br />
                      </p>
                      
                      <a href="https://github.com/diegolopes" className="profile-link fab fa-2x fa-github"></a>
                      <a href="https://www.linkedin.com/in/diegolps" className="profile-link fab fa-2x fa-linkedin"></a>
                    </div>
                  </div>
            </div>
          </div>

    </div>
  </header>
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
