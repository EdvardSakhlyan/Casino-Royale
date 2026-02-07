import { type Option } from "../types/index";

import trFlag from "flag-icons/flags/4x3/tr.svg";
import ruFlag from "flag-icons/flags/4x3/ru.svg";
import enFlag from "flag-icons/flags/4x3/gb.svg";

export const options: Option[] = [
  { code: "en", label: "English", flag: enFlag },
  { code: "ru", label: "Russian", flag: ruFlag },
  { code: "tr", label: "Turkish", flag: trFlag },
];

const resources = {
  en: {
    translation: {
      prevention: {
        1: "Only 18+",
        2: "Casino is certified by the Anjouan Gaming Authority",
      },
      downloadBlock: {
        title: "Download Casino",
        description: "Play Min anywhere, anytime",
        installButton: "Install App",
      },
      main: {
        openButton: "Open the game",
      },
      socials: {
        title: "Us on social media:",
      },
    },
  },
  ru: {
    translation: {
      prevention: {
        1: "Только 18+",
        2: "Казино сертифицировано Агентством Игровой Активности Анжуан",
      },
      downloadBlock: {
        title: "Скачать Казино",
        description: "Играйте в Min где угодно, когда угодно",
        installButton: "Установить Приложение",
      },
      main: {
        openButton: "Открыть игру",
      },
      socials: {
        title: "Мы в социальных сетях:",
      },
    },
  },
  tr: {
    translation: {
      prevention: {
        1: "Sadece 18+",
        2: "Kumarhane, Anjouan Oyun Otoritesi tarafından onaylanmıştır.",
      },
      downloadBlock: {
        title: "Casino'yu İndir",
        description: "Min oyununu her yerde, her zaman oynayın.",
        installButton: "Uygulamayı Yükle",
      },
      main: {
        openButton: "Oyunu Aç",
      },
      socials: {
        title: "Bizi sosyal medyada takip edin:",
      },
    },
  },
};

export const i18nConfig = {
  lng: "en",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },

  resources,
};
