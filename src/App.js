import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Accomodate from "./components/Accomodate";
import Accomodate1 from "./components/Accomodate1";
import SelectRoom from "./components/SelectRoom";
import Legend from "./components/Legend";
import Signup from "./components/Signup";
import SignIn from "./components/SignIn";
import BookingForm from "./components/BookingForm";
import Booking from "./components/Booking";
import PremiumRoom from "./components/PremiumRoom";
import DeluxeRoom from "./components/DeluxeRoom";
import ExcutiveRoom from "./components/ExcutiveRoom";
import React, { useState } from "react";
import Final from "./components/Final";
import Update from "./components/Update";
function App() {
  const bookingForm = {
    username: "",
    email: "",
    telephone: "",
    roomName:"",
    roomQty: "",
    checkIn: "",
    checkOut: "",
  };
  const [handle, setHandle] = useState(bookingForm);
  const bookingHandler = (e) => {
    const { name, value } = e.target;
    setHandle({ ...handle, [name]: value });
    console.log(handle);
  };

  return <div className="App">

   <Router>
   <Routes>
   <Route path="/signup" element={<Signup />} />
   <Route path="/signin" element={<SignIn />} />


     <Route path="/" element={<Homepage />} />
   
    <Route path="/rooms" element={<Accomodate />} />

   <Route path="/classicRoom" element={<SelectRoom />} />
   <Route path="/PremiumRoom" element={<PremiumRoom />} />
   <Route path="/DeluxeRoom" element={<DeluxeRoom />} />
   <Route path="/ExecutiveRoom" element={<ExcutiveRoom />} />

    <Route path="/legend" element={<Legend />} />
    <Route path="/book" element={<Booking handle={handle} bookingHandler={bookingHandler} />} />
    <Route path="/final" element={<Final handle={handle} bookingHandler={bookingHandler} setHandle={setHandle}/>} />
    <Route path="/update" element={<Update handle={handle} bookingHandler={bookingHandler} />} />



  </Routes>
 </Router>
  </div>;
}

export default App;
