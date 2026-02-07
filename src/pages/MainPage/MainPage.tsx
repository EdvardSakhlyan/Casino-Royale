import { Footer, Main } from "../../components";

import styles from "./MainPage.module.scss";

const MainPage = () => {
  return (
    <div className={styles.mainWrapper}>
      <Main />
      <Footer />
    </div>
  );
};

export default MainPage;
