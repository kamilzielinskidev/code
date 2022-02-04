import { PopupHorizontalPosition, Styles } from "../../models";

// separate function if ex: from bottom or from up will be implemented
export const popupPosition =
  (styles: Styles) => (position: PopupHorizontalPosition) =>
    position === "START" ? styles["from-left"] : styles["from-right"];
