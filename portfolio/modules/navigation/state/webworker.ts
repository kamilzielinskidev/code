import { BehaviorSubject } from "rxjs";
import { expose } from "threads/worker";

const isMenuOpen$ = new BehaviorSubject<boolean>(false);

const navigationState = {
  toggleIsMenuOpen: (isMenuOpen: boolean) => isMenuOpen$.next(isMenuOpen),
  isMenuOpen: () => isMenuOpen$,
};

export type NavigationState = typeof navigationState;

expose(navigationState);
