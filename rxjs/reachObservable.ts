import {
  catchError,
  delay,
  iif,
  map,
  merge,
  Observable,
  of,
  pluck,
  repeatWhen,
  shareReplay,
  startWith,
  Subject,
  switchMap,
  tap,
  throwError,
} from "rxjs";

type APIResponse = { id: number; name: string }[];

const loading = <const>{ type: "LOADING" };
const data = <T>(data: T) => <const>{ type: "DATA", data };
const pre = <T>(data: T) => <const>{ type: "PRE", data };
const error = <T>(data: T) => <const>{ type: "ERROR", data };

const MOCK_RESPONSE = iif(
  () => Math.random() > 0.5,
  of<APIResponse>([{ id: 1, name: "a" }]).pipe(
    tap(() => console.log("REQUEST")),
    delay(1000)
  ),
  of([]).pipe(
    tap(() => console.log("REQUEST")),
    delay(1000),
    switchMap(() => throwError(() => new Error("Error")))
  )
);

const fetch$ = new Subject<void>();

const reach = <T>(
  initialValue: T,
  observable$: Observable<T>,
  repeater$: Observable<void>
) =>
  merge(
    of(pre(initialValue)),
    repeater$.pipe(
      switchMap(() =>
        observable$.pipe(
          repeatWhen(() => repeater$),
          map(data),
          catchError((err) => of(error(err))),
          startWith(loading)
        )
      )
    )
  ).pipe(shareReplay(1));

const articles = reach<APIResponse>(null, MOCK_RESPONSE, fetch$);

setTimeout(() => articles.pipe(pluck("type")).subscribe(console.log), 0);
setTimeout(() => fetch$.next(), 1000);
setTimeout(() => articles.pipe(pluck("type")).subscribe(console.log), 2000);
setTimeout(() => fetch$.next(), 5000);

export default reach;
