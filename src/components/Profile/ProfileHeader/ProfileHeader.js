import React, { useEffect, useState } from "react";
import "./ProfileHeader.css";
import coverPicture from "../../../images/cover.jpg";
import profilePicture from "../../../images/defaultProfilePhoto.jpg";
import ProfileNavigationVar from "../ProfileNavigationVar/ProfileNavigationVar";
import { useSelector } from "react-redux";

const ProfileHeader = () => {
  // const user = useSelector((state) => state.loginUser.user);
  const loginUserdData = localStorage.getItem("loggedInUser");
  const loginData = JSON.parse(loginUserdData);
  return (
    <div className="profile-header-bg">
      <div className="container">
        <div>
          <div>
            <img className="w-100 rounded" src={coverPicture} alt="" />
            <div className="d-flex justify-content-end">
              <button className="cover-photo-btn">Edit cover photo</button>
            </div>
          </div>
          <div className="profile-picture-div d-flex justify-content-between mx-3">
            <div className="d-flex mx-5">
              <div>
                <img
                  className="profile-picture-img"
                  src={profilePicture}
                  alt=""
                />
              </div>
              <div className="d-flex align-items-center mx-4">
                <div>
                  <div>
                    <h2 className="text-white">{loginData.fullName}</h2>
                    <h5 className="text-white">1.1k friends</h5>
                  </div>
                  <div>
                    <img
                      className="friends-picture"
                      src={profilePicture}
                      alt=""
                    />
                    <img
                      className="friends-picture"
                      src={profilePicture}
                      alt=""
                    />
                    <img
                      className="friends-picture"
                      src={profilePicture}
                      alt=""
                    />
                    <img
                      className="friends-picture"
                      src={profilePicture}
                      alt=""
                    />
                    <img
                      className="friends-picture"
                      src={profilePicture}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="d-flex align-items-center">
              <div className="mt-5">
                <button className="add-story-btn mx-3">Add to story</button>
                <button className="edit-profile-btn">Edit profile</button>
              </div>
            </div>
          </div>
        </div>
        <ProfileNavigationVar></ProfileNavigationVar>
      </div>
      <div className="my-5"></div>
    </div>
  );
};

export default ProfileHeader;
