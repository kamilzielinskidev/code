import { forwardRef } from "react";

import { useUIState } from "../../state";
import styles from "./SelectButton.module.css";

export const SelectButton = forwardRef<HTMLButtonElement>((_, ref) => {
  const { isPopupOpen, togglePopup } = useUIState();

  const open = () => togglePopup(true);
  const close = () => togglePopup(false);

  return (
    <button
      ref={ref}
      className={`${styles.select} ${isPopupOpen && styles["select--open"]}`}
      aria-haspopup="true"
      aria-expanded={isPopupOpen}
      onClick={isPopupOpen ? close : open}
    >
      Universities
      {
        // TODO: use some fancy icon here
        isPopupOpen ? "▲" : "▼"
      }
    </button>
  );
});
