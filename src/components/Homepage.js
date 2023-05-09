import React from 'react'
import Header from './Header'
import Page1 from './Page1'
import Page2 from './Page2'
import Carousel from './Carousel'
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react'
import Footer from './Footer'


function Homepage() {
  const navigate = useNavigate();

  return (
   
    <div>
    <Header/>
    <Carousel/>
    <Page1/>
    <Page2/>
    <Footer/>
    </div>
  )
  
}

export default Homepage