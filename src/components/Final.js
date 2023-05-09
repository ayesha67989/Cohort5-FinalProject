import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Update from './Update';

function Final(props) {
  const {handle, bookingHandler,setHandle}=props
  const [data, setData] = useState(null);
  const id = sessionStorage.getItem("user_id");
  const navigate = useNavigate();
  useEffect(() => {
    if (sessionStorage.getItem('user_id') === null) {
      navigate('/signin');
    }
  }, []);

  

  useEffect(() => {
    const getApi = async () => {
      try {
        const response = await fetch(`http://localhost:5000/get/${id}`, {
          method: "GET",
          headers: {
            "content-Type": "application/json",
          },
        });

        const jsonData = await response.json();
        setData(jsonData);
        
      } catch (error) {
        console.log(error);
      }
    };

    getApi();
  }, [id]);
  const editApi = async () => {
    var data = await fetch(`http://localhost:5000/get/${id}`);
    data = await data.json();
    setHandle(data);
    console.log("in editapi" + id);
  }


  const deleteApi = async () => {
    const shouldDelete = window.confirm("Are you sure you want to delete?");
  
    if (shouldDelete) {
      console.log(id + " : in delete");
      try {
        const response = await fetch(`http://localhost:5000/delete/${id}`, {
          method: "DELETE",
        });
        if (response.ok) {
          console.log("Delete successful");
          navigate("/book")
        } else {
          throw new Error("Delete failed");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  
  return (
    <div>
    <img  id='finallogo' src="./images/signupLogo.png" class=" mx-auto d-block"></img>
    
      {data ? (
    
        <div id='fieldsetFinal'>
          <p id='finalPara'>Name : {data.username}</p>
          <p id='finalPara'>Email :  {data.email}</p>
          <p id='finalPara'>Telephone : {data.telephone}</p>
          <p id='finalPara'>Room Qty :  {data.roomQty}</p>
          <p id='finalPara'>Check-In : {data.checkIn}</p>
          <p id='finalPara'>Check-Out :  {data.checkOut}</p>

          <a style={{color:"#796329", position:"absolute", bottom:"30px", left:"20px", fontFamily:"serif", fontStyle:"italic"}} href="/">Back to Homepage</a>
          
         <Link  to={"/update"}>
          <button id='finalEdit' onClick={() => editApi()}>Update</button>
          </Link>
       
       
          <button id='finalEdit' onClick={() => deleteApi()}>Cancel</button>
        
         
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default Final;
