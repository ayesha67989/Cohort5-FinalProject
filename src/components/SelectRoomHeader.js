import React from "react";
import Header from "./Header";
import Frame from "./Frame";
function SelectRoomHeader() {
  return (
    <div>
     <Header />

      <div
        style={{ zIndex: 1, position: "absolute", top: "-1px" }}
        id="carouselExampleInterval"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="10000">
            <img
              id="img"
              src="./images/classicRoom1.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item" data-bs-interval="10000">
            <img
              id="img"
              src="./images/classicRoom2.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item" data-bs-interval="10000">
            <img
              id="img"
              src="./images/classicRoom3.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
    
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
        <Frame />
      </div>
    </div>
  );
}

export default SelectRoomHeader;
