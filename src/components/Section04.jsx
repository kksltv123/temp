import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import useSwiperSettings from "../hook/useSwiperSettings";
import { mobileList, subMobileList } from "../data/data";
import SwiperButton from "../assets/SwiperButton";
import { useTranslation } from "react-i18next";

const Section04 = ({ key }) => {
  const { swiperRef, subSwiperRef, settings, toSlide, toSlideSub } =
    useSwiperSettings();
  const [slideIndex, setSldieIndex] = useState(3);

  const { t } = useTranslation();

  return (
    <div className="section section_04" style={{ height: "100vh" }}>
      <div className="inner">
        <h1 className="sec_tit">
          <img src="img/title_sec_04_pt.png" alt="mobile" />
        </h1>
        <div className="cont">
          <div className="main_swiper">
            <Swiper
              key={key}
              ref={swiperRef}
              className="swiper-container"
              modules={[Navigation]}
              navigation
              initialSlide={2}
              onSlideChange={(e) => {
                toSlideSub(e.activeIndex);
                setSldieIndex(e.realIndex);
              }}
              {...settings}
            >
              {mobileList.map((list, index) => (
                <SwiperSlide className="swiper-slide" key={index}>
                  <div className="char_box">
                    <img
                      src={list.idleImg}
                      className={`idle${index + 7}`}
                      alt="illust"
                    />
                  </div>
                  <div className="bubble_box">
                    <img src="img/asset_bg_06.png" alt="bg" />
                    <div className="box">
                      <span className="name">{list.name}</span>
                      <p>{t(`section.` + list.name.toLowerCase() + "_DESC")}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="sub_swiper">
            <Swiper
              key={key}
              ref={subSwiperRef}
              className="swiper-container"
              slidesPerView="auto"
              modules={[Navigation]}
              autoHeight
              navigation
              slideToClickedSlide
              centeredSlides
              initialSlide={2}
              onSlideChange={(e) => {
                toSlide(e.activeIndex);
                setSldieIndex(e.realIndex);
              }}
              {...settings}
            >
              {subMobileList.map((list, index) => (
                <SwiperSlide
                  className="swiper-slide"
                  key={index}
                  onClick={() => toSlide(index)}
                >
                  <img src={list} alt="illust" />
                </SwiperSlide>
              ))}
            </Swiper>
            <SwiperButton
              toSlide={toSlide}
              slideIndex={slideIndex}
              setSldieIndex={setSldieIndex}
              isSlide2={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section04;
