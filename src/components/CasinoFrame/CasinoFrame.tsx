import { useTranslation } from "react-i18next";
import { getFrameUrl } from "../../constants";

import styles from "./CasinoFrame.module.scss";

const CasinoFrame = ({
  onClose,
  onLoad,
  isLoading,
}: {
  onClose: () => void;
  onLoad?: () => void;
  isLoading?: boolean;
}) => {
  const { i18n } = useTranslation();

  return (
    <div
      className={styles.frameWrapper}
      style={{
        position: !isLoading ? "absolute" : "relative",
        display: isLoading ? "none" : undefined,
      }}
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
