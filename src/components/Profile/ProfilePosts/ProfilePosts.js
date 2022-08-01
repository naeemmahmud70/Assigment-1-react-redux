import React from "react";
import "./ProfilePost.css";
import profilePicture from "../../../images/defaultProfilePhoto.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVideoCamera,
  faImages,
  faFlag,
  faFilter,
  faGear,
  faBars,
  faBox,
} from "@fortawesome/free-solid-svg-icons";

const ProfilePosts = () => {
  return (
    <div>
      <div className="profile-posts-bg mt-3 p-3">
        <div className="d-flex align-items-center">
          <div className="image-width">
            <img className="border-round-picture" src={profilePicture} alt="" />
          </div>
          <div className="input-width">
            <input
              type="upload"
              name=""
              disabled
              className="upload-input w-100"
              placeholder="What's on your mind?"
            />
          </div>
        </div>

        <div className="d-flex justify-content-evenly top-border">
          <div>
            <button className="posts-btn text-center mt-2">
              {" "}
              <span>
                <FontAwesomeIcon className="px-1" icon={faVideoCamera} />
              </span>
              Live Video
            </button>
          </div>
          <div>
            <button className="posts-btn text-center mt-2">
              <span>
                <FontAwesomeIcon className="px-1" icon={faImages} />
              </span>{" "}
              Photo/Video
            </button>
          </div>
          <div>
            <button className="posts-btn text-center mt-2">
              <span>
                <FontAwesomeIcon className="px-1" icon={faFlag} />
              </span>{" "}
              Life Event
            </button>
          </div>
        </div>
      </div>
      <div className="profile-posts-bg mt-3 p-3">
        <div className="d-flex justify-content-between align-item-center">
          <div>
            <h4 className="text-white fw-bold">Posts</h4>
          </div>
          <div>
            <button className="edit-profile-btn">
              <FontAwesomeIcon className="px-1" icon={faFilter} />
              Filters
            </button>
            <button className="edit-profile-btn mx-2">
              <FontAwesomeIcon className="px-1" icon={faGear} />
              Manage posts
            </button>
          </div>
        </div>
        <div className="d-flex justify-content-evenly top-border">
          <div>
            <button className="posts-btn text-center mt-2">
              <FontAwesomeIcon className="px-1" icon={faBars} />
              List view
            </button>
          </div>
          <div>
            <button className="posts-btn text-center mt-2">
              <FontAwesomeIcon className="px-1" icon={faBox} />
              Grid view
            </button>
          </div>
        </div>
      </div>
      <div>
        <p className="text-center text-secondary">No posts avaibale</p>
      </div>
    </div>
  );
};

export default ProfilePosts;
