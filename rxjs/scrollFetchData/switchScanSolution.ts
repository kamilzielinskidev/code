import {
  debounce,
  debounceTime,
  delay,
  exhaustMap,
  expand,
  first,
  from,
  map,
  mapTo,
  merge,
  of,
  scan,
  share,
  Subject,
  switchMap,
  switchScan,
  tap,
  throttleTime,
} from "rxjs";

const fetch$ = new Subject<void>();

const request = (page: number) =>
  new Promise<Array<string>>((res) => {
    console.log("FETCH DATA");
    setTimeout(() => {
      res([`page: ${page}`]);
    }, 500);
  });

// most important part ====
const response$ = fetch$.pipe(
  mapTo({ page: 0, content: [] }),
  expand(({ page, content }) =>
    of({}).pipe(
      exhaustMap(() =>
        from(request(page || 0)).pipe(
          map((res) => ({
            page: page + 1,
            content: [...content, ...res],
          }))
        )
      ),
      first()
    )
  )
);
// ========================

const isLoading$ = merge(
  fetch$.pipe(mapTo(true)),
  response$.pipe(mapTo(false))
);

merge(
  response$.pipe(map((v) => ({ t: "getResponse", v }))),
  isLoading$.pipe(map((v) => ({ t: "load", v })))
).subscribe(console.log);

fetch$.next();
fetch$.next();
fetch$.next();
setTimeout(() => {
  fetch$.next();
  fetch$.next();
}, 1000);
fetch$.next();
