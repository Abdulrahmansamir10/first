import React from 'react'
 import {Nav,} from 'react-bootstrap'
import { HashLink } from 'react-router-hash-link'
import 'react-bootstrap/esm/ThemeProvider'
 import "bootstrap"
import "./App.css"


const Navbbar = () => {
  return (
      <section>

    <Nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <div className='container'>
     <div className='log'>
      <HashLink  to="#">  <img src="./images/logo.png" alt=''/> </HashLink>
      </div>
      <button
            class="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarRightAlignExample"
            aria-controls="navbarRightAlignExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars"></i>
          </button>
      <div class="collapse navbar-collapse" id="navbarRightAlignExample">
       
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <HashLink className="nav-link active" aria-current="page" to="#" > HOME </HashLink>
          </li>
          <li class="nav-item">
            <HashLink className="nav-link" to="#"> ABOUT </HashLink>
          </li>
          <li class="nav-item">
            <HashLink className="nav-link" to="#"> SERVICES </HashLink>
          </li>
          <li class="nav-item">
            <HashLink className="nav-link" to="#"> PROJECT </HashLink>
          </li>

          <li class="nav-item dropdown">
            <HashLink class="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-mdb-toggle="dropdown" aria-expanded="false"> 
            BLOG </HashLink >
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <HashLink  class="dropdown-item" to ="#"> Action </HashLink>
              </li>
              <li>
                <HashLink class="dropdown-item" to ="#"> Another action </HashLink>
              </li>
              <li>
                <HashLink  class="dropdown-item" to ="#"> Something else here </HashLink>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <HashLink  className="nav-link" to="#"> ContactUs </HashLink>
          </li>
        <li class="nav-item">
        <HashLink  to="#">  <img src="./images/icons8-buy-24.png" alt=''/> </HashLink>
          </li>
          <li class="nav-item">
          <HashLink  to="#">  <img src="./images/icons8-search-24.png" alt=''/> </HashLink>
          </li>
        </ul>
        </div>
      </div>
     
  </Nav>
      </section>
  )
}

export default Navbbar