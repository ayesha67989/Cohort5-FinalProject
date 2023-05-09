import React from 'react'
import Header from './Header'
import BookingForm from './BookingForm'
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


function Booking(props) {
  const{handle, bookingHandler}=props
  const navigate = useNavigate();
  useEffect(() => {
    if (sessionStorage.getItem('user_id') === null) {
      navigate('/signin');
    }
  }, []);

  return (
    <div>
    <img  id='booklogo' src="./images/signupLogo.png" class=" mx-auto d-block"></img>
    <BookingForm handle={handle} bookingHandler={bookingHandler}/>
    </div>
  )
}

export default Booking