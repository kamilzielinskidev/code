import { FC, useEffect, useRef } from "react";
import { Callback } from "../../helpers";

import styles from "./AutosuggestionSelect.module.css";
import { PopupContainer } from "./components/PopupContainer/PopupContainer";
import { SelectButton } from "./components/SelectButton/SelectButton";
import { UniversitiesInput } from "./components/UniversitiesInput/UniversitiesInput";
import { UniversitiesList } from "./components/UniversitiesList/UniversitiesList";
import { POPUP_WIDTH } from "./constants";
import { popupHorizontalPosition, popupPosition } from "./helpers";
import { University } from "./models";
import {
  useQueryState,
  useUIState,
  useUniversitiesPicksState,
  useAPIUniversitiesState,
} from "./state";

type Props = {
  onPick: Callback<University[], void>;
};

export const AutosuggestionSelect: FC<Props> = ({ onPick }) => {
  const selectButtonRef = useRef<HTMLButtonElement>(null);
  const { isPopupOpen } = useUIState();
  const { APIuniversities } = useAPIUniversitiesState();
  const { pickedUniversities } = useUniversitiesPicksState();
  const { query } = useQueryState();

  useEffect(() => onPick(pickedUniversities), [pickedUniversities]);

  return (
    <div className={styles.container}>
      <SelectButton ref={selectButtonRef} />
      {selectButtonRef.current && (
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
              <UniversitiesList
                universities={query ? APIuniversities : pickedUniversities}
              />
            </PopupContainer>
          )}
        </div>
      )}
    </div>
  );
};
