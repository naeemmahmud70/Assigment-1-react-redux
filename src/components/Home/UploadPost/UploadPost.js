import React from "react";
import "./UploadPost.css";
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

const UploadPost = () => {
  return (
    <div>
      <div className="profile-posts-bg mx-5 p-3">
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
              Feeling/Activity
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadPost;
