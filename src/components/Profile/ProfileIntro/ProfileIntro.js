import React from "react";
import "./ProfileIntro.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHomeAlt,
  faLocation,
  faHeart,
  faStopwatch,
} from "@fortawesome/free-solid-svg-icons";

const ProfileIntro = () => {
  return (
    <div id="profile-intro-bg" className="mt-3 p-3">
      <div>
        <h4 className="text-white fw-bold">Intro</h4>
        <p className="text-white text-center">
          Don't wait for the perfect moment⏱️. Take the moment and make it
          perfect.Don't wait for the perfect moment⏱️. Take the moment and make
          it perfect.
        </p>
        <div>
          <button className="edit-bio-btn w-100">Edit bio</button>
        </div>
      </div>
      <div className="mt-3">
        <h6 className="details-text-color">
          <span>
            <FontAwesomeIcon className="search-icon px-3" icon={faLocation} />
          </span>
          Lives Brahmanbaria, Dhaka, Bangladesh
        </h6>
        <h6 className="details-text-color">
          <span>
            <FontAwesomeIcon className="search-icon px-3" icon={faHomeAlt} />
          </span>
          From Brahmanbaria, Dhaka, Bangladesh
        </h6>
        <h6 className="details-text-color">
          <span>
            <FontAwesomeIcon className="search-icon px-3" icon={faHeart} />
          </span>
          Single
        </h6>
        <h6 className="details-text-color">
          <span>
            <FontAwesomeIcon className="search-icon px-3" icon={faStopwatch} />
          </span>
          Joined August 2022
        </h6>
      </div>
    </div>
  );
};

export default ProfileIntro;
