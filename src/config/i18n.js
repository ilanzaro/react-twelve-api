import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import { LANGUAGES } from "../constants";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector) // browser language detector as a middleware
  .use(HttpApi) //for serving secific translation files
  .init({
    //lng: document.querySelector('html').lang, // if you're using a language detector, do not define the lng option
    supportedLngs: LANGUAGES.map((lang)=> lang.code),
    fallbackLng: 'en',
    detection: { 
        order: ['htmlTag', 'cookie', 'localStorage', 'path', 'subdomain'],
        caches: ['cookie']
    },
    backend: {
        loadPath: '/assets/locales/{{lng}}/translation.json',
    },
    react: {
        useSuspense: false,
      },
  });

  export default i18n;