import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { assets } from "../assets/assets";

const slides = [
  {
    img: assets.image1,
    title: "Delivering Quality Beyond Expectations",
    link: "/infrastructure",
  },
  {
    img: assets.image2,
    title: "Building the Future With Innovation",
    link: "/services",
  },
];

const Home = () => {
  return (
    <div className="relative w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
       
        loop={true}
        className="w-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="relative h-[88vh] w-full">
              <img
                src={slide.img}
                alt={`slide-${i}`}
                className="w-full h-full object-cover"
              />

              {/* Text + Button on image */}
              <div className="absolute left-10 bottom-20 text-white max-w-[550px]">
                <h2 className="text-4xl font-bold mb-4 drop-shadow-xl">
                  {slide.title}
                </h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Home;
