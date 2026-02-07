import { useTranslation } from "react-i18next";
import Image from "../../ui/Image/Image";

import certifiedIcon from "../../assets/certified.png";
import adultIcon from "../../assets/adult.png";

import styles from "./Preventions.module.scss";

const Preventions = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.preventionsWrapper}>
      <div className={styles.prevention}>
        <div className={styles.iconWrapper}>
          <Image src={adultIcon} width={58} height={58} />
        </div>
        <p className={styles.preventionText}>{t("prevention.1")}</p>
      </div>
      <div className={styles.prevention}>
        <div className={styles.iconWrapper}>
          <Image src={certifiedIcon} width={58} height={58} />
        </div>
        <p className={styles.preventionText}>{t("prevention.2")}</p>
      </div>
    </div>
  );
};

export default Preventions;
