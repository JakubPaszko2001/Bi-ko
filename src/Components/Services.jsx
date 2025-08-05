import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import BathroomImg from "../Assets/bathroom.png";
import Livingroom from "../Assets/livingroom.png";
import Painting from "../Assets/painting.png";
import Elewacje from "../Assets/elewacje.png";

const Services = () => {
  const services = [
    {
      title: "Remont Łazienki",
      image: BathroomImg,
    },
    {
      title: "Wykończenia Wnętrz",
      image: Livingroom,
    },
    {
      title: "Malowanie",
      image: Painting,
    },
    {
      title: "Elewacje",
      image: Elewacje,
    },
  ];

  return (
    <div className="bg-[#1f3622] pb-16 relative">
      {/* Niewidoczny punkt kotwicy */}
      <span id="services" className="block absolute -top-20" aria-hidden="true"></span>

      <h2 className="text-white text-4xl md:text-5xl font-bold text-center mb-10 sm:!pt-8">
        Nasze usługi
      </h2>

      <div className="max-w-6xl mx-auto px-[20px]">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1.2}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            768: {
              slidesPerView: 2.2,
            },
            1024: {
              slidesPerView: 2.8,
            },
          }}
        >
          {services.map((service, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative group overflow-hidden rounded-xl">
                {/* Tło */}
                <div className="absolute top-6 left-6 w-[92%] h-full bg-[#2d4731] rounded-xl z-0"></div>

                {/* Główna karta */}
                <div className="relative z-10 bg-white rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="object-cover w-full h-[440px]"
                  />
                  <div className="absolute bottom-6 left-6 text-white text-lg font-medium drop-shadow-[0_4px_3px_rgba(0,0,0,0.25)]">
                    {service.title}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Services;
