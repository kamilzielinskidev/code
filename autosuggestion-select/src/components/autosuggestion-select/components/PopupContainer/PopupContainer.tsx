import { FC, useRef } from "react";

import { POPUP_WIDTH } from "../../constants";
import { useClickOutside } from "../../hooks/useClickOutside";
import { usePressEscape } from "../../hooks/usePressEscape";
import { useActions } from "../../states/actions";
import styles from "./PopupContainer.module.css";

export const PopupContainer: FC = ({ children }) => {
  const { closePopup } = useActions;
  const divRef = useRef<HTMLDivElement>(null);

  useClickOutside(divRef, closePopup);
  usePressEscape(closePopup);

  return (
    <div ref={divRef} className={styles.popup} style={{ width: POPUP_WIDTH }}>
      {children}
    </div>
  );
};
