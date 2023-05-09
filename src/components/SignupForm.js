import React, { useState } from "react";
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom"

function SignupForm() {
  const empty = {
    name: "",
    email: "",
    contactNo: "",
    password: "",
    confirmPassword: "",
  };
  const [handle, setHandle] = useState(empty);
  const [errors, setErrors] = useState(empty);
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const accountHandler = (e) => {
    const { name, value } = e.target;
    setHandle({ ...handle, [name]: value });
    console.log(handle);
  };

  const validateForm = () => {
    
      let formIsValid = true;
      const errorsCopy = { ...errors };
    
      if (!handle.name) {
        formIsValid = false;
        errorsCopy.name = "Please enter your username";
      } else if (handle.name.length < 3) {
        formIsValid = false;
        errorsCopy.name = "Username must be at least 3 characters long";
      } else {
        errorsCopy.name = "";
      }
    
      if (!handle.email) {
        formIsValid = false;
        errorsCopy.email = "Please enter your email";
      } else if (!/\S+@\S+\.\S+/.test(handle.email)) {
        formIsValid = false;
        errorsCopy.email = "Please enter a valid email address";
      } else {
        errorsCopy.email = "";
      }
    
      if (!handle.contactNo) {
        formIsValid = false;
        errorsCopy.contactNo = "Please enter your contact number";
      } else if (handle.contactNo.toString().length < 10) {
        formIsValid = false;
        errorsCopy.contactNo = "Contact number must be at least 10 digits long";
      } else {
        errorsCopy.contactNo = "";
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
    
      if (!handle.confirmPassword) {
        formIsValid = false;
        errorsCopy.confirmPassword = "Please confirm your password";
      } else if (handle.confirmPassword !== handle.password) {
        formIsValid = false;
        errorsCopy.confirmPassword = "Passwords do not match";
      } else {
        errorsCopy.confirmPassword = "";
      }
    
      setErrors(errorsCopy);
      return formIsValid;
    };
    
    function Success() {
      console.log('in Success');
      return (
        <div id='success' className="alert alert-success" role="alert">
          Login Successful!
        </div>
      );
    }
  

  const userSignup = async (e) => {
    e.preventDefault();
    console.log("in user signup");
    if (validateForm()) {
    let record = await fetch("http://localhost:5000/signup", {
    method: "POST",
    headers: {
    "content-Type": "application/json",
    },
    body: JSON.stringify(handle),
    });
    record = await record.json();
    
    
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      setHandle(empty);
    }, 1000)
    setTimeout(() => {
      navigate("/home")
    }, 2000)
      setHandle(empty);
      setErrors(empty);
    }
    
    };


  return (
    <div>
    
      <form id="signupFormDiv">
      <div>
        <label id="signupFieldCredentials">Username:</label>
        <input
          name="name"
          type="text"
          value={handle.name}
          onChange={accountHandler}
          className="form-control"
          id="signupFields"
        />
        {errors.name && <span id="spanSignUp" className="text-danger">{errors.name}</span>}
        </div>
        <div>
        <label id="signupFieldCredentials"> Email:</label>
        <input
          name="email"
          type="email"
          value={handle.email}
          onChange={accountHandler}
          className="form-control"
          id="signupFields"
        />
        {errors.email && <span id="spanSignUp" className="text-danger">{errors.email}</span>}
</div>

<div>
        <label id="signupFieldCredentials">Contact Number:</label>
        <input
          name="contactNo"
          type="number"
          value={handle.contactNo}
          onChange={accountHandler}
          className="form-control"
          id="signupFields"
        />
        {errors.contactNo && (
          <span id="spanSignUp" className="text-danger">{errors.contactNo}</span>
        )}
        </div>
    
        <div>
        <label id="signupFieldCredentials"> Password:</label>
        <input
          name="password"
          type="password"
          value={handle.password}
          onChange={accountHandler}
          className="form-control"
          id="signupFields"
        />

        {errors.password && (
          <span id="spanSignUp" className="text-danger">{errors.password}</span>
        )}
        </div>
        <div>
        <label id="signupFieldCredentials">Confirm Password:</label>
        <input
          name="confirmPassword"
          type="password"
          value={handle.confirmPassword}
          onChange={accountHandler}
          className="form-control"
          id="signupFields"
        />
        {errors.confirmPassword && (
          <span id="spanSignUp" className="text-danger">{errors.confirmPassword}</span>
        )}
        </div>
        <Link id="buttonSignup" className="btn mt-3" onClick={userSignup}>
          Sign Up
        </Link>
      </form>
      
      {isSuccess && <Success />}
    </div>
  );
}

export default SignupForm;
