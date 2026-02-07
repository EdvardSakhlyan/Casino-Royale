import { useState } from "react";
import { Image } from "../../ui";
import arrowIcon from "../../assets/arrow.svg";
import { type Option } from "../../types/index";
import { options } from "../../constants";

import styles from "./LanguageSelect.module.scss";

const LanguageSelect = ({ onChange }: { onChange: (code: string) => void }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Option>(options[0]);

  const handleSelect = (option: Option) => {
    setSelected(option);
    onChange(option.code);
    setOpen(false);
  };

  return (
    <div className={styles.wrapper}>
      <button className={styles.select} onClick={() => setOpen((o) => !o)}>
        <span className={`${styles.flag}`}>
          <Image src={selected.flag} alt={selected.label} />
        </span>
        <span className={styles.label}>{selected.label}</span>
        <span className={`${styles.arrow} ${open ? styles.open : ""}`}>
          <img src={arrowIcon} />
        </span>
      </button>

      {open && (
        <div className={styles.dropdown}>
          {options.map((option) => (
            <button
              key={option.code}
              className={styles.option}
              onClick={() => handleSelect(option)}
            >
              <span className={styles.flag}>
                <Image src={option.flag} alt={option.label} />
              </span>
              <span>{option.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelect;
