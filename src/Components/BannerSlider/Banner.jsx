import React from 'react';
import { Autoplay, EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const Banner = ({ bannerData }) => {
  return (
    <div>
      <Swiper
        grabCursor={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
      >
        {bannerData.map((img) => (
          <SwiperSlide>
            <img
              className="w-full lg:h-[700px] md:h-[400px] h-[280px] object-cover"
              src={img.photoURL}
              alt=""
            />
          </SwiperSlide>
        ))}
        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
};

export default Banner;