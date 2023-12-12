import React, { useState, useRef, useEffect } from "react";
import { useSearchParams } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import emailjs from '@emailjs/browser';

import termPath1 from "../data/terms1.txt";
import termPath2 from "../data/terms2.txt";
import termPath3 from "../data/terms3.txt";
import termPath4 from "../data/terms4.txt";

import termPathPT1 from "../data/terms1.pt.txt";
import termPathPT2 from "../data/terms2.pt.txt";
import termPathPT3 from "../data/terms3.pt.txt";
import termPathPT4 from "../data/terms4.pt.txt";



const Section05 = ({ setScrollState, element }) => {
  const MailServiceID = "service_cneqa5g";
  const MailTemplateID = "template_htzlm5s";
  const MailApiKey = "MMm0Ir7sbB2RdW8OF";

  const { t } = useTranslation();

  const [txt1, setTxt1] = useState("");
  const [txt2, setTxt2] = useState("");
  const [txt3, setTxt3] = useState("");
  const [txt4, setTxt4] = useState("");
  const [tabState, setTabState] = useState(false);

  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const form = useRef();

  const [searchParams, ] = useSearchParams();

  useEffect(() => {    
    if (searchParams.get("tab") !== undefined && searchParams.get("tab") !== null) {
      if (searchParams.get("tab") === "1") {
        setTabState(true);
      }
    }
  }, [searchParams]);

  const Save = (e) => {
    e.preventDefault();

    if (!isValiEmail(value1)) {
      alert(t('message.mailformatError'));
      return;
    }

    if (value2.length <= 3) {
      alert(t('message.subjectError'));
      return;
    }

    if (value3.length <= 3) {
      alert(t('message.contentError'));
      return;
    }

    emailjs.sendForm(MailServiceID, MailTemplateID, form.current, MailApiKey)
    .then((result) => {
      alert(t('message.Completed'));
      setValue1('');
      setValue2('');
      setValue3('');
    }, (error) => {
      console.error(error);
      alert('Mail Send Fail');
    });
  }

  function isValiEmail(val) {
    const emailRegex  = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(val);
  }

  const onChange1 = (event) => {
    setValue1(event.target.value);    
  }

  const onChange2 = (event) => {
    setValue2(event.target.value);
  }

  const onChange3 = (event) => {
    setValue3(event.target.value);
  }

  let path1, path2, path3, path4;

  if (t(`header.Lang`) === 'pt') {
    path1 = termPathPT1;
    path2 = termPathPT2;
    path3 = termPathPT3;
    path4 = termPathPT4;
  } else {
    path1 = termPath1;
    path2 = termPath2;
    path3 = termPath3;
    path4 = termPath4;
  }

  fetch(path1)
    .then(r => r.text())
    .then(text => {
    setTxt1(text);
  });

  fetch(path2)
    .then(r => r.text())
    .then(text => {
    setTxt2(text);
  });

  fetch(path3)
    .then(r => r.text())
    .then(text => {
    setTxt3(text);
  });

  fetch(path4)
    .then(r => r.text())
    .then(text => {
    setTxt4(text);
  });  

  const [subTabState, setSubTabState] = useState([
    {
      tabName: "Terms1",
      tabState: true,
    },
    {
      tabName: "Terms2",
      tabState: false,
    },
    {
      tabName: "Terms3",
      tabState: false,
    },
    {
      tabName: "Terms4",
      tabState: false,
    },
  ]);
  
  const subTabClickHandler = (id) => {
    let updatedSubTabState;

    if (id === "tab_3") {
      updatedSubTabState = subTabState.map((item) =>
        item.tabName === "Terms1"
          ? { ...item, tabState: true }
          : { ...item, tabState: false }
      );            
    }
    if (id === "tab_4") {
      updatedSubTabState = subTabState.map((item) =>
        item.tabName === "Terms2"
          ? { ...item, tabState: true }
          : { ...item, tabState: false }
      );
    }
    if (id === "tab_5") {
      updatedSubTabState = subTabState.map((item) =>
        item.tabName === "Terms3"
          ? { ...item, tabState: true }
          : { ...item, tabState: false }
      );
    }
    if (id === "tab_6") {
      updatedSubTabState = subTabState.map((item) =>
        item.tabName === "Terms4"
          ? { ...item, tabState: true }
          : { ...item, tabState: false }
      );
    }

    setSubTabState(updatedSubTabState);
  };
  return (
    <div
      ref={element && element}
      className="section section_05"
      style={{ height: "100vh" }}
    >
      <div className="inner">
        <div className="illust_img">
          <img src="img/illust_02.png" alt="illust" />
        </div>
        <div className="tab_cont_wrap">
          <div className={`tab_cont ${tabState ? "on" : ""}`} id="tab_1">
            <div className="term">
              <h2>{t(`section.TermsTitle`)}</h2>
              <div className="tab_menu depth02">
                <ul>
                  {subTabState.map((subTab, index) => (
                    <li key={index}>
                      <button
                        type="button"
                        data-tab={`tab_${index + 3}`}
                        className={`${subTabState[index].tabState ? "on" : ""}`}
                        onClick={() => subTabClickHandler(`tab_${index + 3}`)}
                      >
                        {t(`section.${subTab.tabName}`)}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="tab_cont_wrap">
                <div
                  className={`tab_cont ${subTabState[0].tabState ? "on" : ""}`}
                  id="tab_3"
                  onMouseOver={() => setScrollState(true)}
                  onMouseOut={() => setScrollState(false)}
                >                 
                  <div className="term_box scrollable-content" dangerouslySetInnerHTML={ {__html: txt1}}>
                  </div>
                </div>
                <div
                  className={`tab_cont ${subTabState[1].tabState ? "on" : ""}`}
                  id="tab_4"
                  onMouseOver={() => setScrollState(true)}
                  onMouseOut={() => setScrollState(false)}
                >
                  <div className="term_box scrollable-content" dangerouslySetInnerHTML={ {__html: txt2}} />
                </div>
                <div
                  className={`tab_cont ${subTabState[2].tabState ? "on" : ""}`}
                  id="tab_5"
                  onMouseOver={() => setScrollState(true)}
                  onMouseOut={() => setScrollState(false)}
                >
                  <div className="term_box scrollable-content" dangerouslySetInnerHTML={ {__html: txt3}} />
                </div>
                <div
                  className={`tab_cont ${subTabState[3].tabState ? "on" : ""}`}
                  id="tab_6"
                  onMouseOver={() => setScrollState(true)}
                  onMouseOut={() => setScrollState(false)}
                >
                  <div className="term_box scrollable-content" dangerouslySetInnerHTML={ {__html: txt4}} />
                </div>               
              </div>
            </div>
          </div>
          <div className={`tab_cont ${tabState ? "" : "on"}`} id="tab_2">
            <div className="form_wrap">
              <form ref={form} onSubmit={Save}>
                <h2>{t(`section.QnaTitle`)}</h2>
                <div
                  className="form scrollable-content"
                  onMouseOver={() => setScrollState(true)}
                  onMouseOut={() => setScrollState(false)}
                >
                  <div className="item">
                    <span className="tit">
                    {t(`section.QnaInput1`)}
                    </span>
                    <input
                      name="user_email"
                      text={value1}
                      onChange={onChange1}
                      type="text"                    
                      placeholder={t(`section.QnaInput1`)}
                    />
                  </div>
                  <div className="item">
                    <span className="tit">{t(`section.QnaInput2`)}</span>
                    <input name="title" text={value2} onChange={onChange2} type="text" placeholder={t(`section.QnaInput2`)} />
                  </div>
                  <div className="item">
                    <span className="tit">{t(`section.QnaInput3`)}</span>
                    <textarea name="message" placeholder={t(`section.QnaInput4`)} text={value3} onChange={onChange3}></textarea>
                  </div>
                  <button type="submit" className="btn_primary">
                    <span>{t(`section.BtnSend`)}</span>
                    <img src="img/btn_bg.png" alt="img" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="tab_menu depth01">
          <ul>
            <li>
              <a href={t('section.FaqLink')} target="_blank" rel="noreferrer">faq</a>
            </li>
            <li>
              <button
                type="button"
                data-tab="tab_1"
                className={`${tabState ? "on" : ""}`}
                onClick={() => setTabState(true)}
              >
                {t(`section.TermsTitle`)}
              </button>
            </li>
            <li>
              <button
                type="button"
                data-tab="tab_2"
                className={`${tabState ? "" : "on"}`}
                onClick={() => setTabState(false)}
              >
                {t(`section.QnaTitle`)}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Section05;
