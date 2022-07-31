import React from "react";
import "./ProfileNavigationVar.css";
import { Link } from "react-router-dom";

const ProfileNavigationVar = () => {
  return (
    <nav className="d-flex justify-content-between border-top">
      <div className="my-3">
        <Link className="nav-item mx-3" to="posts">
          Posts
        </Link>
        <Link className="nav-item mx-3" to="about">
          About
        </Link>
        <Link className="nav-item mx-3" to="friends">
          Friends
        </Link>
        <Link className="nav-item mx-3" to="photos">
          Photos
        </Link>
        <Link className="nav-item mx-3" to="videos">
          Videos
        </Link>
        <Link className="nav-item mx-3" to="chekin">
          Check In
        </Link>
        <Link className="nav-item mx-3" to="more">
          More
        </Link>
      </div>
      <div className="my-3">
        <button className="profile-navigation-more-btn">...</button>
      </div>
    </nav>
  );
};

export default ProfileNavigationVar;
