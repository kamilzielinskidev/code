import { FC, useRef } from "react";

import { Callback } from "../../../../helpers";
import { useClickOutside } from "../../hooks/useClickOutside";
import { PopupHorizontalPosition } from "../../models";
import { popupPosition } from "./helpers";
import styles from "./PopupContainer.module.css";

type Props = {
  position: PopupHorizontalPosition;
  clickOutside: Callback<void, void>;
};

export const PopupContainer: FC<Props> = ({ position, clickOutside }) => {
  const divRef = useRef<HTMLDivElement>(null);

  useClickOutside(divRef, clickOutside);

  return (
    <div
      ref={divRef}
      className={`${styles.popup} ${popupPosition(styles)(position)}`}
    ></div>
  );
};
