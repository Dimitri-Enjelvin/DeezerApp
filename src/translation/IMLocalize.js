import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './en';
import fr from './fr';

const LANGUAGES = {
  en,
  fr
};

i18n
  .use(initReactI18next) 
  .init({
    
    compatibilityJSON: 'v3',
    resources: {
      LANGUAGES
    },
    lng: "en", 
    fallbackLng: "en",

    interpolation: {
      escapeValue: false 
    }
  });