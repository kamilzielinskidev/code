import { FC, useState } from "react";

import { useUniversitiesState } from "../../state";
import { getUniversities } from "./helpers";
import styles from "./UniversitiesInput.module.css";

export const UniversitiesInput: FC = () => {
  const [isFocused, setIsFocused] = useState(false);
  const { changeUniversities } = useUniversitiesState();

  const focus = () => setIsFocused(true);
  const unFocus = () => setIsFocused(false);

  return (
    <div className={styles["container-outer"]}>
      <div
        className={`${styles["container-inner"]} ${
          isFocused && styles["container-inner--is-focused"]
        }`}
      >
        <span>🔍</span>
        <input
          type="text"
          placeholder="Szukaj uniwersytetu"
          onFocus={focus}
          onBlur={unFocus}
          onChange={getUniversities(changeUniversities)}
          aria-label="Szukaj uniwersytetu"
        />
      </div>
    </div>
  );
};
