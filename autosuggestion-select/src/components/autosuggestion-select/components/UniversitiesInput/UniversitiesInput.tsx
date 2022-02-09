import { FC, useState } from "react";

import { useActions } from "../../states/actions";
import { callWithValue } from "./helpers";
import styles from "./UniversitiesInput.module.css";

export const UniversitiesInput: FC = () => {
  const [isFocused, setIsFocused] = useState(false);
  const { inputQuery } = useActions;

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
          onChange={callWithValue(inputQuery)}
          aria-label="Szukaj uniwersytetu"
        />
      </div>
    </div>
  );
};
