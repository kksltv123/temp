import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationES from "./es/translation.json";
import translationPT from "./pt/translation.json";

const resources = {
  es: {
    translation: translationES
  },
  pt: {
    translation: translationPT
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "es", // 기본 설정 언어, 'cimode'로 설정할 경우 키 값으로 출력된다.
    fallbackLng: "es", // 번역 파일에서 찾을 수 없는 경우 기본 언어
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;