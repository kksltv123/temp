import React from "react";

const SwiperButton = ({ toSlide, slideIndex, setSldieIndex, isSlide2 }) => {
  const slideNextHandler = () => {
    if (isSlide2) {
      if (slideIndex === 11) return;
      toSlide(slideIndex + 1);
      setSldieIndex(slideIndex + 1);
    } else {
      if (slideIndex === 5) return;
      toSlide(slideIndex + 1);
      setSldieIndex(slideIndex + 1);
    }
  };
  const slidePrevHandler = () => {
    if (slideIndex === 0) return;
    toSlide(slideIndex - 1);
    setSldieIndex(slideIndex - 1);
  };
  return (
    <>
      <div
        style={{ opacity: slideIndex === 0 ? 0.5 : 1 }}
        className="swiper-button-prev swiper-button-prev-04"
        onClick={slidePrevHandler}
      >
        <img src="img/character/btn_prev.png" alt="button prev" />
      </div>
      {isSlide2 ? (
        <div
          style={{ opacity: slideIndex === 11 ? 0.5 : 1 }}
          className="swiper-button-next swiper-button-next-04"
          onClick={slideNextHandler}
        >
          <img src="img/character/btn_next.png" alt="button next" />
        </div>
      ) : (
        <div
          style={{ opacity: slideIndex === 5 ? 0.5 : 1 }}
          className="swiper-button-next swiper-button-next-04"
          onClick={slideNextHandler}
        >
          <img src="img/character/btn_next.png" alt="button next" />
        </div>
      )}
    </>
  );
};

export default SwiperButton;
