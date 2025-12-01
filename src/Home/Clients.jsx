import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Clients = () => {
  const clientLogos = [
    assets.client1,
    assets.client2,
    assets.client4,
    assets.client5,
    assets.client6,
  ];

  const navigate = useNavigate();

  return (
    <div className="w-full bg-white py-14 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Our Customers
      </h2>

      {/* Carousel */}
      <div className="max-w-[1300px] mx-auto relative">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 2000 }}
          loop={true}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          spaceBetween={40}
          className="py-8"
        >
          {clientLogos.map((logo, i) => (
            <SwiperSlide key={i}>
              <img
                src={logo}
                alt="client logo"
                className="w-full h-[120px] object-contain mx-auto  transition"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Button */}
      <div className="flex justify-center mt-8">
        <button
          onClick={() => navigate("/customers")}
          className="bg-red-500 hover:bg-red-600 transition text-white px-6 py-3 rounded-md font-semibold"
        >
          View All
        </button>
      </div>
    </div>
  );
};

export default Clients;
