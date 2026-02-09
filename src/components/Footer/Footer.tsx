import Maskot from "../../ui/Maskot/Maskot";
import DownloadBlock from "../DownloadBlock/DownloadBlock";
import Preventions from "../Preventions/Preventions";
import LangAndSocials from "../LangAndSocials/LangAndSocials";
import { useGetWindowSize } from "../../hooks";

import styles from "./Footer.module.scss";

const Footer = () => {
  const { is1440 } = useGetWindowSize();

  return (
    <footer className={styles.footer}>
      <section className={styles.leftSection}>
        {!is1440 && <Maskot />}
        <DownloadBlock />
        {is1440 && <LangAndSocials />}
        <Preventions />
      </section>

      {!is1440 && (
        <section className={styles.rightSection}>
          <LangAndSocials />
        </section>
      )}
    </footer>
  );
};

export default Footer;
