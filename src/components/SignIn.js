import React from 'react'
import SignInForm from './SignInForm'
import { Link } from 'react-router-dom';

function SignIn() {
  return (
    <div id='signupBackground'>
    <Link className="btn" id="buttonSignInLogin" to="/signup">Sign Up</Link>

    <img  id='signInBackgroundImage' src="./images/image11.jpg" class=" mx-auto d-block"></img>
    <SignInForm/>
    <div class="d-flex">
    <div class="vr" id='hr'></div>
    <img  id='signInLogo' src="./images/signupLogo.png" class=" mx-auto d-block"></img>

  </div>
    

    
    </div>
  )
}

export default SignIn