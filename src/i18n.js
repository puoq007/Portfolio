// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';


import enTranslation from './components/locales/en/translation.json';
import thTranslation from './components/locales/th/translation.json';

const resources = {
  en: {
    translation: enTranslation
  },
  th: {
    translation: thTranslation
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',

   
    detection: {
      order: ['queryString', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
      caches: ['localStorage'] 
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;