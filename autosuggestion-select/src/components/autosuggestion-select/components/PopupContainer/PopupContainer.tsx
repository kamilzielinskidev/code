import { FC, useRef } from "react";
import { POPUP_WIDTH } from "../../constants";

import { useClickOutside } from "../../hooks/useClickOutside";
import { usePressEscape } from "../../hooks/usePressEscape";
import { useUIState } from "../../state";
import styles from "./PopupContainer.module.css";

export const PopupContainer: FC = ({ children }) => {
  const { togglePopup } = useUIState();
  const divRef = useRef<HTMLDivElement>(null);

  const close = () => togglePopup(false);

  useClickOutside(divRef, close);
  usePressEscape(close);

  return (
    <div ref={divRef} className={styles.popup} style={{ width: POPUP_WIDTH }}>
      {children}
    </div>
  );
};
