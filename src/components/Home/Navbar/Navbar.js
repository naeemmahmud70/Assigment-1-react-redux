import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import facebookIcon from "../../../images/facebook.png";
import defaultProfilePhoto from "../../../images/defaultProfilePhoto.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav class="row navbar navbar-expand-lg navbar-light navbar-bg sticky-top t-0 bg-color px-2">
      <div class="container-fluid">
        <img className="icon-image-size" src={facebookIcon} alt="" />
        <div>
          <form className="navbar-input d-flex mx-2">
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
          <ul class="navbar-nav ms-auto">
            <li class="nav-item mx-4 fw-bold nav-hover ">
              <Link to="profile">
                <img
                  className="icon-image-size"
                  src={defaultProfilePhoto}
                  alt=""
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
