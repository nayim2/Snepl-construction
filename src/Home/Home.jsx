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
    tag: "Industrial Construction Experts",
    title: "Delivering Precision, Safety & Reliability Since 25+ Years",
    subtitle:
      "From fabrication and piping to boiler erection, equipment installation and electrical works — we execute complex industrial projects with unmatched quality and zero-accident policy.",
    button: "Contact Us",
    link: "/contact",
  },
  {
    img: assets.image2,
    tag: "End-to-End Project Execution",
    title: "Complete Engineering Solutions Under One Roof",
    subtitle:
      "With in-house teams for fabrication, erection and electrical works, we ensure timely delivery, cost efficiency and long-term operational performance for every project.",
    button: "Explore Services",
    link: "/services",
  },
  {
    img: assets.project10,
    tag: "Our Mission",
    title: "Setting New Benchmarks in Industrial Infrastructure",
    subtitle:
      "We strive to innovate continuously, maintain the highest safety and quality standards, and ensure lasting customer satisfaction in every stage of execution.",
    button: "Learn More",
    link: "/about",
  },
];

const Home = () => {
  return (
    <div className="relative w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        navigation
        loop
        className="w-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="relative md:h-[90vh] h-[550px] w-full">
              <img
                src={slide.img}
                alt={`slide-${i}`}
                className="w-full h-full object-cover"
              />

              {/* Stylish dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

              {/* Animated text */}
              <div className="absolute left-10 md:left-20 top-[45%] -translate-y-1/2 text-white max-w-[700px] animate-[fadeSlide_1s_ease]">
                {/* Glass Tag */}
                <p className="backdrop-blur-md bg-white/15 border border-white/20 text-sm inline-block px-5 py-1 rounded-full font-semibold tracking-wide mb-5">
                  {slide.tag}
                </p>

                <h2 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-2xl mb-6">
                  {slide.title}
                </h2>

                <p className="text-lg md:text-2xl drop-shadow-xl opacity-95 mb-10">
                  {slide.subtitle}
                </p>

                <a
                  href={slide.link}
                  className="px-8 py-3 text-lg font-semibold rounded-lg shadow-xl border border-white/20 bg-green-600 hover:bg-white hover:text-green-700 transition-all duration-300"
                >
                  {slide.button}
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Keyframes for smooth left-slide animation */}
      <style>
        {`
    @keyframes fadeSlide {
      0% { opacity: 0; transform: translateX(-40px); }
      100% { opacity: 1; transform: translateX(0); }
    }

    /* Make carousel arrows white */
    .swiper-button-next,
    .swiper-button-prev {
      color: #ffffff !important;
    }

    /* Increase arrow size */
    .swiper-button-next::after,
    .swiper-button-prev::after {
      font-size: 35px !important;
      font-weight: bold;
    }

    
  `}
      </style>
    </div>
  );
};

export default Home;
