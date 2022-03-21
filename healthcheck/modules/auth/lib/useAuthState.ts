import create from "zustand";

import { actions, Actions, initState, State } from "../state";

export const useAuthState = create<State & Actions>((set, state) => ({
  ...initState,
  ...actions(set, state()),
}));
