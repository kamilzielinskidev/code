import { FC, useState } from "react";

import styles from "./AutosuggestionSelect.module.css";

export const AutosuggestionSelect: FC = () => {
  const [isOpen, toggleIsOpen] = useState(false);

  const open = () => toggleIsOpen(true);

  const close = () => toggleIsOpen(false);

  return (
    <button
      className={styles.select}
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
  );
};
