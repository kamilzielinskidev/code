import { FC, useEffect, useState } from "react";

import { F, pipe } from "@mobily/ts-belt";

import { useQueryState, useAPIUniversitiesState } from "../../state";
import { callWithValue, getUniversities } from "./helpers";
import styles from "./UniversitiesInput.module.css";

export const UniversitiesInput: FC = () => {
  const [isFocused, setIsFocused] = useState(false);
  const { changeAPIUniversities } = useAPIUniversitiesState();
  const { changeQuery, clearQuery } = useQueryState();

  useEffect(clearQuery, []);

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
          onChange={callWithValue((value) =>
            pipe(
              value,
              F.tap(getUniversities(changeAPIUniversities)),
              F.tap(changeQuery)
            )
          )}
          aria-label="Szukaj uniwersytetu"
        />
      </div>
    </div>
  );
};
