 import React from 'react'
import Header from './Header'
import Frame from './Frame'
function LegendHeader() {
  return (
    <div> 
    <div style={{position:"absolute", top:"0px"}}>
    <Header/>
    </div>
    <div style={{zIndex:1, position:"absolute", top:"-1px"}} id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active" data-bs-interval="10000">
        <img src="./images/legend.jpg" class="d-block w-100" alt="..."/>
      </div>
    </div>
  <Frame />
  
  </div></div>
  )
}

export default LegendHeader