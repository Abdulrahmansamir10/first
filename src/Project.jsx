import React from 'react'
import { HashLink } from 'react-router-hash-link'
import 'react-bootstrap/esm/ThemeProvider'
import "./App.css"








const Project = () => {
  return (
    <>
        <section className='sec1p'>
        <div className='line'>
        <br /> <br />  
        <h3> Our Recent Project </h3>
        <p> Together female let signs for for fish fowl may first. </p>
        </div>
      
        <div className='lin'>
            <HashLink className="nav-link2 active" aria-current="page" to="#" > ALL </HashLink>
            <HashLink className="nav-link2" to="#"> BUILDINGS </HashLink>
            <HashLink className="nav-link2" to="#"> OFFICES </HashLink>
            <HashLink className="nav-link2" to="#"> REBUILD </HashLink>
            <HashLink className="nav-link2" to="#"> ARCHITECTURE </HashLink>
        </div>

        
        <div className='project'>
          <div className="col-lg-6 col-md-6 all following">
          <div className="single_portfolio">
          <img  className="img-fluid w-100" src="./images/1.jpg" alt=""/>
          <div className="short_info">
          <p>construction</p>
          <h4><HashLink href="portfolio-details.html">Desert Work, Dubai</HashLink></h4>
          </div>
          </div>
          </div>

          <div className="col-lg-6 col-md-6 all following">
          <div className="single_portfolio">
          <img  className="img-fluid w-100" src="./images/2.jpg" alt=""/>
          <div className="short_info">
          <p>construction</p>
          <h4><HashLink href="portfolio-details.html">Desert Work, Dubai</HashLink></h4>
          </div>
          </div>
          </div>

          <div className="col-lg-6 col-md-6 all following">
          <div className="single_portfolio">
          <img  className="img-fluid w-100" src="./images/3.jpg" alt=""/>
          <div className="short_info">
          <p>construction</p>
          <h4><HashLink href="portfolio-details.html">Desert Work, Dubai</HashLink></h4>
          </div>
          </div>
          </div>

          <div className="col-lg-6 col-md-6 all following">
          <div className="single_portfolio">
          <img  className="img-fluid w-100" src="./images/4.jpg" alt=""/>
          <div className="short_info">
          <p>construction</p>
          <h4><HashLink href="portfolio-details.html">Desert Work, Dubai</HashLink></h4>
          </div>
          </div>
          </div>
         </div>
      </section>

    </>
  )
}

export default Project