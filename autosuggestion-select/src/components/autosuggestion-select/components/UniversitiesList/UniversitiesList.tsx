import { FC } from "react";

import { University } from "../../models";
import { UniversityItem } from "../UniversityItem/UniversityItem";
import styles from "./UniversitiesList.module.css";

type Props = {
  universities: University[];
};

export const UniversitiesList: FC<Props> = ({ universities }) => (
  <ul className={styles.list}>
    {universities.map((university) => (
      <li key={university.id}>
        <UniversityItem university={university} />
      </li>
    ))}
  </ul>
);
