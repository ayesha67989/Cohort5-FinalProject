import{ React} from 'react'
import { useNavigate } from 'react-router-dom';
import PremiumHeader from './PremiumHeader'
import { useEffect } from 'react';
import Footer from './Footer';

function PremiumRoom() {
  const navigate = useNavigate();
  function classicClick()
  {
    navigate('/book')
  }
  
  return (
    <div>   <PremiumHeader/>
    <p id="paraRoom">Located in the Republican Area, the Classic Rooms showcase a contemporary décor bathed in light thanks to a large window overlooking the hotel historic walls.</p>
    <button id="buttonRoom" onClick={classicClick}>Book Now</button>
<div id='fieldsetRoom'>
<h3 id='rooomFeature'>Features</h3>

<ol  id='listRoom' class="list-group list-group-flush">
  <li class='pt-100'>26 to 30m2 / 280 to 323 Sq. Ft.</li>
  <br />
  <li class='p-100'>LCD TV</li>
  <br />
  <li className='pt-100'>Sofitel "MyBed®" with pillow menu</li>
  <br />
  <li className='pt-100'>Free Wi-Fi</li>
</ol>

<ol  id='listRoomTwo' class="list-group list-group-flush">
  <li class='pt-100'>Shower</li>
  <br />
  <li class='p-100'>Bose® SoundDock®</li>
  <br />
  <li className='pt-100'>Nespresso® machine</li>

</ol>



</div>
     
<div style={{position:"absolute", top:"-100px"}}>
<Footer/>
</div>
    
    
    </div>

    
  )
}

export default PremiumRoom