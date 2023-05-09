import React from 'react'
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';

function Update(props) {
  
  const {handle, bookingHandler}=props
  console.log("handle is:"+handle)
  const id = sessionStorage.getItem("user_id");
 

  const navigate = useNavigate();
  useEffect(() => {
    if (sessionStorage.getItem('user_id') === null) {
      navigate('/signin');
    }
  }, []);


  const updateApi = () => {
    let item={handle};
    console.log(item+"in update")
    fetch(`http://localhost:5000/get/${id}`, {
      method: "PUT",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(handle),
   });
   navigate("/final");     

  }
  return (
    <div>
    
    <div id="BookDiv">
    <img  id='booklogoUpdate' src="./images/signupLogo.png" class=" mx-auto d-block"></img>

    <form class="row g-3" id="formArea" 
    onSubmit={(e)=>{
      e.preventDefault()
      updateApi();
          }}>
      <div class="col-md-6">
        <label class="form-label">
          Username
        </label>
        <input
          type="text"
          name="username"
          value={handle.username}
          onChange={bookingHandler}
          class="form-control"
          
        />
      </div>
      <div class="col-md-6">
        <label class="form-label">
          Email
        </label>
        <input
          type="email"
          name="email"
          onChange={bookingHandler}
          value={handle.email}
          class="form-control"
          
        />
      </div>
      <div class="col-md-6">
        <label  class="form-label">
          Telephone:
        </label>
        <input
          type="number"
          name="telephone"
          class="form-control"
          onChange={bookingHandler}
          value={handle.telephone}
        />
      </div>
      <div class="col-md-6">
      <label  class="form-label">
        Select Room Type
      </label>
      <select
        name="roomName"
        type="text"
        value={handle.roomName}
        onChange={bookingHandler}
        class="form-select"
      >
        <option selected>Classic Room</option>
        <option>Superior Room</option>
        <option>Deluxe Room</option>
        <option>Executive Rom</option>
      </select>
    </div>

      <div class="col-md-4">
        <label  class="form-label">
          Select Qty
        </label>
        <select
          name="roomQty"
          type="number"
          value={handle.roomQty}
          onChange={bookingHandler}
          class="form-select"
        >
          <option selected>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </select>
      </div>

      

      <div class="col-md-4">
        <label  class="col-3 col-form-label ">
          Check In
        </label>

        <input
          type="date"
          name="checkIn"
          value={handle.checkIn}
          onChange={bookingHandler}
          class="form-control"
        
        />
      </div>

      <div class="col-md-4">
        <label class="col-4 col-form-label ">
          Check Out
        </label>

        <input
          type="date"
          name="checkOut"
          value={handle.checkOut}
          onChange={bookingHandler}
          class="form-control"
        />
      </div>
      
      <div class="col-12">
        <button id="bookButton" type="submit" onClick={updateApi} class="btn btn-primary">
         Book Now
        </button>

        <a style={{color:"#796329", position:"absolute", bottom:"0px", left:"20px", fontFamily:"serif", fontStyle:"italic"}} href="/">Back to Homepage</a>
      </div>
    </form>
  </div>
    </div>
  )
}

export default Update