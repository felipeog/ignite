import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import CarouselItem from "./CarouselItem";

interface ISlide {
  title: string;
  subtitle: string;
  backgroundUrl: string;
  path: string;
}

interface ICarouselProps {
  slides: ISlide[];
}

const Carousel = ({ slides }: ICarouselProps) => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      loop
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.title}>
          <CarouselItem {...slide} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
