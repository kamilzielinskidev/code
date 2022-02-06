import { FC } from "react";

import styles from "./App.module.css";
import { AutosuggestionSelect } from "./components/autosuggestion-select/AutosuggestionSelect";

export const App: FC = () => (
  <div className={styles.container}>
    <AutosuggestionSelect onPick={(a) => console.log(a)} />
  </div>
);
