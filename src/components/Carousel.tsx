"use client"

import React from 'react';
import { EffectFade, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

interface CarouselSpecsTypes {
  swiperStyle?: React.CSSProperties;
  slideStyle?: React.CSSProperties;
  imageStyle?: React.CSSProperties;
  images: string[];
}

const Carousel: React.FC<CarouselSpecsTypes> = ({ swiperStyle, slideStyle, imageStyle, images }) => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        speed={1500}
        modules={[EffectFade, Autoplay]}
        className="mySwiper"
        style={swiperStyle}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} style={{ ...slideStyle}}>
            <Image width={500} height={500} style={{ ...imageStyle}} src={image} alt={`Slide ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Carousel;
