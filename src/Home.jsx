import React from 'react';
import { HashLink } from 'react-router-hash-link'
import ContactUs from './ContactUs'
import 'react-bootstrap/esm/ThemeProvider'
import Project from './Project';
import Chat from './Chat';
import "./App.css"




const Home = () => {


  return (
    <>

    <section className='sec1'>
    <div className='text'>
      <h3> FUTURE CONSTRUCTION </h3>
              <hr />
      <h1> Make your dream home <br /> with sintac </h1>
      <br /> <br /> 
      <button> GET A QUOTE </button>
    </div>
    </section>

    <section className='sec2'>
    
    <div>
      <img src=" ./images/about1.png" alt="" />
    </div>
   
    <div className='sect2'>
      <h1>  WE ARE ON EXPERT <br /> THIS FIELD BUILDINGS <br /> SOLUTIONS SINCE 1974. </h1>
      
      <p> Void gathering midst together you're shall. Beast set he <br />
        likeness spirit winged two all fourth they're gathered <br />
        seasons very may heaven saying. Fly image th </p>
        <button> LEARN MORE </button>
    </div>
      
    </section>

    <section className='sec3'>
      <div className='line'>
        <br /> <br />  <br />
        <h3> What We Provide </h3>
        <p> Together female let signs for for fish fowl may first. </p>
      </div>

    <div className='carde'>

        <div className="card">
          <img src="./images/i1.png" className='imo' alt=""/>

          <div class="card-body">
            <h5 className="card-title"> Architecture Design </h5>
            <p className="card-text">
            You're which creepeth were <br /> yielding kind, divide sixten po <br />
            gatherin all first fill Seed <br /> wherein life. Years one fifth
            </p>
          </div>
        </div>

        <div className="card">
          <img src="./images/i2.png" className='imo' alt=""/>

          <div class="card-body">
            <h5 className="card-title"> Building Construction </h5>
            <p className="card-text">
            You're which creepeth were <br /> yielding kind, divide sixten po <br />
            gatherin all first fill Seed <br /> wherein life. Years one fifth
            </p>
          </div>
        </div>

        <div className="card">
          <img src="./images/i3.png" className='imo3' alt=""/>

          <div class="card-body">
            <h5 className="card-title"> Building Renovation </h5>
            <p className="card-text">
            You're which creepeth were <br /> yielding kind, divide sixten po <br />
            gatherin all first fill Seed <br /> wherein life. Years one fifth
            </p>
          </div>
        </div>

        <div className="card">
          <img src="./images/i4.png" className='imo' alt=""/>

          <div class="card-body">
            <h5 className="card-title"> Building Maintenance </h5>
            <p className="card-text">
            You're which creepeth were <br /> yielding kind, divide sixten po <br />
            gatherin all first fill Seed <br /> wherein life. Years one fifth
            </p>
          </div>
        </div>
    </div>
    </section>

    <section className='sec4'>
    <img src="./images\about2.png" alt="" />
    <div>
      <h3> PROVIDING PERSONALIZED AND <br /> HIGH QUALITY SERVICE .</h3>
      <p> 
        Grass bearing make open multiply that may fly cattle gathering be unto <br />
      void moving. Blessed one evening had them heaven <br />
      divide said heaven whose brought he. Give It fowl green.
      </p>
      <div className='mas'>
        <div>
          <h4> 15K+ </h4>
          <h6> Happy Customer </h6>
        </div>
        <div>
        <h4> 10K+ </h4>
          <h6> Project Done </h6>
        </div>
        <div>
        <h4> 9/10 </h4>
          <h6> Average Ratingr </h6>
        </div>
      </div>
    </div>
    </section>

    <Project />

    <section className='sec5'>
      <div className='line'>
      <br /> <br />  <br />
        <h3> Customer reviews </h3>
        <p> Together female let signs for for fish fowl may first. </p>
        </div>

        <div className='div5'>

        <div className='rev'>
        <div class="box-1"></div>
       <div className='tt'>
           <img src="./images/tes1.jpg" alt=''/>
       </div>
          <div className='textt'>
            <h4> Adame Nesane </h4> 
            <p> Chife Customer </p>
            <p> you`r had.Subdue grass Meat us winged years you`ll <br />  dosen`t.fruit two also won
              one yielding creepeth third <br /> give may never lie alternet food </p> 
          </div>
          </div>
          <div className='rev'>
        <div class="box-1"></div>
       <div className='tt'>
           <img src="./images/tes2.jpg" alt=''/>
       </div>
          <div className='textt'>
            <h4> Adame Nahan </h4> 
            <p> Chife Customer </p>
            <p> you`r had.Subdue grass Meat us winged years you`ll <br />  dosen`t.fruit two also won
              one yielding creepeth third <br /> give may never lie alternet food </p> 
          </div>
          </div>
        </div>
    </section>

    <section className='sec6'>
      <div className='line'>
        <br /> <br />  <br />
        <h3> Our Recent News </h3>
        <p> Together female let signs for for fish fowl may first. </p>
        </div>
        <br /> <br /> <br /> <br />
        <div className='pos'>
        <div>
        <div className='images'>
          <img src="./images/1 (1).jpg" alt="" />
        </div>
        <div className='work'>
          <HashLink className='hash'>
          <i class="fa-regular fa-calendar"></i>
          <p> Feb 14, 2019 </p>
          </HashLink>
            <span className='spn'> | </span>
          <HashLink className='hash1'>
        <i class="fa-sharp fa-regular fa-folder-closed"></i>
        <p>  company </p>
          </HashLink>
          </div>
          <HashLink className='texth4'>
          <h4>
          Yielding called winged years they are <br /> likeness hath morning
          </h4>
          </HashLink>
          </div>
          <div>
        <div  className='images'>
          <img src="./images/2 (1).jpg" alt="" />
        </div>
        <div className='work'>
          <HashLink className='hash'>
          <i class="fa-regular fa-calendar"></i>
          <p> Feb 14, 2019 </p>
          </HashLink>
            <span  className='spn'> | </span>
          <HashLink className='hash1'>
        <i class="fa-sharp fa-regular fa-folder-closed"></i>
        <p>  company </p>
          </HashLink>
          </div>
          <HashLink className='texth4'>
          <h4>
          Yielding called winged years they are <br /> likeness hath morning
          </h4>
          </HashLink>
          </div>
          <div>
        <div  className='images'>
          <img src="./images/3 (1).jpg" alt="" />
        </div>
        <div className='work'>
          <HashLink className='hash'>
          <i class="fa-regular fa-calendar"></i>
          <p> Feb 14, 2019 </p>
          </HashLink>
            <span className='spn'> | </span>
          <HashLink className='hash1'>
        <i class="fa-sharp fa-regular fa-folder-closed"></i>
        <p>  company </p>
          </HashLink>
          </div>
          <HashLink className='texth4'>
          <h4>
          Yielding called winged years they are <br /> likeness hath morning
          </h4>
          </HashLink>
          </div>
          </div>
    </section>

    <ContactUs />

    <Chat /> 

    <section className='sec7'>
        <div>
          <h5> Userful Links </h5>
          <hr /> 
          <div  className='link'>

          <div>
            <ul>
              <li> > home </li>
              <li> > About </li>
              <li> > Company News </li>
              <li> > Projects </li>
              <li> > Careers </li>
            </ul>
          </div>
          <div>
          <ul>
              <li> > Our Services </li>
              <li> >  Terms And Condition </li>
              <li> > Shop </li>
              <li> >  Contuct Us </li>
            </ul>
          </div>
        </div>
          </div>


          <div>
          <h5> Business Hours </h5>
           <hr /> 
          <div  className='link'>

          <div>
            <ul>
              <li> Monday - Friday : </li>
              <li> Saturday : </li>
              <li> Sunday : </li>
              <li> We work all the holidays! </li>
            </ul>
          </div>
          <div>
          <ul>
              <li> 9:00 am - 18:00 pm </li>
              <li> 9:00 am - 16:00 pm </li>
              <li> Closed </li>
            </ul>
          </div>
        </div>
          </div>

          <div>
            
          <div>
          <h5> Email Newsletter </h5>
           <hr /> 
          </div>

          <div className='sub'>
            <input type="text" placeholder='Your Email Address' />
            <button> SUBSCRIBE </button>
          </div>
          <div>
            <p>
            Sign up for new Recover Construction Company content, <br /> updates, surveys & offers.
            </p>
            <HashLink className='pri'> Privacy Policy </HashLink>
          </div>
          </div>
    </section>

    <section className='footer'>
      <p> Copyright ©2024 All rights reserved | This template is made with
      <i class="fa fa-heart" aria-hidden="true"></i> by <span> Abdelrahman Samir </span> </p>
    </section>
    
    </>
    
  );
};

export default Home;