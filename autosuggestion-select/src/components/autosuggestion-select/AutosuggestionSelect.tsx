import { FC, useRef, useState } from "react";

import styles from "./AutosuggestionSelect.module.css";
import { PopupContainer } from "./components/PopupContainer/PopupContainer";
import { POPUP_WIDTH } from "./constants";
import { popupHorizontalPosition } from "./helpers";

export const AutosuggestionSelect: FC = () => {
  const [isOpen, toggleIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const open = () => toggleIsOpen(true);
  const close = () => toggleIsOpen(false);

  return (
    <div className={styles.container}>
      <button
        ref={buttonRef}
        className={`${styles.select} ${isOpen && styles["select--open"]}`}
        aria-haspopup="true"
        aria-expanded={isOpen}
        onClick={isOpen ? close : open}
      >
        Universities
        {
          // TODO: use some fancy icon here
          isOpen ? "▲" : "▼"
        }
      </button>
      {buttonRef.current && isOpen && (
        <div className={styles["popup-over-hack"]}>
          <PopupContainer
            clickOutside={close}
            position={popupHorizontalPosition(window)(buttonRef.current)(
              POPUP_WIDTH
            )}
          />
        </div>
      )}
    </div>
  );
};
