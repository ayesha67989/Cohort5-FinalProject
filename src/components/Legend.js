import React from 'react'
import LegendHeader from './LegendHeader'
import Header from './Header'
import { useNavigate } from "react-router-dom";
import  { useEffect } from 'react';
import Footer from './Footer';



function Legend() {
 
  const navigate = useNavigate();
  return (
  
    <div>
    
    <LegendHeader/>
    
    <h1 id='legendHead'>The Legend</h1>
    <p id='legendPara'>In romantic and legendary Cartagena, Sofitel revived the Convent of the Poor Clares whose story dates back to 1621. Travel back in time in this imposing colonial building and discover the secrets of a hotel where every detail has its own story to tell.
    This historic landmark still maintains different historical elements such as crypts, wells, confessionals, paintings, doors, hidden windows and ceramic objects. Transformed into an upscale hotel in 1995, its path toward excellence has seen it considered one of the elite amongst the best hotels in the world.</p>

    <div id='legendCard' class="card bg-dark text-white">
  <img src="./images/legendswim.jpg" id='legendImg' class="card-img img-thumbnail img-fluid" alt="..."/>
  <div class="card-img">
    <h5 class="card-title" id='legendCardHead'>SWIMMING POOL</h5>
    <p class="card-text" id='legendCardPara'>Very close to the kitchen was the Convent’s orchard, a space where the nuns had to grow food for daily consumption. It is said that among their crops they maintained banana plantations, beach grapes and sea grapes. Today,..</p>
    <p class="card-text" id='legendCardBottom'>Last updated 3 mins ago</p>
  </div>
</div>


<div id='legendCard' class="card bg-dark text-white">
<img src="./images/legendGarden.jpg" id='legendImg' class="card-img img-thumbnail img-fluid" alt="..."/>
<div class="card-img">
  <h5 class="card-title" id='legendCardHead'>COLONIAL GARDEN</h5>
  <p class="card-text" id='legendCardPara'>Very close to the kitchen was the Convent’s orchard, a space where the nuns had to grow food for daily consumption. It is said that among their crops they maintained banana plantations, beach grapes and sea grapes. Today,..</p>
  <p class="card-text" id='legendCardBottom'>Last updated 3 mins ago</p>
</div>
</div>

<div style={{position:"absolute", top:"300px"}}>
<Footer/>
</div>

    </div>
  )
}

export default Legend