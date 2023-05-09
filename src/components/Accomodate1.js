import React from "react";
import { useNavigate } from "react-router-dom";
function Accomodate1() {
  const navigate = useNavigate();
  function classicClick() {
    navigate("/classicRoom");
    console.log("classic")
  }

  function superiorClick()
  {
    navigate("/PremiumRoom");
  }

  function deluxeClick()
  {
    navigate("/DeluxeRoom");
  }
  function executiveClick()
  {
    navigate("/ExecutiveRoom");
  }
  return (
    <div>
      {" "}
      <div id="divone">
        <h2 id="headingAccomodate">Accomodation</h2>
        <p id="para">
          Reinvented and innovative spaces, which recreate a tropical palace and
          where the walls and ceilings retain the historical magic of this 17th
          Century Colombian building. A spellbinding experience that contrasts
          with the history our luxury rooms. We offer 125 guestrooms including
          25 suites with balconies or private terraces, finely decorated,
          overlooking the hotel's interior or walls along the Caribbean Sea,
          hence perfectly combining colonial and republican architecture with
          modern comfort. Paying attention to the smallest detail of luxury and
          comfort, with a modern sound system and TV, butler service and French
          products in order to make your stay an unforgettable experience and a
          restful night of sleep.
        </p>

        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#news">News</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
        </ul>

        <div id="divCard" class="card mb-3">
          <div class="row g-0">
            <div class="col-md-6 img-fluid img-thumbnail">
              <img
                src="./images/premium.jpg"
                class="img-fluid"
                id="divImg"
                alt="..."
              />
            </div>
            <div class="col-md-6">
              <div class="card-body">
                <h5 class="card-title" id="rightHead">
                  CLASSIC ROOM
                </h5>
                <p class="card-text" id="rightPara">
                  Located in the Republican Area, the Classic Rooms showcase a
                  contemporary décor bathed in light thanks to a large window
                  overlooking the hotel historic walls.
                </p>
                <p class="card-text">
                  <small class="text-muted" id="rightUpdated">
                    Last updated 3 mins ago
                  </small>
                </p>
              </div>
              <button id="cardButton" onClick={classicClick}>
                Book Now
              </button>
            </div>
          </div>
        </div>

        <div id="divCard" class="card mb-3">
          <div class="row g-0">
            <div class="col-md-6">
              <div class="card-body">
                <h5 class="card-title" id="leftHead">
                  Superior Room
                </h5>
                <p class="card-text" id="leftPara">
                  Our Superior rooms are the natural choice for couples or
                  business travelers. Delve into crisp luxurious bed linens to
                  experience the wonders of our exclusive Sofitel MyBed™ or take
                  a break on your terrace or balcony....
                </p>
                <p class="card-text">
                  <small class="text-muted" id="leftUpdated">
                    Last updated 12 mins ago
                  </small>
                </p>
              </div>
              <button onClick={superiorClick} id="cardButtonLeft">Book Now</button>
            </div>
            <div class="col-md-6 img-fluid img-thumbnail">
              <img
                src="./images/premium1.jpg"
                class="img-fluid"
                id="divImg"
                alt="..."
              />
            </div>
          </div>
        </div>

        <div id="divCard" class="card mb-3">
          <div class="row g-0">
            <div class="col-md-6 img-fluid img-thumbnail">
              <img
                src="./images/premium2.jpg"
                class="img-fluid"
                id="divImg"
                alt="..."
              />
            </div>
            <div class="col-md-6">
              <div class="card-body">
                <h5 class="card-title" id="rightHead">
                  DELUXE ROOM
                </h5>
                <p class="card-text" id="rightPara">
                Treat yourself to splendid views of pool and the Caribbean Sea from your luxurious balcony.High ceilings lend a touch of French sophistication to Luxury Room...
                </p>
                <p class="card-text">
                  <small class="text-muted" id="rightUpdated">
                    Last updated 3 mins ago
                  </small>
                </p>
              </div>
              <button id="cardButton" onClick={deluxeClick}>Book Now</button>
            </div>


          </div>
        </div>

        
        <div id="divCard" class="card mb-3">
          <div class="row g-0">
            <div class="col-md-6">
              <div class="card-body">
                <h5 class="card-title" id="leftHead">
                  Executive Room
                </h5>
                <p class="card-text" id="leftPara">
                  Our Executive rooms are the natural choice for couples or
                  business travelers. Delve into crisp luxurious bed linens to
                  experience the wonders of our exclusive Sofitel MyBed™ or take
                  a break on your terrace or balcony....
                </p>
                <p class="card-text">
                  <small class="text-muted" id="leftUpdated">
                    Last updated 12 mins ago
                  </small>
                </p>
              </div>
              <button id="cardButtonLeft" onClick={executiveClick}>Book Now</button>
            </div>
            <div class="col-md-6 img-fluid img-thumbnail">
              <img
                src="./images/premium3.jpg"
                class="img-fluid"
                id="divImg"
                alt="..."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accomodate1;
