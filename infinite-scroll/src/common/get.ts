import { firstValueFrom } from "rxjs";
import { ajax } from "rxjs/ajax";

import { Url } from "./url";

export const get =
  <T>() =>
  (url: Url) =>
    firstValueFrom(ajax.getJSON<T>(url));
