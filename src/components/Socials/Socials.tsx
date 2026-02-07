import { useTranslation } from "react-i18next";

import { Image } from "../../ui";
import instagramIcon from "../../assets/instagram.png";
import telegramIcon from "../../assets/telegram.png";
import twitterIcon from "../../assets/twitter.png";
import emailIcon from "../../assets/email.png";

import styles from "./Socials.module.scss";

const Socials = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.socialsContainer}>
      <p className={styles.socialsTitle}>{t("socials.title")}</p>
      <div className={styles.socialsIcons}>
        <a
          className={styles.socialsIcon}
          href="https://instagram.com"
          target="_blank"
        >
          <Image src={instagramIcon} alt="Instagram" />
        </a>
        <a
          className={styles.socialsIcon}
          href="https://web.telegram.org"
          target="_blank"
        >
          <Image src={telegramIcon} alt="Telegram" />
        </a>
        <a
          className={styles.socialsIcon}
          href="https://twitter.com"
          target="_blank"
        >
          <Image src={twitterIcon} alt="Twitter" />
        </a>
        <a
          className={styles.socialsIcon}
          href="mailto:contact@example.com"
          target="_blank"
        >
          <Image src={emailIcon} alt="Email" />
        </a>
      </div>
    </div>
  );
};

export default Socials;
