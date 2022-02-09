import { FC } from "react";

import { University } from "../../domains/university";
import { useActions } from "../../states/actions";
import { check } from "./helpers";
import styles from "./UniversityItem.module.css";

type Props = {
  university: University;
};

export const UniversityItem: FC<Props> = ({ university }) => {
  const { pickUniversity, unpickUniversity } = useActions;

  return (
    <label className={styles.item}>
      <input
        type="checkbox"
        checked={university.isPicked}
        onChange={check((a) =>
          a ? pickUniversity(university) : unpickUniversity(university)
        )}
      />
      <span
        className={`${styles.text} ${
          university.isPicked && styles["text--is-picked"]
        }`}
      >
        {university.name}
      </span>
      <div className={styles.checkmark}>{university.isPicked ? "✓" : ""}</div>
    </label>
  );
};
