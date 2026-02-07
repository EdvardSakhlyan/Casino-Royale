import { useTranslation } from "react-i18next";
import LanguageSelect from "../LanguageSelect/LanguageSelect";
import Socials from "../Socials/Socials";

import styles from "./LangAndSocials.module.scss";

const LangAndSocials = () => {
  const { i18n } = useTranslation();
  const handleChangeLanguage = (value: string) => {
    i18n.changeLanguage(value);
  };
  return (
    <div className={styles.wrapper}>
      <LanguageSelect onChange={handleChangeLanguage} />
      <Socials />
    </div>
  );
};

export default LangAndSocials;
