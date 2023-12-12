import { useRef } from "react";

function useSwiperSettings() {
  const swiperRef = useRef(null);
  const subSwiperRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const settings = {
    navigation: {
      prevEl: prevRef.current, // 이전 버튼
      nextEl: nextRef.current, // 다음 버튼
    },
    onBeforeInit: (swiper) => {
      // 초기 설정
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.update();
    },
  };

  const toSlide = (index) => {
    swiperRef.current?.swiper?.slideTo(index);
  };
  const toSlideSub = (index) => {
    subSwiperRef.current?.swiper?.slideTo(index);
  };
  return {
    swiperRef,
    subSwiperRef,
    prevRef,
    nextRef,
    settings,
    toSlide,
    toSlideSub,
  };
}

export default useSwiperSettings;
