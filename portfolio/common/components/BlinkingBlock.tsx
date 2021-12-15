import { FC } from "react";

import styles from "./BlinkingBlock.module.css";

export const BlinkingBlock: FC = () => {
  return <span className={styles["blink-1"]}>█</span>;
};
