import React from "react";
import Navbar from "../Home/Navbar/Navbar";
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import ProfileIntro from "./ProfileIntro/ProfileIntro";
import ProfilePosts from "./ProfilePosts/ProfilePosts";

const Profile = () => {
  return (
    <div>
      <Navbar></Navbar>
      <ProfileHeader></ProfileHeader>
      <div style={{ backgroundColor: "#1c1e21", marginTop: "-50px"}}>
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <ProfileIntro></ProfileIntro>
            </div>
            <div className="col-md-7">
              <ProfilePosts></ProfilePosts>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
