import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={props.mode}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link" href="/about">{props.aboutText}</a>
        </li> */}
        
      </ul>

      <div className="btn-group mx-2" role="group" aria-label="Basic mixed styles example">
          <button type="button" className="btn" style={{backgroundColor : 'black'}} onClick={props.toggleMode}> </button>
          <button type="button" className="btn" style={{backgroundColor : '#4b006e'}}> </button>
          <button type="button" className="btn btn-success"> </button>
        </div>


        <div className="form-check form-switch">
          <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          <label className={`"form-check-label mx-3 text-${props.altmode}`} htmlFor="flexSwitchCheckDefault">Dark mode</label>
        </div>

        


      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button type="button" className="btn btn-light">Search</button>
      </form>
    </div>
  </div>
</nav>
  )
}

//Proptypes for error Handalig.
Navbar.propTypes = {title: PropTypes.string.isRequired,
                    aboutText: PropTypes.string.isRequired }

Navbar.defaultProps = {
    title: "String",
    aboutText : "About"
}