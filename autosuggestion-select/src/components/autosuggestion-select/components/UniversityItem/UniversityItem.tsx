import { FC, useState } from "react";

import { University } from "../../models";
import { check } from "./helpers";
import styles from "./UniversityItem.module.css";

type Props = {
  university: University;
};

export const UniversityItem: FC<Props> = ({ university: { name } }) => {
  const [isChecked, changeIsChecked] = useState(false);

  return (
    <label className={styles.item}>
      <input type="checkbox" onChange={check(changeIsChecked)} />
      <span className={styles.text}>{name}</span>
      <div className={styles.checkmark}>{isChecked ? "✓" : ""}</div>
    </label>
  );
};
