import { useTranslation } from "react-i18next";
import { Button, Logo } from "../../ui";
import downloadIcon from "../../assets/download.svg";

import styles from "./DownloadBlock.module.scss";

const DownloadBlock = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.downloadBlock}>
      <div className={styles.downloadContent}>
        <div className={styles.logoWrapper}>
          <Logo />
        </div>
        <div className={styles.downloadTexts}>
          <h3 className={styles.downloadTitle}>{t("downloadBlock.title")}</h3>
          <p className={styles.downloadDescription}>
            {t("downloadBlock.description")}
          </p>
        </div>

        <Button
          title={t("downloadBlock.installButton")}
          width="250px"
          Icon={<img src={downloadIcon} alt="Install Icon" />}
          className={styles.installButton}
        />
      </div>
    </div>
  );
};

export default DownloadBlock;
