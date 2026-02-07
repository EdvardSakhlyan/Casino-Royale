import { useTranslation } from "react-i18next";
import Maskot from "../../ui/Maskot/Maskot";
import DownloadBlock from "../DownloadBlock/DownloadBlock";
import Preventions from "../Preventions/Preventions";
import LangAndSocials from "../LangAndSocials/LangAndSocials";
import { useGetWindowSize } from "../../hooks";

import styles from "./Footer.module.scss";

const Footer = () => {
  const { is1200 } = useGetWindowSize();

  return (
    <footer className={styles.footer}>
      <section className={styles.leftSection}>
        {!is1200 && <Maskot />}
        <DownloadBlock />
        {is1200 && <LangAndSocials />}
        <Preventions />
      </section>

      {!is1200 && (
        <section className={styles.rightSection}>
          <LangAndSocials />
        </section>
      )}
    </footer>
  );
};

export default Footer;
