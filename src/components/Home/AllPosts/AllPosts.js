import React from "react";
import "./AllPosts.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGear,
  faThumbsUp,
  faMessage,
  faShare,
} from "@fortawesome/free-solid-svg-icons";

const AllPosts = () => {
  const AllPostData = [
    {
      id: 1,
      name: "Jhon Smith",
      profileImg: "https://i.postimg.cc/d1Wgj0rW/deafult2png.png",
      storyImg: "https://i.postimg.cc/d1Wgj0rW/deafult2png.png",
    },
    {
      id: 2,
      name: "Smith Jhon",
      profileImg: "https://i.postimg.cc/d1Wgj0rW/deafult2png.png",
      storyImg: "https://i.postimg.cc/d1Wgj0rW/deafult2png.png",
    },
    {
      id: 3,
      name: "Devid Miller",
      profileImg: "https://i.postimg.cc/d1Wgj0rW/deafult2png.png",
      storyImg: "https://i.postimg.cc/d1Wgj0rW/deafult2png.png",
    },
    {
      id: 4,
      name: "Daniel Josepf",
      profileImg: "https://i.postimg.cc/d1Wgj0rW/deafult2png.png",
      storyImg: "https://i.postimg.cc/d1Wgj0rW/deafult2png.png",
    },
    {
      id: 5,
      name: "Naeem Miah",
      profileImg: "https://i.postimg.cc/d1Wgj0rW/deafult2png.png",
      storyImg: "https://i.postimg.cc/d1Wgj0rW/deafult2png.png",
    },
    {
      id: 6,
      name: "Emon Khan",
      profileImg: "https://i.postimg.cc/d1Wgj0rW/deafult2png.png",
      storyImg: "https://i.postimg.cc/d1Wgj0rW/deafult2png.png",
    },
    {
      id: 7,
      name: "Sharif Amin",
      profileImg: "https://i.postimg.cc/d1Wgj0rW/deafult2png.png",
      storyImg: "https://i.postimg.cc/d1Wgj0rW/deafult2png.png",
    },
    {
      id: 8,
      name: "Naeem Ahmed",
      profileImg: "https://i.postimg.cc/d1Wgj0rW/deafult2png.png",
      storyImg: "https://i.postimg.cc/d1Wgj0rW/deafult2png.png",
    },
    {
      id: 9,
      name: "Emon Sah",
      profileImg: "https://i.postimg.cc/d1Wgj0rW/deafult2png.png",
      storyImg: "https://i.postimg.cc/d1Wgj0rW/deafult2png.png",
    },
    {
      id: 10,
      name: "Amin Sharif",
      profileImg: "https://i.postimg.cc/d1Wgj0rW/deafult2png.png",
      storyImg: "https://i.postimg.cc/d1Wgj0rW/deafult2png.png",
    },
  ];
  return (
    <div>
      {AllPostData.map((data) => (
        <div className="profile-posts-bg mx-5 mt-3">
          <div className="d-flex justify-content-between">
            <div className="d-flex p-2">
              <img className="post-profile-img" src={data.profileImg} alt="" />
              <div className="mx-2">
                <h6 className="text-white">{data.name}</h6>
                <small className="text-secondary">
                  1hrs ago <FontAwesomeIcon className="px-1" icon={faGear} />
                </small>
              </div>
            </div>
            <div>
              <h4 className="text-secondary fw-bold p-3">...</h4>
            </div>
          </div>
          <div>
            <img className="w-100" src={data.storyImg} alt="" />
          </div>

          <div className="p-3">
            <p className="text-white">Sumit Saha, Jhon and 100 others</p>
            <div className="d-flex justify-content-evenly post-card my-2">
              <div>
                <button className="posts-btn text-center my-2">
                  {" "}
                  <span>
                    <FontAwesomeIcon className="px-1" icon={faThumbsUp} />
                  </span>
                  Like
                </button>
              </div>
              <div>
                <button className="posts-btn text-center my-2">
                  <span>
                    <FontAwesomeIcon className="px-1" icon={faMessage} />
                  </span>{" "}
                  Comment
                </button>
              </div>
              <div>
                <button className="posts-btn text-center my-2">
                  <span>
                    <FontAwesomeIcon className="px-1" icon={faShare} />
                  </span>{" "}
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllPosts;
