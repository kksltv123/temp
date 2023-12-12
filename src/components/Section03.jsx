import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import useSwiperSettings from "../hook/useSwiperSettings";
import { characterList, subCharacterList } from "../data/data";
import SwiperButton from "../assets/SwiperButton";
import { useTranslation } from "react-i18next";

const Section03 = ({ element, key }) => {
  const { swiperRef, subSwiperRef, settings, toSlide, toSlideSub } =
    useSwiperSettings();
  const [slideIndex, setSldieIndex] = useState(3);
  const { t } = useTranslation();

  return (
    <div
      ref={element && element}
      className="section section_03"
      style={{ height: "100vh" }}
    >
      <div className="inner">
        <h1 className="sec_tit">
          <img src={t(`section.img_title1`)} alt="piloto" />
        </h1>
        <div className="cont">
          <div className="main_swiper">
            <Swiper
              key={key}
              ref={swiperRef}
              className="swiper-container"
              modules={[Navigation]}
              navigation
              initialSlide={0}
              onSlideChange={(e) => {
                toSlideSub(e.realIndex);
                setSldieIndex(e.realIndex);
              }}
              {...settings}
            >
              {characterList.map((list, index) => (
                <SwiperSlide className="swiper-slide" key={index}>
                  <div className="char_box">
                    <img
                      src={list.idleImg}
                      className={`idle${index}`}
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
                toSlide(e.realIndex);
                setSldieIndex(e.realIndex);
              }}
              {...settings}
            >
              {subCharacterList.map((list, index) => (
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
              isSlide2={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section03;
