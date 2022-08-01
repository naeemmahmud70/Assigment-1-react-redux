import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import facebookIcon from "../../../images/facebook.png";
import defaultProfilePhoto from "../../../images/defaultProfilePhoto.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faHomeAlt,
  faTvAlt,
  faHouseFloodWater,
  faUsersRectangle,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav class="row navbar navbar-expand-lg navbar-light navbar-bg sticky-top t-0 bg-color px-2">
      <div class="container-fluid">
        <div className="d-flex align-itms-center px-3">
          <div>
            <img className="icon-image-size" src={facebookIcon} alt="" />
          </div>
          <div>
            <form className="navbar-input d-flex mx-2 mt-1">
              <span>
                <FontAwesomeIcon className="search-icon px-3" icon={faSearch} />
              </span>
              <input
                class="form-control me-2 border-0 search-input"
                type="search"
                placeholder="Search facebook"
                aria-label="Search"
              ></input>
            </form>
          </div>
        </div>
        <button
          class="navbar-toggler toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse " id="navbarNav">
          <ul class="navbar-nav mx-auto w-50 d-flex justify-content-between">
            <li className="nav-item">
              <Link to="/home">
                <FontAwesomeIcon className="nav-icon" icon={faHomeAlt} />
              </Link>
            </li>
            <li className="nav-item">
              {" "}
              <Link to="/home">
                <FontAwesomeIcon className="nav-icon" icon={faTvAlt} />
              </Link>
            </li>
            <li className="nav-item">
              {" "}
              <Link to="/home">
                <FontAwesomeIcon
                  className="nav-icon"
                  icon={faHouseFloodWater}
                />
              </Link>
            </li>
            <li className="nav-item">
              {" "}
              <Link to="/home">
                <FontAwesomeIcon className="nav-icon" icon={faUsersRectangle} />
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <Link to="/profile">
            <img className="icon-image-size" src={defaultProfilePhoto} alt="" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
