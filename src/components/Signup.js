import React from 'react'
import SignupForm from './SignupForm'
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <div id='signupBackground'>
     <Link className="btn mt-3" id="buttonSignupLogin" to="/signin">Sign In</Link>

  <img  id='signupBackgroundImage' src="./images/image1.jpg" class=" mx-auto d-block"></img>
    <SignupForm/>
    <div class="d-flex">
    <div class="vr" id='hr'></div>
  </div>
    <img  id='signupLogo' src="./images/signupLogo.png" class=" mx-auto d-block"></img>

    
    </div>
  )
}

export default Signup