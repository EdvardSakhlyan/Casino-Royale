import maskotImg from "../../assets/maskot.png";
import Image from "../Image/Image";

import styles from "./Maskot.module.scss";

const Maskot = () => {
  return (
    <div className={styles.maskotWrapper}>
      <Image src={maskotImg} alt="Maskot" />
    </div>
  );
};

export default Maskot;
