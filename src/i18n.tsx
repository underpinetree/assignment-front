import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import locales from './locale/index';

const resources = {
  en: {
    translation: locales.en,
  },
  zh: {
    translation: locales.zh,
  },
  ja: {
    translation: locales.ja,
  },
  ee: {
    translation: locales.ee,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: ['en', 'zh', 'ja', 'ee'],
  keySeparator: false,
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18n;
