import { useState } from "react";
import { useTranslation } from "react-i18next";

import { Logo, Preview, Button } from "../../ui";
import CasinoFrame from "../CasinoFrame/CasinoFrame";

import styles from "./Main.module.scss";

const MainContent = ({
  onClick,
  isLoaded,
}: {
  onClick: () => void;
  isLoaded: boolean;
}) => {
  const { t } = useTranslation();

  return (
    <>
      <div className={styles.logoWrapper}>
        <Logo />
      </div>
      <div className={styles.previewWrapper}>
        <Preview />
      </div>
      <div className={styles.buttonWrapper}>
        <Button
          title={t("main.openButton")}
          onClick={onClick}
          disabled={isLoaded}
        />
      </div>
    </>
  );
};

const Main = () => {
  const [open, setOpen] = useState(false);
  const [isFrameLoaded, setFrameLoaded] = useState(false);

  const handleLoad = () => {
    setFrameLoaded(true);
  };

  const toggleOpen = () => {
    setOpen((prev) => !prev);
    setFrameLoaded(false);
  };

  return (
    <main className={styles.main}>
      {open && !isFrameLoaded && (
        <MainContent onClick={toggleOpen} isLoaded={isFrameLoaded} />
      )}
      {open ? (
        <CasinoFrame
          onClose={toggleOpen}
          onLoad={handleLoad}
          isLoaded={isFrameLoaded}
        />
      ) : (
        <MainContent onClick={toggleOpen} isLoaded={isFrameLoaded} />
      )}
    </main>
  );
};

export default Main;
