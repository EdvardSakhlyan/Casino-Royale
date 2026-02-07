import { useTranslation } from "react-i18next";
import { getFrameUrl } from "../../constants";

import styles from "./CasinoFrame.module.scss";

const CasinoFrame = ({
  onClose,
  onLoad,
  isLoaded,
}: {
  onClose: () => void;
  onLoad?: () => void;
  isLoaded?: boolean;
}) => {
  const { i18n } = useTranslation();

  return (
    <div
      className={styles.frameWrapper}
      style={{ position: !isLoaded ? "absolute" : "relative" }}
    >
      <span className={styles.closeButton} onClick={onClose}>
        X
      </span>
      <iframe
        src={getFrameUrl(i18n.language)}
        title="Casino Game"
        width="100%"
        height="100%"
        style={{ border: "none" }}
        onLoad={onLoad}
      />
    </div>
  );
};

export default CasinoFrame;
