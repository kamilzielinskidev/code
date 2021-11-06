import {
  debounce,
  delay,
  filter,
  from,
  map,
  mapTo,
  merge,
  of,
  scan,
  share,
  Subject,
  switchMap,
  tap,
  throttle,
} from "rxjs";

const fetch$ = new Subject<void>();

const request = (page: number) =>
  new Promise<Array<string>>((res) => {
    console.log("FETCH DATA");
    setTimeout(() => {
      res([`page: ${page}`]);
    }, 500);
  });

const getData$ = fetch$.pipe(
  throttle(() => isLoading$.pipe(filter((x) => x === false)))
);

// most important part ====
const response$ = getData$.pipe(
  scan((acc) => acc + 1, 0),
  switchMap((page) => from(request(page))),
  scan((acc, next) => [...acc, ...next], []),
  share()
);
// ========================

const isLoading$ = merge(
  fetch$.pipe(mapTo(true)),
  response$.pipe(mapTo(false))
);

merge(
  response$.pipe(map((v) => ({ type: "getResponse", v }))),
  isLoading$.pipe(map((v) => ({ type: "load", v })))
).subscribe(console.log);

fetch$.next();
fetch$.next();
fetch$.next();
setTimeout(() => {
  fetch$.next();
  fetch$.next();
}, 1000);
fetch$.next();
