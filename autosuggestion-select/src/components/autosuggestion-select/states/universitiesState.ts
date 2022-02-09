import { A, F, O, pipe } from "@mobily/ts-belt";

import create from "zustand";

import { Callback } from "../../../helpers";
import {
  compareUniversities,
  pickUniversity,
  Universities,
  University,
  unpickUniversity,
} from "../domains/university";

export type UniversitiesState = {
  pickedUniversities: Universities;
  availableUniversities: Universities;
};

export type UniversitiesActions = {
  pickUniversity: Callback<University, void>;
  unpickUniversity: Callback<University, void>;
  unpickAllUniversities: Callback<void, void>;
  clearAvailableUniversities: Callback<void, void>;
  changeAvailableUniversities: Callback<Universities, void>;
};

// TODO: extract these and test
export const useUniversitiesState = create<
  UniversitiesState & UniversitiesActions
>((set) => ({
  pickedUniversities: [],
  availableUniversities: [],
  pickUniversity: (university) =>
    set((state) => ({
      pickedUniversities: A.append(
        state.pickedUniversities,
        pickUniversity(university)
      ),
      availableUniversities: A.map(
        state.availableUniversities,
        F.ifElse(compareUniversities(university), pickUniversity, F.identity)
      ),
    })),
  unpickUniversity: (university) =>
    set((state) => ({
      pickedUniversities: A.filter(
        state.pickedUniversities,
        (uni) => !compareUniversities(uni)(university)
      ),
      availableUniversities: A.map(state.availableUniversities, (uni) =>
        compareUniversities(university)(uni) ? unpickUniversity(uni) : uni
      ),
    })),
  unpickAllUniversities: () => set(() => ({ pickedUniversities: [] })),
  clearAvailableUniversities: () => set(() => ({ availableUniversities: [] })),
  changeAvailableUniversities: (universities) =>
    set((state) => ({
      availableUniversities: A.map(universities, (university) =>
        pipe(
          A.find(state.availableUniversities, compareUniversities(university)),
          O.getWithDefault(university)
        )
      ),
    })),
}));
