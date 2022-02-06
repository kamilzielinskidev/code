import { FC } from "react";

import { University } from "../../models";
import { useUniversitiesPicksState } from "../../state";
import { check } from "./helpers";
import styles from "./UniversityItem.module.css";

type Props = {
  university: University;
};

export const UniversityItem: FC<Props> = ({ university }) => {
  const {
    addUniversity,
    removeUniversity,
    pickedUniversities: universities,
  } = useUniversitiesPicksState();

  const isPicked = universities.includes(university);

  return (
    <label className={styles.item}>
      <input
        type="checkbox"
        checked={isPicked}
        onChange={check((a) =>
          a ? addUniversity(university) : removeUniversity(university)
        )}
      />
      <span
        className={`${styles.text} ${isPicked && styles["text--is-picked"]}`}
      >
        {university.name}
      </span>
      <div className={styles.checkmark}>{isPicked ? "✓" : ""}</div>
    </label>
  );
};
