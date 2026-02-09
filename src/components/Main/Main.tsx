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

interface IMainProps {
  open: boolean;
  isLoading: boolean;
  onOpen: () => void;
  onClose: () => void;
  onLoad: () => void;
}

const Main = ({ onOpen, open, ...props }: IMainProps) => {
  return (
    <main className={styles.main}>
      {open ? (
        <div className={styles.casinoFrameWrapper}>
          <CasinoFrame {...props} />
        </div>
      ) : (
        <MainContent onClick={onOpen} />
      )}
    </main>
  );
};

export default Main;
