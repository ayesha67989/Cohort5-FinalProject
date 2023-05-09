import React, { useEffect } from 'react';
import Accomodate1 from './Accomodate1';
import AccomodateHeader from './AccomodateHeader';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

function Accomodate() {
  

  const navigate = useNavigate();

  return (
    <div>
      <AccomodateHeader />
      <Accomodate1 />
      <div  style={{position:"absolute", top: "1200px"}}>
      <Footer />
    </div>
    </div>
  );
}

export default Accomodate;
