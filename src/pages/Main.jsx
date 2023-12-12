import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import ReactPageScroller from "react-page-scroller";
import Header from "../components/Header";
import Section01 from "../components/Section01";
import Section02 from "../components/Section02";
import Section03 from "../components/Section03";
import Section04 from "../components/Section04";
import Section05 from "../components/Section05";
import { CloseButton } from "../assets/CloseButton";
import useListTabs from "../hook/useListTabs";

import i18n from "../locales/i18n";
import { useSearchParams } from "react-router-dom";

const Main = () => {
  const [key, setKey] = useState(0);
  // 언어 변경하기
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setPopupState(false);
  };

  const [searchParams] = useSearchParams();

  const [popupState, setPopupState] = useState(false);
  const [mobileMenuState, setMobileMenuState] = useState(false);
  const [scrollState, setScrollState] = useState(false);
  const [pageNum, setPageNum] = useState(0);
  const [onPage, setOnePage] = useState(true);

  const listTabs = useListTabs().listTabs;

  const clickHandler = (index) => {
    let screenWidth = window.innerWidth;
    if (screenWidth <= 767) {
      setMobileMenuState(false);
    }
    if (index === 3) {
      setPageNum(4);
    } else {
      setPageNum(index);
    }
  };

  const handlePageChange = (number) => {
    setPageNum(number);
  };

  const handleResize = () => {
    // 윈도우 리사이즈 이벤트 발생시 Swiper에 적용된 key값을 바꿔 리로드
    setKey(window.innerWidth);
    if (window.innerWidth <= 501) {
      setOnePage(false);
    } else {
      setOnePage(true);
    }
  };

  useEffect(() => {
    if (searchParams.get("l") === "p") {
      changeLanguage("pt");
    } else if (searchParams.get("l") === "e") {
      changeLanguage("es");
    }

    if (searchParams.get("tab") === "1") {
      clickHandler(3);
    }

    window.addEventListener("resize", handleResize);
    let screenWidth = window.innerWidth;
    if (screenWidth <= 501) {
      setOnePage(false);
    }
    return () => {
      // cleanup
      window.removeEventListener("resize", handleResize);
    };
  }, [searchParams]);

  return (
    <>
      <Header
        mobileMenuState={mobileMenuState}
        setMobileMenuState={setMobileMenuState}
        setPopupState={setPopupState}
        clickHandler={clickHandler}
        listTabs={listTabs}
      />
      {onPage ? (
        <ReactPageScroller
          id="fullpage"
          blockScrollUp={scrollState}
          blockScrollDown={scrollState}
          animationTimer={600}
          animationTimerBuffer={100}
          customPageNumber={pageNum}
          pageOnChange={handlePageChange}
        >
          <Section01 />
          <Section02 setScrollState={setScrollState} />
          <Section03 key={key} />
          <Section04 key={key} />
          <Section05 setScrollState={setScrollState} />
        </ReactPageScroller>
      ) : (
        <div id="fullpage">
          <Section01 element={listTabs[0].element} />
          <Section02
            setScrollState={setScrollState}
            element={listTabs[1].element}
          />
          <Section03 element={listTabs[2].element} key={key} />
          <Section04 key={key} />
          <Section05
            setScrollState={setScrollState}
            element={listTabs[3].element}
          />
        </div>
      )}
      {/* {popupState && <PopUp setPopupState={setPopupState} />} */}
      {popupState && (
        <div className="popup_wrap sel_link">
          <div className="inner">
            <CloseButton setPopupState={setPopupState} />
            <ul>
              <li onClick={() => changeLanguage("es")}>
                <a href="#">SPANISH</a>
              </li>
              <li onClick={() => changeLanguage("pt")}>
                <a href="#">PORTUGUESE</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Main;
