import { useState } from "react";
import { useTranslation } from "react-i18next";

import { Logo, Preview, Button } from "../../ui";
import CasinoFrame from "../CasinoFrame/CasinoFrame";

import styles from "./Main.module.scss";

const MainContent = ({ onClick }: { onClick: () => void }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.mainContentWrapper}>
      <div className={styles.logoWrapper}>
        <Logo />
      </div>
      <div className={styles.previewWrapper}>
        <Preview />
      </div>
      <div className={styles.buttonWrapper}>
        <Button title={t("main.openButton")} onClick={onClick} />
      </div>
    </div>
  );
};

const Main = () => {
  const [open, setOpen] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const handleLoad = () => {
    setLoading(false);
  };

  const handleOpen = () => {
    setOpen((prev) => !prev);
    setLoading(true);
  };

  const handleClose = () => {
    setOpen((prev) => !prev);
  };

  return (
    <main className={styles.main}>
      {open ? (
        <div className={styles.casinoFrameWrapper}>
          <CasinoFrame
            onClose={handleClose}
            onLoad={handleLoad}
            isLoading={isLoading}
          />
        </div>
      ) : (
        <MainContent onClick={handleOpen} />
      )}
    </main>
  );
};

export default Main;
