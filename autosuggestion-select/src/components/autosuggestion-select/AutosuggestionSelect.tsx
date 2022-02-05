import { FC, useRef } from "react";

import styles from "./AutosuggestionSelect.module.css";
import { PopupContainer } from "./components/PopupContainer/PopupContainer";
import { SelectButton } from "./components/SelectButton/SelectButton";
import { POPUP_WIDTH } from "./constants";
import { popupHorizontalPosition, popupPosition } from "./helpers";
import { useUIState } from "./state";

export const AutosuggestionSelect: FC = () => {
  const selectButtonRef = useRef<HTMLButtonElement>(null);
  const { isPopupOpen } = useUIState();

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
          {isPopupOpen && <PopupContainer />}
        </div>
      )}
    </div>
  );
};
