import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { FC, useEffect, useState } from "react";

import { i18nConfig } from "../constants";

const withTranslation =
  (Component: React.ComponentType<any>) => (props: any) => {
    const [translationRecived, setTranslationRecived] = useState(false);

    useEffect(() => {
      void i18n.use(initReactI18next).init(i18nConfig);
      void i18n.changeLanguage(i18nConfig.lng);

      setTranslationRecived(true);
    }, []);

    return translationRecived ? <Component {...props} /> : null;
  };

export default withTranslation;
