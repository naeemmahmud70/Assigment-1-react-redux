import React from "react";
import "./Stories.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";
import "swiper/scss/effect-creative";

const Stories = () => {
  const storyData = [
    {
      id: 1,
      name: "Jhon",
      profileImg: "https://i.postimg.cc/d1Wgj0rW/deafult2png.png",
      storyImg: "https://i.postimg.cc/d1Wgj0rW/deafult2png.png",
    },
    {
      id: 2,
      name: "Smith",
      profileImg: "https://i.postimg.cc/d1Wgj0rW/deafult2png.png",
      storyImg: "https://i.postimg.cc/d1Wgj0rW/deafult2png.png",
    },
    {
      id: 3,
      name: "Devid",
      profileImg: "https://i.postimg.cc/d1Wgj0rW/deafult2png.png",
      storyImg: "https://i.postimg.cc/d1Wgj0rW/deafult2png.png",
    },
    {
      id: 4,
      name: "Daniel",
      profileImg: "https://i.postimg.cc/d1Wgj0rW/deafult2png.png",
      storyImg: "https://i.postimg.cc/d1Wgj0rW/deafult2png.png",
    },
    {
      id: 5,
      name: "Naeem",
      profileImg: "https://i.postimg.cc/d1Wgj0rW/deafult2png.png",
      storyImg: "https://i.postimg.cc/d1Wgj0rW/deafult2png.png",
    },
    {
      id: 6,
      name: "Emon",
      profileImg: "https://i.postimg.cc/d1Wgj0rW/deafult2png.png",
      storyImg: "https://i.postimg.cc/d1Wgj0rW/deafult2png.png",
    },
    {
      id: 7,
      name: "Sharif",
      profileImg: "https://i.postimg.cc/d1Wgj0rW/deafult2png.png",
      storyImg: "https://i.postimg.cc/d1Wgj0rW/deafult2png.png",
    },
    {
      id: 8,
      name: "Naeem",
      profileImg: "https://i.postimg.cc/d1Wgj0rW/deafult2png.png",
      storyImg: "https://i.postimg.cc/d1Wgj0rW/deafult2png.png",
    },
    {
      id: 9,
      name: "Emon",
      profileImg: "https://i.postimg.cc/d1Wgj0rW/deafult2png.png",
      storyImg: "https://i.postimg.cc/d1Wgj0rW/deafult2png.png",
    },
    {
      id: 10,
      name: "Sharif",
      profileImg: "https://i.postimg.cc/d1Wgj0rW/deafult2png.png",
      storyImg: "https://i.postimg.cc/d1Wgj0rW/deafult2png.png",
    },
  ];
  return (
    <div className="mx-5">
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={1}
        centeredSlides="true"
        grabCursor="true"
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        breakpoints={{
          480: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 7,
          },
          1440: {
            slidesPerView: 7,
          },
          2560: {
            slidesPerView: 7,
          },
        }}
      >
        {storyData.map((details) => (
          <SwiperSlide>
            <div className="col-md-2 rounded">
              <img className="profile-Img" src={details.profileImg} alt="" />
              <img
                className="story-Img rounded"
                src={details.storyImg}
                alt=""
              />
              <h6 className=" text-center story-name">{details.name}</h6>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Stories;
