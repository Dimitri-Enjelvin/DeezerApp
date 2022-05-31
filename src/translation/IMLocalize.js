import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './en/index.json';
import fr from './fr/index.json';

// const LANGUAGES = {
//   en,
//   fr
// };

i18n
  .use(initReactI18next) 
  .init({
    
    compatibilityJSON: 'v3',
    resources: {
      en: {
        trad : en 
      },
      fr: {
        trad : fr
      } 
    },
    lng: "en", 
    fallbackLng: "en",

    interpolation: {
      escapeValue: false 
    }
  });