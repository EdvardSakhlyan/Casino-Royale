import { useState } from "react";
import { Footer, Main } from "../../components";

import styles from "./MainPage.module.scss";

const MainPage = () => {
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
    <div className={styles.mainWrapper}>
      <Main
        open={open}
        isLoading={isLoading}
        onOpen={handleOpen}
        onClose={handleClose}
        onLoad={handleLoad}
      />
      <Footer frameOpen={open} />
    </div>
  );
};

export default MainPage;
