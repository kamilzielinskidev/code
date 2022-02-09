import { pipe } from "@mobily/ts-belt";

import { andThen } from "../../../helpers";
import { getQueriedUniversities } from "../api";
import { University } from "../domains/university";
import { QueryActions, useQueryState } from "./queryState";
import { UIActions, useUIState } from "./uiState";
import { UniversitiesActions, useUniversitiesState } from "./universitiesState";

type Actions = UIActions & QueryActions & UniversitiesActions;

const actionsBuilder = (actions: Actions) => ({
  openPopup: () => {
    actions.open();
  },
  closePopup: () => {
    actions.close();
    actions.clearQuery();
    actions.clearAvailableUniversities();
  },
  inputQuery: (query: string) => {
    actions.changeQuery(query);
    pipe(
      query,
      getQueriedUniversities,
      andThen(actions.changeAvailableUniversities)
    );
  },
  pickUniversity: (university: University) => {
    actions.pickUniversity(university);
  },
  unpickUniversity: (university: University) => {
    actions.unpickUniversity(university);
  },
});

export const useActions = actionsBuilder({
  ...useUIState.getState(),
  ...useQueryState.getState(),
  ...useUniversitiesState.getState(),
});
