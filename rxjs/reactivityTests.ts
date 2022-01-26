import { merge, of, ReplaySubject } from "rxjs";
import { delay, map, mapTo, switchMap, withLatestFrom } from "rxjs/operators";

type SomeLocation = { street: string; city: string };

const openDrawer$ = new ReplaySubject<void>();
const closeDrawer$ = new ReplaySubject<void>();
const init$ = new ReplaySubject<void>();
const assignName$ = new ReplaySubject<void>();
const setLocation$ = new ReplaySubject<void>();
const changeLocation$ = new ReplaySubject<SomeLocation>();
const changeName$ = new ReplaySubject<string>();

const name$ = merge(merge(init$, openDrawer$).pipe(mapTo(null)), changeName$);

const assignResponse$ = assignName$.pipe(
  withLatestFrom(name$),
  switchMap(([_, name]) => of(name).pipe(delay(500)))
);

const location$ = merge(
  merge(init$, openDrawer$).pipe(mapTo(null)),
  changeLocation$
);

const setLocationResponse$ = setLocation$.pipe(
  withLatestFrom(name$, location$),
  switchMap(([_, name, location]) => of({ name, location }).pipe(delay(500)))
);

const isDrawerOpen$ = merge(
  openDrawer$.pipe(mapTo(true)),
  merge(closeDrawer$, init$, setLocationResponse$).pipe(mapTo(false))
);

const step$ = merge(
  merge(openDrawer$, init$).pipe(mapTo(0)),
  assignResponse$.pipe(mapTo(1))
);

const isLoading$ = merge(
  merge(assignName$, setLocation$).pipe(mapTo(true)),
  merge(assignResponse$, setLocationResponse$, init$, openDrawer$).pipe(
    mapTo(false)
  )
);

const rxlog = (name: string) => map((v) => ({ name, v }));

merge(
  isDrawerOpen$.pipe(rxlog("isDrawerOpen")),
  step$.pipe(rxlog("step")),
  isLoading$.pipe(rxlog("isLoading"))
).subscribe(console.log);

console.log("init");
init$.next();
console.log("openDrawer");
openDrawer$.next();
console.log("changeName");
changeName$.next("some name");
console.log("assignName");
assignName$.next();
// simulating changing the location only after assigning response
assignResponse$.subscribe(() => {
  console.log("changeLocation");
  changeLocation$.next({ street: "norwida", city: "ruda śl" });
  console.log("setLocation");
  setLocation$.next();
});
