import { QueryState, useQueryState } from "./queryState";
import { UIState, useUIState } from "./uiState";
import { UniversitiesState, useUniversitiesState } from "./universitiesState";

type State = UIState & QueryState & UniversitiesState;

export const useSelector = () => {
  const { isPopupOpen } = useUIState();
  const { query } = useQueryState();
  const { pickedUniversities, availableUniversities } = useUniversitiesState();

  return <State>{
    isPopupOpen,
    query,
    pickedUniversities,
    availableUniversities,
  };
};
