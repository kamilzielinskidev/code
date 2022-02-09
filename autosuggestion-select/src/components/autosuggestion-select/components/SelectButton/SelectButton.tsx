import { forwardRef } from "react";

import { useActions } from "../../states/actions";
import { useSelector } from "../../states/selectors";
import styles from "./SelectButton.module.css";

export const SelectButton = forwardRef<HTMLButtonElement>((_, ref) => {
  const { openPopup, closePopup } = useActions;
  const { isPopupOpen } = useSelector();

  return (
    <button
      ref={ref}
      className={`${styles.select} ${isPopupOpen && styles["select--open"]}`}
      aria-haspopup="true"
      aria-expanded={isPopupOpen}
      onClick={() => (isPopupOpen ? closePopup() : openPopup())}
    >
      Universities
      {
        // TODO: use some fancy icon here
        isPopupOpen ? "▲" : "▼"
      }
    </button>
  );
});
