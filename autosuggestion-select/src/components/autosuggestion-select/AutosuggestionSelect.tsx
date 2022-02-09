import { FC, useEffect, useRef } from "react";

import { Callback } from "../../helpers";
import styles from "./AutosuggestionSelect.module.css";
import { PopupContainer } from "./components/PopupContainer/PopupContainer";
import { SelectButton } from "./components/SelectButton/SelectButton";
import { UniversitiesInput } from "./components/UniversitiesInput/UniversitiesInput";
import { UniversitiesList } from "./components/UniversitiesList/UniversitiesList";
import { POPUP_WIDTH } from "./constants";

import {
  clearUniversities,
  popupHorizontalPosition,
  popupPosition,
} from "./helpers";
import { useSelector } from "./states/selectors";

type Props = {
  onPick: Callback<Readonly<string[]>, void>;
};

export const AutosuggestionSelect: FC<Props> = ({ onPick }) => {
  const selectButtonRef = useRef<HTMLButtonElement>(null);
  const { isPopupOpen, pickedUniversities } = useSelector();

  useEffect(
    () => onPick(clearUniversities(pickedUniversities)),
    [pickedUniversities]
  );

  return (
    <div className={styles.container}>
      <SelectButton ref={selectButtonRef} />

      {selectButtonRef.current && (
        // TODO: extract this
        <div
          className={`${styles["popup-container-over"]} ${popupPosition(styles)(
            popupHorizontalPosition(window)(selectButtonRef.current)(
              POPUP_WIDTH
            )
          )}`}
        >
          {isPopupOpen && (
            <PopupContainer>
              <UniversitiesInput />
              <UniversitiesList />
            </PopupContainer>
          )}
        </div>
      )}
    </div>
  );
};
