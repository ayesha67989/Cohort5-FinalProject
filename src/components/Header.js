import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function Header() {
  const navigate = useNavigate();

  function bookNow()
  {
    navigate("/book")
    console.log("in book")
  }
  return (
    <div>
      <nav
        class="navbar navbar-expand-lg"
        style={{ zIndex: 2, position: "absolute", left: "120px" }}
      >
        <div class="container-fluid">
          <Link
            class=" navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ zIndex: 7 }}
          >
            <span class="navbar-toggler-icon"></span>
            <p style={{ position: "absolute", top: "16px", left: "16px" }}>
              More
            </p>
          </Link>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <Link
                class="  nav-link active"
                aria-current="page"
                to="/"
                id="font"
              >
                Home
              </Link>
              <Link class="nav-link" to="/rooms" id="font">
                Rooms
              </Link>
            
              <img
                className="bg-dark"
                style={{
                  height: "140px",
                  width: "180px",
                  backgroundColor: "black",
                  position: "relative",
                  top: "-10px",
                  left: "0px",
                }}
                src="./images/mainLogo2.jpg"
                class="rounded mx-auto d-block"
                alt="hotel logo"
              ></img>

              <Link class="nav-link " to="/legend" id="font">
                Legend
              </Link>

            
                <button type="button" onClick={bookNow} id="button">
                  Book Now
                </button>
              
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
