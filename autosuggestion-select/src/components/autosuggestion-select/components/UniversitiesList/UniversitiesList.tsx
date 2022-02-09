import { FC } from "react";

import { useSelector } from "../../states/selectors";
import { UniversityItem } from "../UniversityItem/UniversityItem";
import styles from "./UniversitiesList.module.css";

export const UniversitiesList: FC = () => {
  const { availableUniversities, pickedUniversities, query } = useSelector();

  const universitiesToDisplay = query
    ? availableUniversities
    : pickedUniversities;

  return (
    <ul className={styles.list}>
      {universitiesToDisplay.map((university) => (
        <li key={university.name}>
          <UniversityItem university={university} />
        </li>
      ))}
    </ul>
  );
};
