import React from "react";
import AllPosts from "../AllPosts/AllPosts";
import Stories from "../Stories/Stories";
import UploadPost from "../UploadPost/UploadPost";

const NewsFeed = () => {
  return (
    <div style={{ backgroundColor: "#1c1e21" }}>
      <div className="container">
        <Stories></Stories>
        <UploadPost></UploadPost>
        <AllPosts></AllPosts>
      </div>
    </div>
  );
};

export default NewsFeed;
