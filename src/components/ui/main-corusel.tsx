import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Container } from "@containers";

import { Navigation } from "swiper/modules";

export default function App() {
  return (
    <>
      <Container>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper rounded-lg">
          <SwiperSlide>
            <img
              src="https://images.uzum.uz/cp5ffiffrr80f2gm0ga0/main_page_banner.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images.uzum.uz/cp5ffiffrr80f2gm0ga0/main_page_banner.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images.uzum.uz/cp5ffiffrr80f2gm0ga0/main_page_banner.jpg"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </Container>
    </>
  );
}
