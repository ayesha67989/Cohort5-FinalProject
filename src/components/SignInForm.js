import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {useNavigate} from "react-router-dom"

function SignInForm() {
  const loginEmpty = {
    email: '',
    password: '',
  };

  const [handle, setHandle] = useState(loginEmpty);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFailed, setIsFailed] = useState(false);
  const [errors, setErrors] = useState(loginEmpty);



  const validateForm = () => {
    let formIsValid = true;
    const errorsCopy = { ...errors };
  
    if (!handle.email) {
      formIsValid = false;
      errorsCopy.email = "Please enter your email";
    } else if (!/\S+@\S+\.\S+/.test(handle.email)) {
      formIsValid = false;
      errorsCopy.email = "Please enter a valid email address";
    } else {
      errorsCopy.email = "";

    }
  
    if (!handle.password) {
      formIsValid = false;
      errorsCopy.password = "Please enter your password";
    } else if (handle.password.length < 8) {
      formIsValid = false;
      errorsCopy.password = "Password must be at least 8 characters";
    } else {
      errorsCopy.password = "";

    }
  
    setErrors(errorsCopy);
    return formIsValid;
  };
  
  






  const navigate = useNavigate();

  function Success() {
    console.log('in Success');
    return (
      <div id='success' className="alert alert-success" role="alert">
        Login Successful!
      </div>
    );
  }

  function Failed()
  {
    console.log('in Failed');
    return (
      <div id='failed' className="alert alert-danger" role="alert">
        Username or Password is Incorrect!
      </div>
    );

  }

  const loginApi = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      let record = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'content-Type': 'application/json',
        },
        body: JSON.stringify(handle),
      });
      record = await record.json();

      if (record.message === 'login successful') {
        // store id and email in session storage
        sessionStorage.setItem('user_id', record.userPrint._id);
        sessionStorage.setItem('user_email', record.userPrint.email);
        setIsSuccess(true);
        setTimeout(() => {
          setIsSuccess(false);
          setHandle(loginEmpty);
        }, 1000)
        setTimeout(() => {
          navigate("/book")
        }, 2000)
      } else {
        setIsFailed(true)
        setTimeout(() => {
          setIsFailed(false);
          setHandle(loginEmpty);
        }, 2000)
      }
    }
  };

  const LoginHandler = (e) => {
    const { name, value } = e.target;
    setHandle({ ...handle, [name]: value });
    console.log(handle);
  };

  return (
    <div>
      <form id="signInFormDiv">
      <div>
        <label id="signInFieldCredentials">Email:</label>
        <input
          name="email"
          type="email"
          value={handle.email}
          onChange={LoginHandler}
          className="form-control"
          id="signInFields"
        />
        {errors.email && <span id='span' className="text-danger">{errors.email}</span>}
        </div>
<div>
        <label id="signInFieldCredentials"> Password:</label>
        <input
          name="password"
          type="password"
          value={handle.password}
          onChange={LoginHandler}
          className="form-control"
          id="signInFields"
        />
        {errors.password && (
          <span  className="text-danger" id='span'>{errors.password}</span>
        )}
        </div>

        <button onClick={loginApi} className="btn " id="buttonSignup">
          Sign In
        </button>
      </form>

      {isSuccess && <Success />}
      {isFailed && <Failed />}

    </div>
  );
}

export default SignInForm;
