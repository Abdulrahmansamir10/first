import React, { useState , useEffect} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScaleLoader from "react-spinners/ScaleLoader"
import Home from './Home'
import Navbbar from './Navbbar'

import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css"



const App = () => {


const [Loading , setLoading ] = useState(false);

useEffect(() => {

  setLoading(true);

  setTimeout(() => {
    setLoading(false)
  },3000);

},[]);

  return (
    <BrowserRouter className='load'>

    {
      Loading?
      <div className='load'>
      <ScaleLoader  color={"#36d7b7"}  loading={true} size={550} height={200} margin={20}/>
       </div>
       :
   <>
    <Navbbar/>
    
    <Routes>
      <Route path="/" element= {<Home />} />
    </Routes>
   </>
   
     }
     
    </BrowserRouter>
   
    
  )
}
export default App