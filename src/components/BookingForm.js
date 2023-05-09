import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Update from "./Update";


function BookingForm(props) {
  // const bookingForm = {
  //   username: "",
  //   email: "",
  //   telephone: "",
  //   roomName:"",
  //   roomQty: "",
  //   checkIn: "",
  //   checkOut: "",
  // };
  // const [handle, setHandle] = useState(bookingForm);
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();
const {handle,bookingHandler}=props

  const bookingApi = async (e) => {
    e.preventDefault();
  
    try {
      let record = await fetch("http://localhost:5000/createUser", {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify(handle),
      });
      record = await record.json();
      
      // sessionStorage.clear();
      sessionStorage.setItem("user_id", record.roomPrint._id);
    
      navigate("/final")
    } catch (error) {
      console.error(error);
    }
    

  };
  

  // const bookingHandler = (e) => {
  //   const { name, value } = e.target;
  //   setHandle({ ...handle, [name]: value });
  //   console.log(handle);
  // };

  return (
    <div id="BookDiv">
      <form class="row g-3" id="formArea">
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
          <button id="bookButton" type="submit" onClick={bookingApi} class="btn btn-primary">
           Book Now
          </button>
          <a style={{color:"#796329", position:"absolute", bottom:"0px", left:"20px", fontFamily:"serif", fontStyle:"italic"}} href="/">Back to Homepage</a>
        </div>
      </form>
    </div>
    
  );
}

export default BookingForm;
